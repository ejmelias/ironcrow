import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Instance, Instances, Environment } from '@react-three/drei';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';

function Crow({ z=0, speed=1 }) {

    const { nodes, materials } = useGLTF('./crow.glb');
    const ref = useRef();
    const { viewport } = useThree();

    const [ rotation ] = useState({x: Math.random(), y: Math.random() });
    const [ xPos ] = useState((Math.random() * (1 - -1) + -1) * viewport.width);
    const [ yPos ] = useState((Math.random() * (1 - -1) + -1) * (viewport.height * 2));

    useFrame((state, delta) => {
        ref.current.position.y  -= delta * speed;
        if(ref.current.position.y < -viewport.height * 3) {
            ref.current.position.y = viewport.height * 3;
        }

        ref.current.rotation.x +=  rotation.x * delta;
        ref.current.rotation.y += rotation.y * delta;
        console.log(Math.random() * (1 - -1) + -1)
    });

    return (
        <mesh geometry={nodes.crow.geometry} material={materials.lambert2SG}  position={[xPos, yPos, z]} scale={0.1} ref={ref}/>
    )
}

function Crows() {

    const { nodes, materials } = useGLTF('./crow.glb');

    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 95  }}>
            
            <spotLight position={[10, 10, 10]} intensity={3}/>
            <Crow speed={1} z={0}/>
            <Crow speed={2} z={-10}/>
            <Crow speed={1} z={-20}/>
            <Crow speed={1} z={-30}/>

            <EffectComposer multisampling={0}>
                <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
            </EffectComposer>

        </Canvas>
    );
}
export default Crows;