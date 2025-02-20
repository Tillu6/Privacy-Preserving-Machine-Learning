import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingCube() {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}

export default function CyberDashboard() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <RotatingCube />
    </Canvas>
  );
}
