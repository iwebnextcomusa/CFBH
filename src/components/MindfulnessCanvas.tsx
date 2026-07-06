import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function MindfulnessCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale" | "Rest">("Inhale");
  const [secondsLeft, setSecondsLeft] = useState(4);

  // Simple countdown synchronized with breathing cycle (4s inhale, 2s hold, 4s exhale, 2s rest)
  useEffect(() => {
    let timer: any;
    const runCycle = () => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setBreathPhase((currentPhase) => {
            switch (currentPhase) {
              case "Inhale":
                timer = setTimeout(() => {}, 0);
                return "Hold";
              case "Hold":
                return "Exhale";
              case "Exhale":
                return "Rest";
              case "Rest":
              default:
                return "Inhale";
            }
          });
          // Set duration for next phase
          return 4; // Inhale and Exhale are 4 seconds, Hold and Rest are 4 seconds
        }
        return prev - 1;
      });
    };

    timer = setInterval(runCycle, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfaf8f5, 0.015); // Calm slate-50 warm cream color for fog

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Create central core mesh (delicate wireframe sphere representing active mind / calm state)
    const geometry = new THREE.IcosahedronGeometry(4, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0xca8b63, // Tailwind sky-500 (Ochre/Clay)
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreSphere = new THREE.Mesh(geometry, material);
    scene.add(coreSphere);

    // Inner glowing sphere
    const innerGeom = new THREE.IcosahedronGeometry(1.8, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x76805c, // Tailwind teal-500 (Moss Green)
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerSphere = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerSphere);

    // Particle Cloud (mental clarity floating nodes)
    const particlesCount = 350;
    const positions = new Float32Array(particlesCount * 3);
    const randomSpeeds = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Place randomly inside a spherical shell
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5.0 + Math.random() * 2.5; // distance from center

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);

      randomSpeeds[i / 3] = 0.5 + Math.random() * 0.5;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Simple custom Canvas circle particle material
    const createParticleTexture = () => {
      const canvasTex = document.createElement("canvas");
      canvasTex.width = 16;
      canvasTex.height = 16;
      const ctx = canvasTex.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.3, "rgba(118, 128, 92, 0.8)"); // Moss/Sage
        grad.addColorStop(1, "rgba(118, 128, 92, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvasTex);
    };

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Directional delicate light
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Interactive mouse movement tracker
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Setup Resize Observer for robust responsive container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        let { width: newWidth, height: newHeight } = entry.contentRect;
        newWidth = Math.floor(newWidth);
        newHeight = Math.floor(newHeight) || 450;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
        width = newWidth;
        height = newHeight;
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax movement
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 3;
      camera.position.y = targetY * 3;
      camera.lookAt(scene.position);

      // Rotate objects slowly
      coreSphere.rotation.y = elapsedTime * 0.12;
      coreSphere.rotation.x = elapsedTime * 0.08;

      innerSphere.rotation.y = -elapsedTime * 0.18;
      innerSphere.rotation.z = elapsedTime * 0.05;

      particleSystem.rotation.y = elapsedTime * 0.04;

      // Breathing effect - organic slow oscillation (pulse)
      // Standard breathing cycle: map sin waves to a calming rhythmic expansion
      const breatheSpeed = 0.5; // Rhythmic breath speed
      const basePulse = Math.sin(elapsedTime * breatheSpeed);
      const scale = 1.0 + basePulse * 0.15; // smooth expansion up to 15%
      
      coreSphere.scale.set(scale, scale, scale);
      innerSphere.scale.set(1 / scale, 1 / scale, 1 / scale);
      particleSystem.scale.set(scale * 1.05, scale * 1.05, scale * 1.05);

      // Rotate particles slightly differently for fluid look
      const posAttr = particlesGeometry.attributes.position;
      if (posAttr) {
        const arr = posAttr.array as Float32Array;
        for (let i = 0; i < particlesCount; i++) {
          const idx = i * 3;
          // Apply a tiny swirling orbital velocity
          const speed = randomSpeeds[i] * 0.002;
          const x = arr[idx];
          const z = arr[idx + 2];
          arr[idx] = x * Math.cos(speed) - z * Math.sin(speed);
          arr[idx + 2] = x * Math.sin(speed) + z * Math.cos(speed);
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.unobserve(container);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div id="mindfulness-interactive-3d" className="relative w-full h-[450px] bg-gradient-to-b from-teal-50/50 to-sky-50/50 rounded-2xl border border-teal-100 overflow-hidden flex flex-col items-center justify-between p-6">
      <div className="absolute inset-0 w-full h-full" ref={containerRef}>
        <canvas className="w-full h-full block" ref={canvasRef} />
      </div>

      {/* Floating Header UI */}
      <div className="relative z-10 text-center pointer-events-none mt-2">
        <span className="text-xs font-mono font-semibold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
          Mindfulness Space
        </span>
        <h3 className="text-xl font-semibold text-slate-800 mt-2">Interactive Breathing Guide</h3>
        <p className="text-xs text-slate-500 max-w-sm mt-1">
          Take a deep breath and match your inhales & exhales to the expansion of the calming 3D wave sphere.
        </p>
      </div>

      {/* Breathing Instruction overlay */}
      <div className="relative z-10 bg-white/85 backdrop-blur-md border border-slate-100 shadow-lg px-8 py-4 rounded-xl text-center flex flex-col items-center pointer-events-none mb-4 min-w-[200px]">
        <span
          className={`text-2xl font-bold tracking-wide transition-all duration-700 ${
            breathPhase === "Inhale"
              ? "text-sky-600 scale-105"
              : breathPhase === "Hold"
              ? "text-amber-500 scale-100"
              : breathPhase === "Exhale"
              ? "text-teal-600 scale-105"
              : "text-slate-500 scale-100"
          }`}
        >
          {breathPhase}
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs font-mono font-medium text-slate-400">Time remaining:</span>
          <span className="text-sm font-mono font-bold text-slate-700">{secondsLeft}s</span>
        </div>
        <div className="w-24 bg-slate-100 h-1 rounded-full mt-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${
              breathPhase === "Inhale"
                ? "bg-sky-500"
                : breathPhase === "Hold"
                ? "bg-amber-400"
                : breathPhase === "Exhale"
                ? "bg-teal-500"
                : "bg-slate-300"
            }`}
            style={{ width: `${(secondsLeft / 4) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
