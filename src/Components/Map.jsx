import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./Office"

export const Map = () => {
    
    return(
        <>
            <ambientLight intensity={1} />
            <OrbitControls/>
            <ScrollControls pages={6} damping={0.25}>
                <Office />
            </ScrollControls>
        </>
    );
};