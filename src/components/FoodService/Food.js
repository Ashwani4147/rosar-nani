// import { Sparkles } from 'lucide-react';
// import { useEffect, useState } from 'react';

// export default function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div 
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, var(--food-primary) 0%, var(--food-secondary) 50%, var(--food-tertiary) 100%)',
//       }}
//     >
//       {/* CSS Animations */}
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.5) rotate(-180deg);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) rotate(0deg);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.5;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.2);
//           }
//         }

//         @keyframes sparkle {
//           0%, 100% {
//             opacity: 0.3;
//             transform: translateY(0px);
//           }
//           50% {
//             opacity: 0.8;
//             transform: translateY(-50px);
//           }
//         }

//         @keyframes letterDrop {
//           from {
//             opacity: 0;
//             transform: translateY(-50px) rotateX(90deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) rotateX(0deg);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         .animate-fadeInScale {
//           animation: fadeInScale 1.5s ease-out forwards;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-pulse-custom {
//           animation: pulse 1.5s ease-in-out infinite;
//         }

//         .animate-sparkle {
//           animation: sparkle 3s ease-in-out infinite;
//         }

//         .animate-letterDrop {
//           animation: letterDrop 0.6s ease-out forwards;
//         }

//         .animate-rotate {
//           animation: rotate 20s linear infinite;
//         }

//         .letter-delay-1 { animation-delay: 0.1s; }
//         .letter-delay-2 { animation-delay: 0.2s; }
//         .letter-delay-3 { animation-delay: 0.3s; }
//         .letter-delay-4 { animation-delay: 0.4s; }
//         .letter-delay-5 { animation-delay: 0.5s; }
//         .letter-delay-6 { animation-delay: 0.6s; }
//         .letter-delay-7 { animation-delay: 0.7s; }
//         .letter-delay-8 { animation-delay: 0.8s; }
//         .letter-delay-9 { animation-delay: 0.9s; }
//         .letter-delay-10 { animation-delay: 1.0s; }
//         .letter-delay-11 { animation-delay: 1.1s; }

//         .delay-500 { animation-delay: 0.5s; }
//         .delay-1000 { animation-delay: 1s; }
//         .delay-1500 { animation-delay: 1.5s; }
//         .delay-2000 { animation-delay: 2s; }
//         .delay-2500 { animation-delay: 2.5s; }
//         .delay-3000 { animation-delay: 3s; }

//         .sparkle-1 { animation-delay: 0s; }
//         .sparkle-2 { animation-delay: 0.5s; }
//         .sparkle-3 { animation-delay: 1s; }
//         .sparkle-4 { animation-delay: 1.5s; }
//         .sparkle-5 { animation-delay: 2s; }

//         .pulse-delay-1 { animation-delay: 0s; }
//         .pulse-delay-2 { animation-delay: 0.2s; }
//         .pulse-delay-3 { animation-delay: 0.4s; }
//       `}</style>

//       {/* Animated Background Sparkles */}
//       <div className="absolute inset-0">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute w-1 h-1 bg-white rounded-full animate-sparkle sparkle-${(i % 5) + 1}`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="text-center z-10 px-4">
//         {/* Animated Brand Icon */}
//         <div className={`mb-8 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`}>
//           <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 animate-float">
//             <Sparkles className="w-12 h-12 text-white animate-rotate" />
//           </div>
//         </div>

//         {/* Brand Name */}
//         <h1 className={`text-3xl md:text-4xl mb-6 text-white ${isVisible ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
//           Rosar Nani
//         </h1>

//         {/* Coming Soon Text with Letter Animation */}
//         <div className="mb-6">
//           {['C', 'o', 'm', 'i', 'n', 'g', ' ', 'S', 'o', 'o', 'n'].map((letter, index) => (
//             <span
//               key={index}
//               className={`text-5xl md:text-7xl text-white inline-block ${
//                 isVisible ? `animate-letterDrop letter-delay-${index + 1}` : 'opacity-0'
//               } hover:scale-110 transition-transform duration-300 cursor-default`}
//               style={{ 
//                 textShadow: '0 4px 8px rgba(0,0,0,0.3)',
//                 animationFillMode: 'both'
//               }}
//             >
//               {letter === ' ' ? '\u00A0' : letter}
//             </span>
//           ))}
//         </div>

