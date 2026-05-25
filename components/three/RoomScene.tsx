"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Room() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* Floor — polished marble */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshPhysicalMaterial
          color="#1a1a22"
          metalness={0.4}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 1.5, -3]} receiveShadow>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="#0f0f15" roughness={0.85} />
      </mesh>

      {/* Window light strip — emissive */}
      <mesh position={[0, 2.5, -2.95]}>
        <planeGeometry args={[5, 0.8]} />
        <meshBasicMaterial color="#FBF4DC" />
      </mesh>

      {/* Sofa proxy — large block */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <boxGeometry args={[3.5, 0.8, 1.2]} />
        <meshStandardMaterial color="#2a2a35" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh position={[0, -0.05, -0.4]} castShadow>
        <boxGeometry args={[3.5, 0.6, 0.4]} />
        <meshStandardMaterial color="#3a3a45" roughness={0.6} />
      </mesh>

      {/* Coffee table — bronze */}
      <mesh position={[0, -0.7, 1.2]} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.85, 1.2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        <meshStandardMaterial color="#9A751E" metalness={1} roughness={0.3} />
      </mesh>

      {/* Pendant light */}
      <mesh position={[0, 2, 1.2]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshBasicMaterial color="#FBF4DC" />
      </mesh>
      <pointLight position={[0, 2, 1.2]} intensity={1.5} color="#FBF4DC" distance={5} />

      {/* Side accent — sculpture */}
      <mesh position={[-2.5, -0.3, 0]} castShadow>
        <torusKnotGeometry args={[0.25, 0.08, 64, 8]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.15} />
      </mesh>
      <mesh position={[-2.5, -0.85, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.1, 24]} />
        <meshStandardMaterial color="#1a1a22" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Plant */}
      <mesh position={[2.5, -0.3, -0.5]}>
        <coneGeometry args={[0.4, 1.2, 16]} />
        <meshStandardMaterial color="#1a2a1a" roughness={0.9} />
      </mesh>
      <mesh position={[2.5, -0.85, -0.5]}>
        <cylinderGeometry args={[0.3, 0.35, 0.3, 24]} />
        <meshStandardMaterial color="#1a1a22" />
      </mesh>
    </group>
  );
}

export default function RoomScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [4, 1.2, 5], fov: 38 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 8, 4]} intensity={1} color="#FBF4DC" castShadow />
        <spotLight position={[-3, 4, 4]} intensity={0.6} color="#E6CB73" angle={0.4} />
        <Suspense fallback={null}>
          <Room />
          <Environment preset="apartment" environmentIntensity={0.3} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={0.6}
        />
        <fog attach="fog" args={["#070708", 6, 20]} />
      </Canvas>
    </div>
  );
}
