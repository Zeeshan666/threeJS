import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import facebook from '../assets/Updated Icons/Facebook-1.png';
import instagram from '../assets/Updated Icons/Instagram-1.png';
import twitter from '../assets/Updated Icons/Twitter-1.png';
import dribble from '../assets/Updated Icons/Dribble1.png';
import Tiktok from '../assets/Updated Icons/Tiktok-1.png';
import LinkedIn from '../assets/Updated Icons/LinkedIn-1.png'
import '../assets/css/style.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
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
      rotation={[-0.27, -0.27, -0.19]} // Adjust the tilt for bottom-right corner up
      onPointerOver={onMouseEnter}
      onPointerOut={onMouseLeave}
    />
  );
}

export default function Basic3DScene() {
  const modelRef = useRef();
  const phoneAnimationRef = useRef();
  const twitterRef = useRef();
  const facebookRef = useRef();
  const dribbleRef = useRef();
  const instaRef = useRef();

  const tiktokRef = useRef()
  const LinkedInRef = useRef()

  useEffect(() => {
    // Animate the 3D model with ScrollTrigger
    gsap.to(phoneAnimationRef.current, {
      scrollTrigger: {
        trigger: ".sec-2", // Trigger animation when sec-2 is reached
        start: "0% 95%", // Animation starts when top of sec-2 reaches the center of the viewport
        end: "50% 50%",
        scrub: true, // Smooth scrubbing
        markers:true
      },
      x: -560, // Move to the right
      y: 520,
      rotation:[-38,0,0],
      // Adjust y position
      scale: 0.42, // Scale down
      duration: 2, // Duration of the animation
      ease: "power2.out",
    });
  }, []);
  // Hover enter animation
  const handleMouseEnter = () => {
    gsap.to([twitterRef.current, facebookRef.current, dribbleRef.current, instaRef.current, tiktokRef.current, LinkedInRef.current], {
      opacity: 1, // Make them visible
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.1, // Animate each icon with a slight delay
    });
    gsap.to(twitterRef.current, {
      x: 140,
      y:-120, 
    
      // Move to the left
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(facebookRef.current, {
      y:110,
      x: -220,
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(LinkedInRef.current, {
      y: 200,
      x: -280,
   
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(dribbleRef.current, {
      y: 180,
      x: -280,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(instaRef.current, {
      y:-20,
      x: 200,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(tiktokRef.current, {
      y:20,
      x: 200,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  // Hover leave animation
  const handleMouseLeave = () => {
    gsap.to([twitterRef.current, facebookRef.current, dribbleRef.current, instaRef.current, tiktokRef.current, LinkedInRef.current], {
      opacity: 0, // Make them visible
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.1, // Animate each icon with a slight delay
    });
    gsap.to(twitterRef.current, {
      x: 0,
      y:150,
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(tiktokRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(LinkedInRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(facebookRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(LinkedIn.current, {
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
    <div className='parent'>
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
            

            <Tilt className="tilt-container">
            <div className="icons_styling">
              <div>
                <img src={facebook} alt="" className="facebook" ref={facebookRef} />
                <img src={instagram} alt="" className="instagram" ref={instaRef} />

                <img src={Tiktok} alt="" className="instagram" ref={tiktokRef} />

              </div>
              <div>
              <img src={LinkedIn} alt="" className="instagram" ref={LinkedInRef} />

                <img src={twitter} alt="" className="twitter" ref={twitterRef} />
                <img src={dribble} alt="" className="dribble" ref={dribbleRef} />
              </div>
            </div>
              <Canvas style={{ width: '100%', height: '100%' , overflow:"visible" }} ref={phoneAnimationRef}>
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

       
<section className="rectangular-oval-white-prop-2">
{/* <img className="w-100" src="./images/Rectangle 9522.png" alt /> */}
</section>

<section
className="sec-2"
id="agence"
style={{ border: "3px solid green" }}
>
<div className="container">
  <div className="row">
    <div className="col-12 col-lg-5 order-2 order-md-1 text-center">
      <img
        className="img-fluid overlap-img"
        src="./images/man-effect2.png"
        alt
      />
    </div>
    <div className="col-12 col-lg-7 mb-5 mb-md-0 order-1 order-md-2">
      <div className="mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5 pt-md-3 pt-lg-2 pt-xl-4 pt-xxl-5">
        <h4 className="text-white fw-light mt-3 mt-md-0 ceo-sec-para">
          “Nous sommes passionnés par le succès de nos clients, et nous
          sommes fiers de leur fournir des résultats qui ont un impact
          positif sur leur entreprise. Que vous cherchiez à augmenter
          vos ventes, à attirer plus de trafic sur votre site web, ou à
          améliorer votre présence en ligne,{" "}
          <strong className="fw-semibold"> DIGITALY </strong>
          est là pour vous aider.”
        </h4>
        <h4 className="fw-semibold text-white text-end">
          FORHRANI Mehdi
        </h4>
        <h5
          className="text-end text-white fw-light"
          style={{ fontStyle: "italic" }}
        >
          Directeur Général DIGITALY
        </h5>
      </div>
    </div>
  </div>
</div>
</section>
</div>
  );

}
