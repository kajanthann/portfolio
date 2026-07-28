import React, { useEffect, useRef } from "react";

const IOT_NODES = [
  { x: 8, y: 12, size: 3, label: "ESP32" },
  { x: 82, y: 8, size: 2.5, label: "MQTT" },
  { x: 55, y: 85, size: 3, label: "STM32" },
  { x: 15, y: 72, size: 2, label: "Sensor" },
  { x: 90, y: 65, size: 2.5, label: "Cloud" },
  { x: 42, y: 20, size: 2, label: "Node" },
  { x: 70, y: 45, size: 2, label: "GPIO" },
  { x: 28, y: 45, size: 1.5, label: "I2C" },
  { x: 62, y: 65, size: 1.5, label: "UART" },
  { x: 5, y: 45, size: 1.5, label: "BLE" },
  { x: 95, y: 35, size: 2, label: "SPI" },
];

const CONNECTIONS = [
  [0, 5],
  [5, 1],
  [1, 6],
  [6, 4],
  [4, 8],
  [8, 2],
  [2, 3],
  [3, 7],
  [7, 0],
  [6, 8],
  [5, 7],
  [1, 4],
  [9, 0],
  [9, 3],
  [10, 1],
  [10, 6],
];

export default function IoTCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const nodes = IOT_NODES.map((node) => ({
      ...node,
      px: (node.x / 100) * W,
      py: (node.y / 100) * H,
    }));

    const particles = CONNECTIONS.map(([from, to]) => ({
      from,
      to,
      t: Math.random(),
      speed: 0.001 + Math.random() * 0.002,
    }));

    let pulse = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      CONNECTIONS.forEach(([a, b]) => {
        ctx.beginPath();

        ctx.moveTo(nodes[a].px, nodes[a].py);

        ctx.lineTo(nodes[b].px, nodes[b].py);

        ctx.strokeStyle = "rgba(74,222,128,0.07)";

        ctx.lineWidth = 0.8;

        ctx.stroke();
      });

      // Moving packets
      particles.forEach((particle) => {
        particle.t += particle.speed;

        if (particle.t > 1) {
          particle.t = 0;
        }

        const start = nodes[particle.from];
        const end = nodes[particle.to];

        const x = start.px + (end.px - start.px) * particle.t;

        const y = start.py + (end.py - start.py) * particle.t;

        ctx.beginPath();

        ctx.arc(x, y, 2, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(74,222,128,0.55)";

        ctx.fill();
      });

      // Nodes
      pulse += 0.02;

      nodes.forEach((node) => {
        const glow = 0.3 + 0.15 * Math.sin(pulse + node.x);

        // Glow circle
        ctx.beginPath();

        ctx.arc(node.px, node.py, node.size * 4, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(74,222,128,${glow * 0.12})`;

        ctx.fill();

        // Node circle
        ctx.beginPath();

        ctx.arc(node.px, node.py, node.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(74,222,128,${0.5 + glow})`;

        ctx.fill();

        // Label
        ctx.font = "9px monospace";

        ctx.fillStyle = `rgba(74,222,128,${0.25 + glow * 0.35})`;

        ctx.fillText(node.label, node.px + node.size + 3, node.py + 3);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    // Resize handling
    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;

      H = canvas.height = canvas.offsetHeight;

      nodes.forEach((node) => {
        node.px = (node.x / 100) * W;

        node.py = (node.y / 100) * H;
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);

      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        w-screen
        h-screen
        -z-10
      "
    />
  );
}
