// "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Suspense } from "react";

// function Cube() {
//   return (
//     <mesh rotation={[0, Math.PI / 4, 0]}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color="#00BFFF" />
//     </mesh>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center">
//       <div className="absolute inset-0">
//         <Canvas>
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.5} />
//             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//             <Cube />
//             <OrbitControls enableZoom={false} autoRotate />
//           </Suspense>
//         </Canvas>
//       </div>
//       <div className="z-10 text-center">
//         <h1 className="text-5xl font-bold mb-4">3D Innovations</h1>
//         <p className="text-xl mb-8">Custom 3D Printing & Design Solutions</p>
//         <a
//           href="#contact"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// }
