"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * LuxuryTower — Procedural cinematic skyscraper.
 * Tapered 48-segment massing in bronze with gold accent rings,
 * emissive windows, a glass curtain shell, and a beacon-lit spire.
 */
export function LuxuryTower() {
  const group = useRef<THREE.Group>(null);
  const crown = useRef<THREE.Group>(null);
  const beacon = useRef<THREE.Mesh>(null);

  // Build floor data once
  const floors = useMemo(() => {
    const arr: { y: number; scale: number; accent: boolean }[] = [];
    const N = 48;
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      const taper = 1 - t * 0.35; // taper inward toward top
      arr.push({
        y: i * 0.42 - 5,
        scale: taper,
        accent: i % 4 === 0,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.08;
      group.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
    if (beacon.current) {
      const mat = beacon.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.2 + Math.sin(t * 2.5) * 0.6;
    }
  });

  return (
    <group ref={group}>
      {/* Atmospheric vertical beams */}
      {[-2.2, 2.2].map((x, i) => (
        <mesh key={i} position={[x, 5, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 22, 8]} />
          <meshBasicMaterial
            color="#D4AF37"
            transparent
            opacity={0.08}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Floors / slabs */}
      {floors.map((f, i) => (
        <mesh
          key={i}
          position={[0, f.y, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1.8 * f.scale, 0.32, 1.8 * f.scale]} />
          <meshStandardMaterial
            color={f.accent ? "#D4AF37" : "#1a1612"}
            metalness={f.accent ? 0.95 : 0.7}
            roughness={f.accent ? 0.25 : 0.5}
            emissive={f.accent ? "#5a3f0d" : "#000000"}
            emissiveIntensity={f.accent ? 0.4 : 0}
          />
        </mesh>
      ))}

      {/* Emissive window strips between floors */}
      {floors.map((f, i) =>
        i < floors.length - 1 ? (
          <mesh key={`w-${i}`} position={[0, f.y + 0.21, 0]}>
            <boxGeometry args={[1.78 * f.scale, 0.1, 1.78 * f.scale]} />
            <meshStandardMaterial
              color="#FBF4DC"
              emissive="#E6CB73"
              emissiveIntensity={0.6}
              metalness={0.3}
              roughness={0.3}
              transparent
              opacity={0.85}
            />
          </mesh>
        ) : null
      )}

      {/* Glass curtain wall */}
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[1.95, 20.5, 1.95]} />
        <meshPhysicalMaterial
          color="#0a1015"
          metalness={0.2}
          roughness={0.05}
          transmission={0.6}
          thickness={0.5}
          transparent
          opacity={0.25}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Vertical fins */}
      {[-0.95, 0.95].map((x, i) => (
        <mesh key={`fin-x-${i}`} position={[x, 5, 0]}>
          <boxGeometry args={[0.06, 21, 0.2]} />
          <meshStandardMaterial
            color="#9a751e"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>
      ))}
      {[-0.95, 0.95].map((z, i) => (
        <mesh key={`fin-z-${i}`} position={[0, 5, z]}>
          <boxGeometry args={[0.2, 21, 0.06]} />
          <meshStandardMaterial
            color="#9a751e"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Base plinth */}
      <mesh position={[0, -5.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 0.6, 3.4]} />
        <meshStandardMaterial
          color="#0a0908"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, -5.95, 0]} receiveShadow>
        <boxGeometry args={[4, 0.2, 4]} />
        <meshStandardMaterial
          color="#1a1612"
          metalness={0.6}
          roughness={0.5}
        />
      </mesh>

      {/* Crown — tapering spire */}
      <group position={[0, 11.4, 0]} ref={crown}>
        <mesh castShadow>
          <coneGeometry args={[0.7, 2.4, 4]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.95}
            roughness={0.2}
            emissive="#5a3f0d"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.4, 8]} />
          <meshStandardMaterial
            color="#FBF4DC"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        {/* Beacon */}
        <mesh position={[0, 2.4, 0]} ref={beacon}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#FBF4DC"
            emissive="#E6CB73"
            emissiveIntensity={2}
          />
        </mesh>
      </group>
    </group>
  );
}

export default LuxuryTower;
