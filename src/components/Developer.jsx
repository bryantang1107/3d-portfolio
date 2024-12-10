import React, { useEffect, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

// eslint-disable-next-line react/prop-types
const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();

  // Load the GLTF model for the character
  const { scene } = useGLTF("/models/animations/developer.glb");

  // Clone the scene to prevent direct manipulation
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Extract nodes and materials using useGraph
  const { nodes, materials } = useGraph(clone);

  // Load animations for the character from FBX files
  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: clappingAnimation } = useFBX(
    "/models/animations/clapping.fbx"
  );
  const { animations: victoryAnimation } = useFBX(
    "/models/animations/victory.fbx"
  );

  // Assign names to animations for easy access
  idleAnimation[0].name = "idle";
  clappingAnimation[0].name = "clapping";
  victoryAnimation[0].name = "victory";

  // Initialize the animation system using useAnimations
  const { actions } = useAnimations(
    [idleAnimation[0], clappingAnimation[0], victoryAnimation[0]],
    group
  );

  // Play the selected animation when the component mounts or animationName changes
  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Render skinned meshes for each part of the character */}
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");

export default Developer;
