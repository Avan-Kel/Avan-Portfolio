"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ThreeTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!torusRef.current) return;
    torusRef.current.rotation.x += delta * 0.15;
    torusRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[1.5, 0.5, 16, 100]} />
      <meshBasicMaterial wireframe color="#00faff" />
    </mesh>
  );
}
