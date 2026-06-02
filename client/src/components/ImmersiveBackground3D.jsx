import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";

const BackgroundGrid = () => {
  const grid = useRef();
  const lines = useMemo(() => {
    const generated = [];
    for (let index = -8; index <= 8; index += 1) {
      generated.push([
        [-8, index, -2],
        [8, index, -2],
      ]);
      generated.push([
        [index, -8, -2],
        [index, 8, -2],
      ]);
    }
    return generated;
  }, []);

  useFrame(({ clock }) => {
    if (!grid.current) return;
    grid.current.position.y = Math.sin(clock.elapsedTime * 0.12) * 0.12;
    grid.current.rotation.z = Math.sin(clock.elapsedTime * 0.05) * 0.035;
  });

  return (
    <group ref={grid} rotation={[1.12, 0, 0]}>
      {lines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={index % 2 ? "#22d3ee" : "#4ade80"}
          lineWidth={0.42}
          transparent
          opacity={0.11}
        />
      ))}
    </group>
  );
};

const FloatingCore = () => {
  const core = useRef();

  useFrame(({ clock }) => {
    if (!core.current) return;
    core.current.rotation.x = clock.elapsedTime * 0.11;
    core.current.rotation.y = clock.elapsedTime * 0.17;
  });

  return (
    <group ref={core} position={[3.2, -1.15, -1.6]}>
      <mesh>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.62}
          wireframe
          transparent
          opacity={0.34}
        />
      </mesh>
      <mesh rotation={[0.9, 0.3, 0]}>
        <torusGeometry args={[1.08, 0.012, 10, 96]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[1.3, 0.1, 0.8]}>
        <torusGeometry args={[1.34, 0.008, 10, 96]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.28} />
      </mesh>
    </group>
  );
};

const ImmersiveBackground3D = () => {
  return (
    <div className="immersive-bg" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 46 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.28} />
        <pointLight position={[3, 4, 3]} color="#22d3ee" intensity={1.1} />
        <pointLight position={[-4, -3, 2]} color="#4ade80" intensity={0.8} />
        <Stars radius={40} depth={18} count={900} factor={2} fade speed={0.4} />
        <BackgroundGrid />
        <FloatingCore />
      </Canvas>
    </div>
  );
};

export default ImmersiveBackground3D;
