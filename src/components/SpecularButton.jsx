import React, { useRef, useEffect } from 'react';
import { Renderer, Camera, Transform, Program, Mesh, Plane } from 'ogl';
import './SpecularButton.css';

export default function SpecularButton({
  size = 'md',
  radius = 12,
  lineColor = '#ffffff',
  baseColor = '#525252',
  intensity = 1,
  followMouse = true,
  proximity = 150,
  children,
  className = '',
  onClick
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false });
  const glRef = useRef(null);

  // HEX to RGB helper
  const hexToRgb = (hex) => {
    if (!hex) return [1, 1, 1];
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return [r, g, b];
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const renderer = new Renderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    const gl = renderer.gl;
    glRef.current = gl;

    const camera = new Camera(gl, { near: 0.1, far: 100 });
    camera.position.z = 1;

    const scene = new Transform();
    const geometry = new Plane(gl);

    const vertex = `
      attribute vec3 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragment = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uHover;
      uniform vec3 uLineColor;
      uniform vec3 uBaseColor;
      uniform float uRadius;
      uniform float uProximity;
      uniform float uIntensity;
      
      float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
          return length(max(abs(CenterPosition) - Size + Radius, 0.0)) - Radius;
      }
      
      void main() {
        vec2 pixel = vUv * uResolution;
        vec2 center = uResolution * 0.5;
        // Keep edge just inside the canvas boundary
        vec2 size = (uResolution * 0.5) - 2.0; 
        
        float dist = roundedBoxSDF(pixel - center, size, uRadius);
        
        // Base edge line anti-aliasing
        float edge = smoothstep(0.0, 1.5, abs(dist));
        float alpha = 1.0 - edge;
        
        // Specular glow based on mouse distance
        float mouseDist = distance(pixel, uMouse);
        float spec = 1.0 - smoothstep(0.0, uProximity, mouseDist);
        spec = spec * uHover * uIntensity;
        
        // Mix base edge color with the specular highlight color
        vec3 finalColor = mix(uBaseColor, uLineColor, spec);
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uResolution: { value: [0, 0] },
        uMouse: { value: [0, 0] },
        uHover: { value: 0 },
        uLineColor: { value: hexToRgb(lineColor) },
        uBaseColor: { value: hexToRgb(baseColor) },
        uRadius: { value: radius },
        uProximity: { value: proximity },
        uIntensity: { value: intensity }
      },
      transparent: true
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    const resize = () => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };
    resize();
    window.addEventListener('resize', resize);

    let rafId;
    const update = () => {
      // Smooth mouse interpolation
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.1;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.1;
      
      program.uniforms.uMouse.value = [mouse.current.x, mouse.current.y];
      
      const targetHover = mouse.current.isHovering ? 1 : 0;
      program.uniforms.uHover.value += (targetHover - program.uniforms.uHover.value) * 0.1;

      renderer.render({ scene, camera });
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);

    const handleMouseMove = (e) => {
      if (!followMouse) return;
      const rect = containerRef.current.getBoundingClientRect();
      // OGL fragments expect y=0 at the bottom
      mouse.current.targetX = e.clientX - rect.left;
      mouse.current.targetY = rect.height - (e.clientY - rect.top);
    };

    const handleMouseEnter = () => { mouse.current.isHovering = true; };
    const handleMouseLeave = () => { mouse.current.isHovering = false; };

    const el = containerRef.current;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [lineColor, baseColor, radius, proximity, intensity, followMouse]);

  return (
    <button 
      ref={containerRef}
      className={`specular-btn specular-btn-${size} ${className}`}
      onClick={onClick}
      style={{ borderRadius: `${radius}px` }}
    >
      <canvas ref={canvasRef} className="specular-canvas" />
      <span className="specular-content">{children}</span>
    </button>
  );
}
