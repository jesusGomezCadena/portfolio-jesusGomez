import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {

    const boxRef = useRef();
    useFrame((state, delta)=>{ boxRef.current.rotation.x +=  delta})
return(
 
 <>
    <OrbitControls makeDefault></OrbitControls>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={2} />
 
    <mesh ref={boxRef}>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color = "green"/>
    </mesh>
 
 </>
)
}

export default Experience;