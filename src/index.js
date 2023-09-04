import { createRoot} from "react-dom/client";
import Experience from "./Experience";
import Info from "./Info";
import "./styles.css"
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

const root = createRoot(document.getElementById('root'));

root.render(
    <>
    <Info name={"jesus"} biography={"aprendiendo react three fiber"}/>
    <Canvas
    camera = {{position: [2,0,5]}}
    >
        <Experience/>   
    </Canvas>
    </>
);

