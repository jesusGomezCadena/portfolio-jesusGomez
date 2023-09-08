import { useEffect, useRef } from "react";

const { useGLTF, useAnimations } = require("@react-three/drei")

const Astronaut = () => {
    const astronautModel = useGLTF('/assets/models/astronaut/scene.gltf')
    const {animations} = astronautModel;
    const astronautRef = useRef();
    const { actions } = useAnimations(animations, astronautRef);

    useEffect(() => {
        const action = actions["Walking"]
        action.play()
    }, [])
    console.log(astronautModel)
    return (
        <mesh ref={astronautRef} position={[0,-0.99,0]}>
            <primitive object={astronautModel.scene} />
        </mesh>
    )

}

export default Astronaut;

useGLTF.preload("/assets/models/astronaut/scene.gltf");