//         {/* Subtitle */}
//         <p className={`text-xl md:text-2xl text-white/90 mb-8 ${isVisible ? 'animate-fadeInUp delay-2000' : 'opacity-0'}`}>
//           Where Luxury Meets Beauty
//         </p>

//         {/* Animated Dots */}
//         <div className={`flex justify-center space-x-2 ${isVisible ? 'animate-fadeInUp delay-2500' : 'opacity-0'}`}>
//           {[0, 1, 2].map((i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 rounded-full bg-white animate-pulse-custom pulse-delay-${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-white/30 animate-float" />
//       <div className="absolute bottom-32 right-16 w-6 h-6 rounded-full bg-white/20 animate-float" style={{ animationDelay: '1s' }} />
//       <div className="absolute top-1/3 right-24 w-2 h-2 rounded-full bg-white/40 animate-pulse-custom" />
//       <div className="absolute bottom-1/4 left-16 w-3 h-3 rounded-full bg-white/25 animate-float" style={{ animationDelay: '2s' }} />
//     </div>
//   );
// }


import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Hardcoded CSS values
  const colors = {
    foodPrimary: '#86c9d8',
    foodSecondary: '#efb1fa',
    foodTertiary: '#f8be6a',
    white: '#ffffff',
  };

  const fontWeights = {
    medium: 500,
    normal: 400,
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        fontSize: '16px',
        background: `linear-gradient(135deg, ${colors.foodPrimary} 0%, ${colors.foodSecondary} 50%, ${colors.foodTertiary} 100%)`,
        color: colors.white,
      }}
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.5) rotate(-180deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: translateY(0px); }
          50% { opacity: 0.8; transform: translateY(-50px); }
        }

        @keyframes letterDrop {
          from { opacity: 0; transform: translateY(-50px) rotateX(90deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 1.5s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse 1.5s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
        .animate-letterDrop { animation: letterDrop 0.6s ease-out forwards; }
        .animate-rotate { animation: rotate 20s linear infinite; }

        ${[...Array(11)].map((_, i) => `.letter-delay-${i+1} { animation-delay: ${0.1*(i+1)}s; }`).join('')}
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-2500 { animation-delay: 2.5s; }
        .delay-3000 { animation-delay: 3s; }
        ${[...Array(5)].map((_, i) => `.sparkle-${i+1} { animation-delay: ${i*0.5}s; }`).join('')}
        ${[...Array(3)].map((_, i) => `.pulse-delay-${i+1} { animation-delay: ${i*0.2}s; }`).join('')}
      `}</style>

      {/* Animated Background Sparkles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full animate-sparkle sparkle-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        {/* Animated Brand Icon */}
        <div className={`mb-8 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`}>
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 animate-float">
            <Sparkles className="w-12 h-12 text-white animate-rotate" />
          </div>
        </div>

        {/* Coming Soon Text with Letter Animation */}
        <div className="mb-6">
          {['C','o','m','i','n','g',' ','S','o','o','n'].map((letter, index) => (
            <span
              key={index}
              className={`text-5xl md:text-7xl text-white inline-block ${
                isVisible ? `animate-letterDrop letter-delay-${index + 1}` : 'opacity-0'
              } hover:scale-110 transition-transform duration-300 cursor-default`}
              style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                animationFillMode: 'both',
                fontWeight: fontWeights.medium,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        {/* Animated Dots */}
        <div className={`flex justify-center space-x-2 ${isVisible ? 'animate-fadeInUp delay-2500' : 'opacity-0'}`}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-white animate-pulse-custom pulse-delay-${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-white/30 animate-float" />
      <div className="absolute bottom-32 right-16 w-6 h-6 rounded-full bg-white/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-24 w-2 h-2 rounded-full bg-white/40 animate-pulse-custom" />
      <div className="absolute bottom-1/4 left-16 w-3 h-3 rounded-full bg-white/25 animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
}
