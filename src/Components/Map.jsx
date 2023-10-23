import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./Office"
import { Overlay } from "./Overlay";

export const Map = () => {
    
    return(
        <>
            <ambientLight intensity={2} />
            <OrbitControls/>
            <ScrollControls pages={6} damping={0.25}>
            <Overlay />
                <Office />
            </ScrollControls>
        </>
    );
};