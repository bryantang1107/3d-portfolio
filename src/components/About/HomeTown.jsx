import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const HomeTown = ({ isMobile, ...props }) => {
  const { nodes, materials } = useGLTF("/models/hometown.glb");
  const modelRef = useRef();
  useFrame(() => {
    if (!isMobile && modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.17}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -11.11, 0]} scale={92.332}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pDisc1_WaterL_0.geometry}
              material={materials.WaterL}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pDisc1_WaterD_0.geometry}
              material={materials.WaterD}
            />
          </group>
          <group
            position={[-0.007, -0.187, 0.511]}
            scale={[1.723, 1.76, 1.723]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface1_WaterL_0.geometry}
              material={materials.WaterL}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface31_Stone_0.geometry}
              material={materials.Stone}
              position={[0, 0, -1.871]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface32_Stone_0.geometry}
              material={materials.Stone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface32_moss_0.geometry}
              material={materials.moss}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface32_Dirt_0.geometry}
              material={materials.Dirt}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface32_Grass_0.geometry}
              material={materials.Grass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface33_Stone_0.geometry}
              material={materials.Stone}
              position={[-7.793, 7.219, 2.101]}
              rotation={[0.138, -0.105, 0.152]}
              scale={[0.239, 0.036, 0.239]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface34_Stone_0.geometry}
              material={materials.Stone}
              position={[-1.526, 7.525, 10.635]}
              rotation={[2.248, -1.325, 2.314]}
              scale={[0.239, 0.036, 0.239]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface35_Stone_0.geometry}
              material={materials.Stone}
              position={[1.655, 7.787, 11.966]}
              rotation={[2.131, -1.328, 2.216]}
              scale={[0.239, 0.046, 0.239]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface36_Stone_0.geometry}
              material={materials.Stone}
              position={[2.236, 7.843, 7.081]}
              rotation={[0.222, -0.384, 0.156]}
              scale={[0.239, 0.06, 0.239]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface37_Stone_0.geometry}
              material={materials.Stone}
              position={[5.668, 7.843, 20.275]}
              rotation={[2.885, -0.638, 3.058]}
              scale={[0.239, 0.06, 0.239]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface38_Stone_0.geometry}
              material={materials.Stone}
              position={[-9.754, 7.024, 14.108]}
              rotation={[2.308, 1.434, -2.225]}
              scale={[0.189, 0.046, 0.239]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface39_Stone_0.geometry}
              material={materials.Stone}
              position={[-9.808, 7.766, 11.824]}
              rotation={[0.27, 0.952, -0.062]}
              scale={[0.268, 0.066, 0.339]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface40_Stone_0.geometry}
              material={materials.Stone}
              position={[-2.07, 7.219, 14.461]}
              rotation={[0.138, -0.105, 0.152]}
              scale={[0.239, 0.036, 0.239]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface41_Stone_0.geometry}
              material={materials.Stone}
              position={[2.923, 7.895, 23.334]}
              rotation={[1.167, -1.316, 1.219]}
              scale={[0.267, 0.04, 0.267]}
            />
          </group>
          <group position={[-0.487, 0, -0.636]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower5_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower5_White_0"].geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower5_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group position={[-5.59, 0, 22.815]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower6_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower6_White_0"].geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower6_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group
            position={[-11.945, 0, -16.192]}
            rotation={[0, -Math.PI / 3, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower7_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower7_White_0"].geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower7_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group
            position={[49.472, 0, -50.104]}
            rotation={[-Math.PI, -0.262, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower9_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower9_White_0"].geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower9_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group
            position={[5.109, -1.101, 34.435]}
            rotation={[0, Math.PI / 6, 0]}
            scale={1.097}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower13_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower13_Flower_0"].geometry}
              material={materials.Flower}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower13_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group
            position={[18.536, -1.205, 33.5]}
            rotation={[0, Math.PI / 6, 0]}
            scale={1.097}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower14_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower14_Flower_0"].geometry}
              material={materials.Flower}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower14_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group position={[21.942, 0, 20.722]} rotation={[0, Math.PI / 3, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower15_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower15_White_0"].geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower15_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group
            position={[-15.785, 0, -23.311]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower17_green_0"].geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower17_White_0"].geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["calendula-flower17_Pollen_0"].geometry}
              material={materials.Pollen}
            />
          </group>
          <group
            position={[6.54, 10.87, 34.066]}
            rotation={[-1.573, -0.065, -0.034]}
            scale={[5.067, 5.067, 3.934]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.well_cobble_0.geometry}
              material={materials.cobble}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.well_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.well_Roof_0.geometry}
              material={materials.Roof}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.well_well_0_0.geometry}
              material={materials.well_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.well_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[9.141, -4.436, 2.093]}
            rotation={[0, -0.262, 0]}
            scale={1.377}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface10_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface10_Roof_0.geometry}
              material={materials.Roof}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface10_plaster_0.geometry}
              material={materials.plaster}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface10_cobble_0.geometry}
              material={materials.cobble}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface10_lambert11_0.geometry}
              material={materials.lambert11}
            />
          </group>
          <group
            position={[-5.964, 12.512, 6.951]}
            rotation={[-0.011, -0.03, 0.054]}
            scale={[0.905, 1.584, 0.905]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder2_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder2_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[-5.852, 12.556, 4.855]}
            rotation={[0.024, -0.046, -0.017]}
            scale={[0.905, 1.584, 0.905]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder3_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder3_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[-5.852, 15.693, 5.979]}
            rotation={[0.001, -0.04, 0.037]}
            scale={[0.905, 1.584, 0.905]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder4_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder4_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[-14.054, -5.877, 74.841]}
            rotation={[-0.011, -0.03, 0.007]}
            scale={[0.905, 1.584, 0.905]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder5_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder5_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[-13.299, -5.877, 72.835]}
            rotation={[-0.011, -0.03, 0.007]}
            scale={[0.905, 1.584, 0.905]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder6_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder6_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[-15.499, -5.877, 73.389]}
            rotation={[-0.011, -0.03, 0.007]}
            scale={[0.905, 1.584, 0.905]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder7_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder7_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[-14.283, -2.692, 73.917]}
            rotation={[-0.011, -0.03, 0.007]}
            scale={[0.905, 1.584, 0.905]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder8_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder8_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["calendula-flower10_green_0"].geometry}
            material={materials.green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["calendula-flower10_Flower_0"].geometry}
            material={materials.Flower}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["calendula-flower10_Pollen_0"].geometry}
            material={materials.Pollen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube1_Wood_0.geometry}
            material={materials.Wood}
            position={[-0.932, 8.477, 47.628]}
            rotation={[0, 0.86, 0]}
            scale={[1.94, 0.398, 7.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube2_Wood_0.geometry}
            material={materials.Wood}
            position={[-3.533, 6.658, 47.734]}
            rotation={[0, 0.515, 0]}
            scale={[1.94, 0.398, 7.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube3_Wood_0.geometry}
            material={materials.Wood}
            position={[-6.482, 4.689, 47.753]}
            rotation={[0, 1.091, 0]}
            scale={[1.94, 0.398, 7.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube4_Wood_0.geometry}
            material={materials.Wood}
            position={[-7.854, 2.212, 49.01]}
            rotation={[0, 0.907, 0]}
            scale={[1.94, 0.398, 7.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube5_Wood_0.geometry}
            material={materials.Wood}
            position={[-10.487, -0.828, 49.097]}
            rotation={[0, 0.563, 0]}
            scale={[1.94, 0.398, 7.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube6_Wood_0.geometry}
            material={materials.Wood}
            position={[-11.289, -3.616, 50.94]}
            rotation={[0, 0.872, 0]}
            scale={[1.94, 0.398, 7.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube7_Wood_0.geometry}
            material={materials.Wood}
            position={[-12.656, -6.583, 50.94]}
            rotation={[0, 0.872, 0]}
            scale={[1.94, 0.398, 7.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube8_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 53.829]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube9_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 56.707]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube10_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 59.612]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube11_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 62.642]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube12_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 65.631]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube13_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 68.721]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube14_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 71.853]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube15_Wood_0.geometry}
            material={materials.Wood}
            position={[-18.279, -7.814, 74.82]}
            rotation={[0, 1.436, 0]}
            scale={[2.579, 0.747, 14.117]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube16_Wood_0.geometry}
            material={materials.Wood}
            position={[-25.136, -12.907, 53.829]}
            rotation={[-1.565, 0.029, 1.484]}
            scale={[1.588, 1.983, 16.877]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube17_Wood_0.geometry}
            material={materials.Wood}
            position={[-11.666, -12.907, 55.95]}
            rotation={[-1.565, 0.029, 1.484]}
            scale={[1.588, 1.983, 16.877]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube18_Wood_0.geometry}
            material={materials.Wood}
            position={[-25.191, -12.907, 72.29]}
            rotation={[-1.565, 0.029, 1.484]}
            scale={[1.588, 1.983, 16.877]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube19_Wood_0.geometry}
            material={materials.Wood}
            position={[-11.358, -12.907, 74.031]}
            rotation={[-1.565, 0.029, 1.484]}
            scale={[1.588, 1.983, 16.877]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube20_Wood_0.geometry}
            material={materials.Wood}
            position={[-13.915, -8.256, 64.851]}
            rotation={[-3.137, -0.007, 1.6]}
            scale={[0.451, 1.371, 21.782]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube21_Wood_0.geometry}
            material={materials.Wood}
            position={[-23.026, -8.256, 63.674]}
            rotation={[-3.139, 0.066, 1.6]}
            scale={[0.451, 1.371, 21.782]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube22_Wood_0.geometry}
            material={materials.Wood}
            position={[-4.754, -10.131, 67.482]}
            rotation={[0, 0.176, 0]}
            scale={[4.604, 2.908, 18.981]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube23_Wood_0.geometry}
            material={materials.Wood}
            position={[-5.355, -9.085, 63.768]}
            rotation={[-Math.PI, 1.342, -Math.PI]}
            scale={[1.94, 0.398, 7.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube24_Wood_0.geometry}
            material={materials.Wood}
            position={[-21.003, -1.411, 48.178]}
            rotation={[-2.237, 0.066, -0.028]}
            scale={[1, 0.129, 2.496]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube35_Wood_D_0.geometry}
            material={materials.Wood_D}
            position={[-1.194, 0, 5.841]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube36_Wood_D_0.geometry}
            material={materials.Wood_D}
            position={[14.059, 17.371, -70.849]}
            rotation={[-0.024, 0, 0.031]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/hometown.glb");

export default HomeTown;
