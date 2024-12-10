import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const Caffe = ({ isMobile, ...props }) => {
  const { nodes, materials } = useGLTF("/models/caffe.glb");
  const modelRef = useRef();
  useFrame(() => {
    if (!isMobile && modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Outside_Outside_0.geometry}
          material={materials.Outside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Outside_Outside_0_1.geometry}
          material={materials.Outside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Outside_Glass_0.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Outside_Outside_E_0.geometry}
          material={materials.Outside_E}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inside_Inside_0.geometry}
          material={materials.Inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inside_Inside_0_1.geometry}
          material={materials.Inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inside_Inside_0_2.geometry}
          material={materials.Inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inside_Glass_0.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inside_Inside_E_0.geometry}
          material={materials.Inside_E}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inside_Aeropress_0.geometry}
          material={materials.Aeropress}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stuff_Stuff_0.geometry}
          material={materials.Stuff}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stuff_Stuff_0_1.geometry}
          material={materials.Stuff}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/caffe.glb");

export default Caffe;
