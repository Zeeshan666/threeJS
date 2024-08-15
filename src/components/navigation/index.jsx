// import React, { useEffect, useRef } from 'react';
// import { socialIcons } from '../icons/data';
// import '../../assets/css/navigation.css';
// import gsap from 'gsap';

// const Navigation = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const icons = containerRef.current.querySelectorAll('li');

//     gsap.set(icons, {
//       x: 0,
//       y: 0,
//     });

//     const handleMouseEnter = () => {
//       gsap.to(icons, {
//         duration: 0.6,
//         x: (index) => Math.cos((index * 360 / socialIcons.length) * (Math.PI / 180)) * 250,
//         y: (index) => Math.sin((index * 360 / socialIcons.length) * (Math.PI / 180)) * 250,
//         ease: 'power2.out',
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(icons, {
//         duration: 0.6,
//         x: 0,
//         y: 0,
//         ease: 'power2.out',
//       });
//     };

//     const container = containerRef.current;
//     container.addEventListener('mouseenter', handleMouseEnter);
//     container.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       container.removeEventListener('mouseenter', handleMouseEnter);
//       container.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className='absolute w-1/2 h-64 flex items-center justify-center'
//     >
//       <ul>
//         {socialIcons.map((social, index) => (
//           <li
//             key={index}
//             className='absolute bg-blue-500'
//             style={{ transform: `translate(55%, 45%)` }}
//           >
//             <img src={social.icon} alt={social.name} className='h-12 w-12' />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navigation;
