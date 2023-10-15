import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Spacecraft(props) {
  const { nodes, materials } = useGLTF("/assets/models/spacecraft/spacecraft.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.Blanco}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.Negro}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_4.geometry}
        material={materials.Alas}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/spacecraft/spacecraft.glb");

export default Spacecraft;