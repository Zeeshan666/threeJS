import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import facebook from '../assets/Updated Icons/Facebook-1.png';
import instagram from '../assets/Updated Icons/Instagram-1.png';
import twitter from '../assets/Updated Icons/Twitter-1.png';
import dribble from '../assets/Updated Icons/Dribble1.png';
import '../assets/css/style.css';

function Model({ onMouseEnter, onMouseLeave }) {
  const { scene } = useGLTF('/images/Digitally Iphone Mock up 3D.gltf');
  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y = -2.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[4.5, 4.5, 4.5]}
      position={[-1, -2.5, 0]}
      rotation={[-0.3, -0.16, -0.16]} // Adjust the tilt for bottom-right corner up
      onPointerOver={onMouseEnter}
      onPointerOut={onMouseLeave}
    />
  );
}

export default function Basic3DScene() {
  const twitterRef = useRef();
  const facebookRef = useRef();
  const dribbleRef = useRef();
  const instaRef = useRef();

  // Hover enter animation
  const handleMouseEnter = () => {
    gsap.to(twitterRef.current, {
      x: 140, // Move to the left
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(facebookRef.current, {
      x: -200,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(dribbleRef.current, {
      y: 80,
      x: -280,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(instaRef.current, {
      y: 80,
      x: 200,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  // Hover leave animation
  const handleMouseLeave = () => {
    gsap.to(twitterRef.current, {
      x: 0, // Move back to the original position
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(facebookRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(dribbleRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(instaRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section className="sec-1">
      <div className="container" id="testing">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="display-5 text-white fw-bold">
              Construisons ensemble votre{' '}
              <span className="gradient-text-sec-1">futur en ligne</span>
            </h1>
            <p className="text-white fs-5 fw-light">Découvrez nous au travers du digital</p>
          </div>

          <div className="col-12 col-lg-6 grid place-items-center text-center text-lg-end" style={{ height: '110vh' }}>
            <div className="icons_styling">
              <div>
                <img src={facebook} alt="" className="facebook" ref={facebookRef} />
                <img src={instagram} alt="" className="instagram" ref={instaRef} />
              </div>
              <div>
                <img src={twitter} alt="" className="twitter" ref={twitterRef} />
                <img src={dribble} alt="" className="dribble" ref={dribbleRef} />
              </div>
            </div>

            <Tilt className="tilt-container">
              <Canvas style={{ width: '100%', height: '100%' }}>
                <OrbitControls enableZoom={false} enableRotate={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <Suspense fallback={null}>
                  <Model onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                </Suspense>
              </Canvas>
            </Tilt>
          </div>
        </div>
      </div>

      {/* Media queries for responsive styling */}
      <style jsx>{`

         .tilt-container {
          width: 630px;
          height: 630px;
          position: relative;
        top: -2rem;
        }
       @media (max-width: 820px){
        .tilt-container {
          width: 730px;
          height: 730px;
          position: relative;
        top: -5rem;
        }
      }
        @media (max-width: 768px) {
          .tilt-container {
            width: 530px;
            height: 530px;
            position: relative;
        top: -7rem;
          }
        }

        @media (max-width: 480px) {
          .tilt-container {
            width: 370px;
            height: 370px;
             position: relative;
        top: -10rem;
          }
        }
      `}</style>
    </section>
  );
}
