import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere } from "@react-three/drei";
import { useMemo, useRef } from "react";

const nodePositions = [
  [-1.9, 0.9, 0],
  [-0.7, 1.45, 0.2],
  [0.45, 0.72, -0.15],
  [1.65, 1.2, 0.1],
  [-1.25, -0.22, -0.1],
  [0.18, -0.55, 0.15],
  [1.35, -0.1, -0.2],
  [0.82, -1.28, 0.05],
];

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 5],
  [5, 6],
  [6, 3],
  [5, 7],
  [2, 6],
];

const WorkflowNodes = () => {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.22) * 0.22;
    group.current.rotation.x = Math.cos(clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={group}>
      {links.map(([start, end]) => (
        <Line
          key={`${start}-${end}`}
          points={[nodePositions[start], nodePositions[end]]}
          color="#22d3ee"
          lineWidth={1.4}
          transparent
          opacity={0.36}
        />
      ))}
      {nodePositions.map((position, index) => (
        <Float key={index} speed={1.4} rotationIntensity={0.18} floatIntensity={0.18}>
          <Sphere args={[index === 2 ? 0.15 : 0.1, 32, 32]} position={position}>
            <meshStandardMaterial
              color={index === 2 ? "#4ade80" : "#22d3ee"}
              emissive={index === 2 ? "#4ade80" : "#22d3ee"}
              emissiveIntensity={1.5}
              roughness={0.22}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

const OrbitRings = () => {
  const ringOne = useRef();
  const ringTwo = useRef();

  useFrame(({ clock }) => {
    if (ringOne.current) ringOne.current.rotation.z = clock.elapsedTime * 0.22;
    if (ringTwo.current) ringTwo.current.rotation.z = -clock.elapsedTime * 0.16;
  });

  return (
    <>
      <mesh ref={ringOne} rotation={[1.35, 0.15, 0]}>
        <torusGeometry args={[1.74, 0.008, 12, 144]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.56} />
      </mesh>
      <mesh ref={ringTwo} rotation={[1.18, 0.52, 0.4]}>
        <torusGeometry args={[2.18, 0.006, 12, 144]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.36} />
      </mesh>
    </>
  );
};

const ParticleField = () => {
  const pointsRef = useRef();
  const vertices = useMemo(() => {
    const points = [];
    for (let index = 0; index < 220; index += 1) {
      points.push((Math.random() - 0.5) * 6);
      points.push((Math.random() - 0.5) * 4);
      points.push((Math.random() - 0.5) * 2);
    }
    return new Float32Array(points);
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * 0.035;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={vertices.length / 3}
          array={vertices}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#9ff7ff" size={0.018} transparent opacity={0.62} />
    </points>
  );
};

const HolographicScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.7]}>
      <ambientLight intensity={0.42} />
      <pointLight position={[2, 3, 4]} color="#22d3ee" intensity={1.6} />
      <pointLight position={[-3, -2, 3]} color="#4ade80" intensity={1.15} />
      <ParticleField />
      <OrbitRings />
      <WorkflowNodes />
    </Canvas>
  );
};

export default HolographicScene;
