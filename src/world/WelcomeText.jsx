import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const WelcomeText = () => {

    return (        
        <Float>
            <Text
                font="/assets/fonts/Nunito-Regular.ttf"              
                fontSize={0.3}
                color={new Color(0xE0bf0e)}
                position-y={2}
                maxWidth={2}
                textAlign="center"              
            >
                Bienvenidos al espacio                
            </Text>
        </Float>

    )
}

export default WelcomeText;