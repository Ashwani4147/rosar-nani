import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function App() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goHome = () => {
    navigate("/"); // Redirect to root page
  };

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

  // Inline SVG for Home Icon
  const HomeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );

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
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.5) rotate(-180deg); } to { opacity: 1; transform: scale(1) rotate(0deg); } }
        @keyframes float { 0%,100%{ transform: translateY(0px); } 50%{ transform: translateY(-20px); } }
        @keyframes pulse { 0%,100%{ opacity:0.5; transform: scale(1); } 50%{ opacity:1; transform: scale(1.2); } }
        @keyframes sparkle { 0%,100%{ opacity:0.3; transform: translateY(0px); } 50%{ opacity:0.8; transform: translateY(-50px); } }
        @keyframes letterDrop { from{ opacity:0; transform: translateY(-50px) rotateX(90deg);} to{ opacity:1; transform: translateY(0) rotateX(0deg);} }
        @keyframes rotate { from{ transform: rotate(0deg);} to{ transform: rotate(360deg);} }

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

        .hardcore-button {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 24px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          color: white;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hardcore-button:hover { background: rgba(255,255,255,0.3); transform: scale(1.05); }
        .hardcore-button:active { transform: scale(0.98); }

        @media (max-width: 768px) {
          .responsive-text-7xl { font-size: 3rem; }
          .responsive-text-4xl { font-size: 2rem; }
          .responsive-text-2xl { font-size: 1.25rem; }
        }
        @media (min-width: 769px) {
          .responsive-text-7xl { font-size: 4.5rem; }
          .responsive-text-4xl { font-size: 2.25rem; }
          .responsive-text-2xl { font-size: 1.5rem; }
        }
      `}</style>

      {/* Background Sparkles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full animate-sparkle sparkle-${(i % 5) + 1}`}
            style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animationDelay: `${Math.random()*3}s` }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        {/* Floating Brand Icon */}
        <div className={`mb-8 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`}>
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 animate-float">
            <Sparkles className="w-12 h-12 text-white animate-rotate" />
          </div>
        </div>

        {/* Coming Soon Letters */}
        <div className="mb-6">
          {t("comingsoon").split("").map((letter, index) => (
            <span
              key={index}
              className={`responsive-text-7xl text-white inline-block ${isVisible ? `animate-letterDrop letter-delay-${index + 1}` : 'opacity-0'} hover:scale-110 transition-transform duration-300 cursor-default`}
              style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)', animationFillMode: 'both', fontWeight: fontWeights.medium, whiteSpace: 'pre' }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        {/* Animated Dots */}
        <div className={`flex justify-center space-x-2 ${isVisible ? 'animate-fadeInUp delay-2500' : 'opacity-0'}`}>
          {[0,1,2].map(i => <div key={i} className={`w-3 h-3 rounded-full bg-white animate-pulse-custom pulse-delay-${i+1}`} />)}
        </div>

        {/* 🔹 Back to Home Button with Animation */}
<div className={`${isVisible ? 'animate-fadeInUp delay-3000' : 'opacity-0'} mt-6`}>
  <button onClick={goHome} className="hardcore-button">
    <div style={{ marginRight: '8px' }}>
      <HomeIcon />
    </div>
    {t("backToHome")}
  </button>
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