import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import Astronaut from "./world/Astronaut";
import Lights from "./world/Lights";
import Enviroments from "./world/Enviroments";


const Experience = () => {
    
    const PATHearth = "/assets/textures/earth/";
    const PATHsnow = "/assets/textures/snow/";

    const propsTexture_earth = useTexture({
        map: PATHearth + 'earth_color.jpg',        
        normalMap: PATHearth + 'earth_dx.jpg',
        roughnessMap: PATHearth + 'earth_rougth.jpg',
        aoMap: PATHearth + 'earth_ao.jpg',
      })

    const propsTexture_snow = useTexture({
        map: PATHsnow + 'snow_diff.jpg',        
        normalMap: PATHsnow + 'snow_dx.jpg',
        roughnessMap: PATHsnow + 'snow_rough.jpg',
        aoMap: PATHsnow + 'snow_ao.jpg',
      })

    const sphereRef = useRef();
    useFrame((state, delta)=>{ {sphereRef.current.position.x >= 60? sphereRef.current.position.x = -100:  sphereRef.current.position.x += delta*5} ; sphereRef.current.position.y =  Math.sin(sphereRef.current.position.x)*10})

    const sphereRef2 = useRef();
    useFrame((state, delta)=>{ {sphereRef2.current.position.x >= 60? sphereRef2.current.position.x = -100:  sphereRef2.current.position.x += delta*5} ; sphereRef2.current.position.y =  Math.cos(sphereRef2.current.position.x)*10})

    const coneRef = useRef();
    useFrame((state, delta)=>{ coneRef.current.rotation.x = Math.sin(state.clock.getElapsedTime())})
return(
 
 <>
    <OrbitControls makeDefault></OrbitControls>
    <Lights/>
    <mesh ref={sphereRef} position={[-100,0,-20]}>
        <sphereGeometry/>
        <meshStandardMaterial {...propsTexture_snow}/>
    </mesh>

    <mesh ref={sphereRef2} position={[-100,0,-20]}>
        <sphereGeometry/>
        <meshStandardMaterial {...propsTexture_earth}/>
    </mesh>

    <mesh position={[0,-4,0]} scale={6} receiveShadow={true}>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color = "purple"/>
    </mesh>

    <mesh position={[0,10,-100]}  scale={10}>
        <torusGeometry />
        <meshNormalMaterial color = "red"/>
    </mesh>

    <mesh ref={coneRef} position={[-1,-0.7,2]} rotation={[0,0,Math.PI]} scale={0.5} castShadow>
        <coneGeometry/>
        <meshPhongMaterial color = "orange"/>
    </mesh>

    <Astronaut position-y={-1}/>

    <Enviroments/>
        

 </>
)
}



export default Experience;