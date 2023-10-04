import { useEffect, useRef } from "react";

const { useGLTF, useAnimations } = require("@react-three/drei")

const Astronaut = (props) => {
    const { nodes, materials, animations} = useGLTF('/assets/models/astronaut/character_._the_lostronauts.glb')    
    const astronautRef = useRef();
    const { actions } = useAnimations(animations, astronautRef);

    useEffect(() => {
        const action = actions["Walking"]
        action.play()
    }, [])
    
    return (
        <group ref={astronautRef} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.373}
          >
            <group name="Lostronaut_Walkingfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh                      
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.None}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <group name="Object_6" />
                    <group name="Cube" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )

}
useGLTF.preload("/assets/models/astronaut/character_._the_lostronauts.glb");

export default Astronaut;


