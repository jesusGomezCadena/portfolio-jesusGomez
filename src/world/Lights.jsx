
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper, SpotLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    //useHelper(directionalLightRef, DirectionalLightHelper);

    const spotLightRef = useRef();
    //useHelper(spotLightRef,SpotLightHelper)
    return(
        <>
        <ambientLight intensity={0.5} />
        
        <directionalLight  ref={directionalLightRef} position={[10, 10, 5]} intensity={10} color={"green"} castShadow={true}/>        
        <spotLight
            ref={spotLightRef}
            position={[0, 4, 2]}
            angle={Math.PI / 12}
            intensity={200}
            color={"orange"}
            penumbra={1}
  			 distance={7}
        />

        </>
    )
}

export default Lights;