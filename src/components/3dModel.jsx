import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { socialIcons } from '../../src/components/icons/data';

function Model({ onHover }) {
  const { scene } = useGLTF('/images/Digitally Iphone Mock up 3D.gltf');
  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y = -2.7 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[3.4, 3.4, 3.4]}
      position={[-0.4, -2.7, 0]}
      rotation={[-0.2, -0.53, -0.19]} // Adjust the tilt for bottom-right corner up
      onPointerOver={onHover}
    />
  );
}

function IconsIn3D({ isHovered }) {
  const groupRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const radius = 10; // Increased radius for more distance
  const angleIncrement = 360 / socialIcons.length;

  useEffect(() => {
    const icons = [];
    socialIcons.forEach((social, index) => {
      const angleRad = (index * angleIncrement * Math.PI) / 180;
      const material = new THREE.SpriteMaterial({ map: textureLoader.load(social.icon) });
      const sprite = new THREE.Sprite(material);

      sprite.position.set(0, 0, -10); // Start behind the model
      sprite.scale.set(1.5, 1.5, 1.5); // Initial size of icons
      sprite.material.opacity = 0; // Start invisible

      groupRef.current.add(sprite);
      icons.push(sprite);
    });

    if (isHovered) {
      // Staggered animation for a wave-like effect
      gsap.to(icons.map((icon, index) => icon.position), {
        x: (index) => Math.cos((index * angleIncrement * Math.PI) / 180) * radius,
        y: (index) => -5 + Math.sin((index * angleIncrement * Math.PI) / 180) * radius,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1, // Delay each icon by 0.1 seconds for staggered effect
      });

      // Scale and opacity transition
      gsap.to(icons.map(icon => icon.scale), {
        x: 2,
        y: 2,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
      });

      gsap.to(icons.map(icon => icon.material), {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
      });

      // Add slight rotation for a more dynamic effect
      gsap.to(icons.map(icon => icon.rotation), {
        z: 0.1,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
      });
    } else {
      // Animate icons back behind the model and reset their size and opacity
      gsap.to(icons.map(icon => icon.position), {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(icons.map(icon => icon.scale), {
        x: 1.5,
        y: 1.5,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(icons.map(icon => icon.material), {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(icons.map(icon => icon.rotation), {
        z: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [isHovered]);

  return <group ref={groupRef}></group>;
}

export default function Basic3DScene() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        minAzimuthAngle={-Math.PI / 8} // Limit rotation to a small range on the y-axis
        maxAzimuthAngle={Math.PI / 8}
        minPolarAngle={Math.PI / 3.5} // Limit tilt on the x-axis (downwards)
        maxPolarAngle={Math.PI / 2.5} // Limit tilt on the x-axis (upwards)
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model onHover={() => setIsHovered(true)} />
        <IconsIn3D isHovered={isHovered} />
      </Suspense>
    </Canvas>
  );
}
