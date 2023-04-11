import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import Crows from './Crows'
import Overlay from './Overlay'

function App() {

    return (
        <>
            <div className='fixed w-full h-full m-0 p-0 overflow-hidden bg-gradient-to-t from-gray-100 to-gray-400'>
                <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 95  }} >
                    <Crows count={50}/>
                </Canvas>
            </div>
            <Overlay/>
        </>
    )
}

export default App
