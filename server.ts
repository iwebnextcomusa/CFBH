import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize Gemini AI client
  // Using user key or hardcoded placeholder fallback as required in instructions
  const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU";
  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Store in-memory logs for appointments/contact submissions (simulating database)
  const appointments: any[] = [];
  const contacts: any[] = [];

  // API endpoints
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Convert history to structure compatible with GoogleGenAI chats
      const formattedHistory = history ? history.map((item: any) => ({
        role: item.role === "assistant" ? "model" : "user",
        parts: [{ text: item.content }]
      })) : [];

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: `You are a warm, empathetic, and professional virtual assistant representing the Center For Behavioral Health, a premier mental health practice located at 9 Auer Court, Suite A&B, East Brunswick, NJ 08816. Phone: (732) 257-1004. Email: svsrinivasan@yahoo.com and petzfurst@gmail.com.

Provide clear, supportive, and compassionate information about the practice's mental health services, which include:
- Psychiatric Evaluation
- Medication Management
- Individual Therapy
- Family Therapy
- Child & Adolescent Psychiatry
- Treatment for Anxiety, Depression, ADHD, Bipolar Disorder, PTSD, and Stress Management.
- Telehealth Services (Telepsychiatry).

When interacting with patients:
1. Maintain an extremely empathetic, professional, and patient-centered tone.
2. If they ask about scheduling or appointment booking, explain that they can easily fill out the "Request Appointment" form directly on our website, or call our team at (732) 257-1004.
3. If they describe symptoms, validate their feelings with deep empathy, but clearly remind them that you are an AI assistant and cannot provide medical advice, diagnosis, or treatment. Encourage them to consult with our qualified psychiatrists and therapists.
4. CRITICAL: If a user expresses suicidal thoughts, severe self-harm urges, or describes a mental health crisis, immediately and clearly advise them to dial 911, contact the 988 Suicide & Crisis Lifeline, or go to the nearest emergency department.

Keep responses concise, welcoming, and easy to read.`,
        },
        history: formattedHistory
      });

      const response = await chat.sendMessage({ message });
      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to communicate with AI helper. Please try again." });
    }
  });

  // Endpoint to handle appointment requests
  app.post("/api/appointments", (req, res) => {
    try {
      const { name, email, phone, datePreference, timePreference, preferredProvider, serviceRequested, message } = req.body;
      
      // Basic validation
      if (!name || !email || !phone || !datePreference || !timePreference || !serviceRequested) {
        return res.status(400).json({ error: "Please fill out all required fields." });
      }

      const newAppointment = {
        id: `apt-${Date.now()}`,
        name,
        email,
        phone,
        datePreference,
        timePreference,
        preferredProvider: preferredProvider || "No Preference",
        serviceRequested,
        message: message || "",
        status: "Pending Confirmation",
        createdAt: new Date().toISOString()
      };

      appointments.push(newAppointment);
      console.log("New Appointment Scheduled:", newAppointment);

      res.status(201).json({
        success: true,
        message: "Your appointment request has been submitted successfully! Our clinical coordinator will call you within 24 business hours to confirm.",
        appointment: newAppointment
      });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while submitting your appointment request." });
    }
  });

  // Endpoint to handle contact submissions
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Please fill out all required fields." });
      }

      const newContact = {
        id: `cnt-${Date.now()}`,
        name,
        email,
        phone: phone || "",
        subject,
        message,
        createdAt: new Date().toISOString()
      };

      contacts.push(newContact);
      console.log("New Contact Submission:", newContact);

      res.status(201).json({
        success: true,
        message: "Thank you for reaching out! We have received your message and will respond as soon as possible.",
        contact: newContact
      });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while submitting your message." });
    }
  });

  // Serve static site / Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
