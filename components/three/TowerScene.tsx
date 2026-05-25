"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import LuxuryTower from "./LuxuryTower";
import GoldParticles from "./GoldParticles";

/**
 * Camera rig that gently follows the mouse for a parallax effect.
 */
function CameraRig() {
  const target = useRef(new THREE.Vector2(0, 0));

  useFrame((state) => {
    // smooth lerp toward pointer
    target.current.x += (state.pointer.x - target.current.x) * 0.04;
    target.current.y += (state.pointer.y - target.current.y) * 0.04;

    const camX = target.current.x * 1.8;
    const camY = 4 + target.current.y * 1.2;
    state.camera.position.x += (camX - state.camera.position.x) * 0.05;
    state.camera.position.y += (camY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 4, 0);
  });

  return null;
}

interface Props {
  className?: string;
}

export default function TowerScene({ className }: Props) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 4, 14], fov: 38, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          powerPreference: "high-performance",
        }}
      >
        {/* Cinematic lights */}
        <ambientLight intensity={0.15} />

        {/* Key light — warm gold, top right */}
        <directionalLight
          position={[6, 12, 4]}
          intensity={1.4}
          color="#FBF4DC"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={20}
          shadow-camera-bottom={-2}
        />

        {/* Rim — cool blue from back */}
        <directionalLight
          position={[-6, 6, -4]}
          intensity={0.6}
          color="#3a4a6a"
        />

        {/* Underglow gold */}
        <pointLight
          position={[0, 0.5, 0]}
          intensity={2.5}
          color="#D4AF37"
          distance={6}
        />

        {/* Spot accents around tower */}
        <spotLight
          position={[4, 8, 4]}
          angle={0.35}
          penumbra={0.8}
          intensity={1.2}
          color="#E6CB73"
          castShadow
        />
        <spotLight
          position={[-4, 8, -4]}
          angle={0.35}
          penumbra={0.8}
          intensity={0.8}
          color="#7a8aaa"
        />

        <Suspense fallback={null}>
          <Float
            speed={1.1}
            rotationIntensity={0.18}
            floatIntensity={0.4}
            floatingRange={[-0.15, 0.15]}
          >
            <LuxuryTower position={[0, -5, 0]} />
          </Float>

          {/* atmospheric particles */}
          <GoldParticles count={500} />

          {/* dark studio HDRI for crisp reflections */}
          <Environment preset="city" environmentIntensity={0.4} />

          {/* Soft contact shadow under tower */}
          <ContactShadows
            position={[0, -5.05, 0]}
            opacity={0.7}
            scale={20}
            blur={3}
            far={10}
            color="#000000"
          />
        </Suspense>

        <CameraRig />

        {/* Background fog gradient — fades tower into void */}
        <fog attach="fog" args={["#070708", 14, 38]} />
      </Canvas>
    </div>
  );
}
