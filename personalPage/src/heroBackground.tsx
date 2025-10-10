import React, { useRef, useEffect } from "react";

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Animation variables
    let time = 0;
    const speed = 0.002;
    
    // Mouse tracking variables
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    
    // Click interaction variables
    let clickX = width / 2;
    let clickY = height / 2;
    let clickIntensity = 0;
    let clickTime = 0;

    const draw = () => {
      time += speed;
      
      // Smooth mouse following
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      
      // Update click effects
      clickIntensity *= 0.95; // Fade out click intensity
      clickTime += 0.1;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Create interactive gradient based on mouse position
      const gradient = ctx.createLinearGradient(
        mouseX - width * 0.3,
        mouseY - height * 0.3,
        mouseX + width * 0.3,
        mouseY + height * 0.3
      );
      
      // Black, white, and pink gradient with animated stops
      const intensity = (Math.sin(time * 2) + 1) * 0.5; // 0 to 1
      const clickEffect = clickIntensity * 0.5; // Click adds extra intensity
      
      gradient.addColorStop(0, `rgba(0, 0, 0, ${0.8 + intensity * 0.2 + clickEffect})`);
      gradient.addColorStop(0.2, `rgba(50, 50, 50, ${0.6 + intensity * 0.2 + clickEffect})`);
      gradient.addColorStop(0.4, `rgba(255, 105, 180, ${0.3 + intensity * 0.3 + clickEffect})`); // Pink
      gradient.addColorStop(0.6, `rgba(255, 182, 193, ${0.4 + intensity * 0.2 + clickEffect})`); // Light pink
      gradient.addColorStop(0.8, `rgba(200, 200, 200, ${0.6 + intensity * 0.2 + clickEffect})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${0.8 + intensity * 0.2 + clickEffect})`);
      
      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Add moving circles that respond to mouse and clicks
      for (let i = 0; i < 8; i++) {
        const baseX = (width / 6) * (i + 1);
        const baseY = (height / 6) * (i + 1);
        const mouseInfluence = 0.3; // How much mouse affects circles
        
        // Click effect: circles move away from click point
        const clickDistance = Math.sqrt((baseX - clickX) ** 2 + (baseY - clickY) ** 2);
        const clickPush = clickIntensity * (200 / (clickDistance + 1)) * 0.5;
        const clickAngle = Math.atan2(baseY - clickY, baseX - clickX);
        
        const x = baseX + Math.sin(time * 1.5 + i * 0.8) * width * 0.1 + (mouseX - baseX) * mouseInfluence + Math.cos(clickAngle) * clickPush;
        const y = baseY + Math.cos(time * 1.2 + i * 0.6) * height * 0.1 + (mouseY - baseY) * mouseInfluence + Math.sin(clickAngle) * clickPush;
        const radius = 80 + Math.sin(time * 3 + i) * 40 + clickIntensity * 20;
        
        // Cycle through black, white, and pink circles
        const colorType = i % 3;
        const opacity = 0.1 + Math.sin(time * 2 + i) * 0.05 + clickIntensity * 0.1;
        
        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        if (colorType === 0) {
          // White
          circleGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
          circleGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        } else if (colorType === 1) {
          // Pink
          circleGradient.addColorStop(0, `rgba(255, 105, 180, ${opacity})`);
          circleGradient.addColorStop(1, `rgba(255, 105, 180, 0)`);
        } else {
          // Black
          circleGradient.addColorStop(0, `rgba(0, 0, 0, ${opacity})`);
          circleGradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
        }
        
        ctx.fillStyle = circleGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Add some moving lines for extra effect
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time * 4) * 0.05})`;
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(
          Math.sin(time * 0.5 + i) * width,
          Math.cos(time * 0.3 + i) * height
        );
        ctx.lineTo(
          Math.sin(time * 0.5 + i + Math.PI) * width,
          Math.cos(time * 0.3 + i + Math.PI) * height
        );
        ctx.stroke();
      }
      
      requestAnimationFrame(draw);
    };

    draw();

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      clickX = e.clientX - rect.left;
      clickY = e.clientY - rect.top;
      clickIntensity = 1; // Trigger click effect
      clickTime = 0;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // Reset mouse position to center on resize
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    // Add event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default HeroBackground;