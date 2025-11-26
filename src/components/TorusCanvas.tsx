"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";

interface TorusProps {
  color: string;
  emissive: string;
}

function Torus({ color, emissive }: TorusProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[0.7, 0.22, 64, 200]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={1.2}
        wireframe
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function TorusCanvas({ color, emissive }: TorusProps) {
  return (
    <Canvas camera={{ position: [3, 3, 4], fov: 45 }}>
      <ambientLight intensity={1} />
      <pointLight position={[4, 4, 4]} intensity={3} />
      <Torus color={color} emissive={emissive} />
    </Canvas>
  );
}
