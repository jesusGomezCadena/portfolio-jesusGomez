import { DepthFormat } from "three"
import { Stars } from "@react-three/drei"
const Enviroments = () => {
    return(
        <>
        <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={5000} // Amount of stars (default=5000)
            factor={2} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
        />

        </>
    )
    
}

export default Enviroments