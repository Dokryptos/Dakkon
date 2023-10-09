import { OrbitControls } from "@react-three/drei"


export const Map = () => {
    
    return(
        <>
            <OrbitControls/>
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    );
};