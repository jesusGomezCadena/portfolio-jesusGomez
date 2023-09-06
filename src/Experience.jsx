import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
    
    
    const boxRef = useRef();
    useFrame((state, delta)=>{ {boxRef.current.position.x >= 10? boxRef.current.position.x = 3:  boxRef.current.position.x += delta*2} ; boxRef.current.position.y =  Math.sin(boxRef.current.position.x)*3})

    const boxRef2 = useRef();
    useFrame((state, delta)=>{ {boxRef2.current.position.x >= 10? boxRef2.current.position.x = 3:  boxRef2.current.position.x += delta*2} ; boxRef2.current.position.y =  Math.cos(boxRef2.current.position.x)*3})
return(
 
 <>
    <OrbitControls makeDefault></OrbitControls>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={2} />


    <mesh position={[0,0,0]}>
        <sphereGeometry />
        <meshNormalMaterial color = "blue"/>
    </mesh>

    <mesh position={[-3,0,0]}>
        <torusGeometry />
        <meshDepthMaterial color = "red"/>
    </mesh>

    <mesh position={[-6,0,0]}>
        <coneGeometry/>
        <meshPhongMaterial color = "orange"/>
    </mesh>

    <mesh ref={boxRef} position={[3,0,0]}>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color = "green"/>
    </mesh>
    <mesh ref={boxRef2} position={[3,0,0]}>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color = "green"/>
    </mesh>
    

 </>
)
}

export default Experience;