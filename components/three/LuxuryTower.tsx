"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * LuxuryTower
 * -----------
 * Procedural skyscraper composed of stacked tapered slabs, accent rings,
 * a crown spire, and a wrapping glass volume. Designed to read as a
 * Dubai-grade landmark — slim, vertical, jewel-like under cinematic lights.
 *
 * Materials use MeshPhysicalMaterial for clearcoat reflections and
 * MeshStandardMaterial for the bronze accents.
 */
export default function LuxuryTower(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const crown = useRef<THREE.Mesh>(null);

  // Procedural set of floor segments. Each segment is a thin slab.
  const segments = useMemo(() => {
    const arr: { y: number; w: number; d: number; h: number }[] = [];
    const total = 48;
    for (let i = 0; i < total; i++) {
      // Taper inward toward the top with a gentle curve
      const t = i / (total - 1);
      const taper = 1 - Math.pow(t, 1.35) * 0.45;
      const w = 1.8 * taper;
      const d = 1.8 * taper;
      arr.push({ y: i * 0.22, w, d, h: 0.18 });
    }
    return arr;
  }, []);

  // Light beams that surround the tower — subtle godrays.
  const beams = useMemo(() => {
    const positions: { angle: number; height: number }[] = [];
    for (let i = 0; i < 6; i++) {
      positions.push({ angle: (i / 6) * Math.PI * 2, height: 14 });
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (group.current) {
      // Gentle continuous rotation
      group.current.rotation.y += 0.0014;
      // Subtle bob driven by elapsed time
      group.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.08 - 5;
    }
    if (crown.current) {
      crown.current.rotation.y -= 0.004;
    }
  });

  return (
    <group {...props} ref={group}>
      {/* Base plinth */}
      <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.6, 2.9, 0.4, 64]} />
        <meshStandardMaterial
          color="#16161c"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Soft gold ring at base */}
      <mesh position={[0, 0.05, 0]}>
        <torusGeometry args={[2.45, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={1.4}
          metalness={1}
          roughness={0.25}
        />
      </mesh>

      {/* Glass curtain — outer volume */}
      <mesh position={[0, 5.4, 0]} castShadow>
        <boxGeometry args={[1.95, 11, 1.95]} />
        <meshPhysicalMaterial
          color="#0a0a0c"
          metalness={0.4}
          roughness={0.05}
          transmission={0.55}
          thickness={0.6}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.4}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Stacked floor slabs */}
      {segments.map((s, i) => (
        <group key={i} position={[0, s.y, 0]}>
          {/* main slab — dark bronze */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[s.w, s.h, s.d]} />
            <meshStandardMaterial
              color="#1a1a22"
              metalness={0.95}
              roughness={0.22}
            />
          </mesh>
          {/* gold accent strip every 4 floors */}
          {i % 4 === 0 && i > 0 && (
            <mesh position={[0, s.h / 2 + 0.005, 0]}>
              <boxGeometry args={[s.w + 0.012, 0.012, s.d + 0.012]} />
              <meshStandardMaterial
                color="#E6CB73"
                emissive="#D4AF37"
                emissiveIntensity={1.1}
                metalness={1}
                roughness={0.2}
              />
            </mesh>
          )}
          {/* inner lit windows — emissive band */}
          <mesh position={[0, 0, s.d / 2 + 0.001]}>
            <planeGeometry args={[s.w * 0.85, s.h * 0.55]} />
            <meshBasicMaterial
              color={i % 3 === 0 ? "#fbf4dc" : "#1a1505"}
              transparent
              opacity={i % 3 === 0 ? 0.7 : 0.4}
            />
          </mesh>
          <mesh
            position={[0, 0, -s.d / 2 - 0.001]}
            rotation={[0, Math.PI, 0]}
          >
            <planeGeometry args={[s.w * 0.85, s.h * 0.55]} />
            <meshBasicMaterial
              color={i % 4 === 0 ? "#fbf4dc" : "#1a1505"}
              transparent
              opacity={i % 4 === 0 ? 0.6 : 0.35}
            />
          </mesh>
        </group>
      ))}

      {/* Crown — tapering spire */}
      <group position={[0, 11.4, 0]} ref={crown}>
        <mesh castShadow>
          <coneGeometry args={[0.7, 2.4, 4]} />
          <meshStandardMaterial
            color="#2a2a35"
            metalness={1}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.4, 8]} />
          <meshStandardMaterial
            color="#D4AF37"
            emissive="#D4AF37"
            emissiveIntensity={2.2}
            metalness={1}
            roughness={0.15}
          />
        </mesh>
        {/* beacon */}
        <mesh position={[0, 2.4, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#FBF4DC" />
        </mesh>
      </group>

      {/* Subtle vertical accent fins */}
      {[
        [1.05, 0, 0],
        [-1.05, 0, 0],
        [0, 0, 1.05],
        [0, 0, -1.05],
      ].map((p, i) => (
        <mesh key={i} position={[p[0], 5.4, p[2]]}>
          <boxGeometry args={[0.04, 11, 0.04]} />
          <meshStandardMaterial
            color="#D4AF37"
            emissive="#9A751E"
            emissiveIntensity={0.6}
            metalness={1}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Atmospheric beams */}
      {beams.map((b, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(b.angle) * 5,
            b.height / 2,
            Math.sin(b.angle) * 5,
          ]}
        >
          <cylinderGeometry args={[0.03, 0.03, b.height, 6]} />
          <meshBasicMaterial
            color="#D4AF37"
            transparent
            opacity={0.04}
          />
        </mesh>
      ))}
    </group>
  );
}
