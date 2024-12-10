import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
// eslint-disable-next-line react/prop-types
const Sport = ({ isMobile, ...props }) => {
  const { nodes, materials } = useGLTF("/models/sport.glb");
  const modelRef = useRef();
  useFrame(() => {
    if (!isMobile && modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group position={[0, 0.1, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Outer_Floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Inner_Floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Support_Pillars}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Mesh}
        />
      </group>
      <group position={[2.113, 0.313, -0.794]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Bench_Top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Bench_Bottom}
        />
      </group>
      <group position={[-2.24, 0.781, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Basketball_Stand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.Bench_Bottom}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials["Material.002"]}
        position={[0, 0.135, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.Light_Pillars}
        position={[-0.005, 0.1, -0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.Dust_Bin}
        position={[2.113, 0.313, -0.794]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials.Mesh}
        position={[0, 0.1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_33.geometry}
        material={materials.White}
        position={[-2.24, 0.781, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/sport.glb");

export default Sport;
