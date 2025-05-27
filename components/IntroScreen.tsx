'use client';

import { useEffect } from 'react';

interface Props {
  onFinish: () => void;
}

const IntroScreen: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 100);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <h1 className="relative z-10 text-8xl font-extrabold tracking-widest select-none glow-text animate-intro">
        PSM
      </h1>

      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="w-[200%] h-[3px] bg-blue-500 animate-glide absolute top-1/2 left-[-50%] opacity-70 rounded" />
      </div>

      <style jsx>{`
        .glow-text {
          background: linear-gradient(90deg, #60a5fa, #3b82f6, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          filter:
            drop-shadow(0 0 6px #3b82f6)
            drop-shadow(0 0 12px #2563eb);
          /* Removed the strongest drop-shadow for subtle effect */
        }

        @keyframes intro {
          0% {
            opacity: 0;
            transform: scale(1.8);
            letter-spacing: 1.4em;
          }
          40% {
            opacity: 1;
            transform: scale(1);
            letter-spacing: 0.3em;
          }
          85% {
            opacity: 1;
            transform: scale(1);
            letter-spacing: 0.3em;
          }
          100% {
            opacity: 0;
            transform: scale(0.9);
            letter-spacing: 0.5em;
          }
        }

        @keyframes glide {
          0% {
            left: -50%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-intro {
          animation: intro 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-glide {
          animation: glide 3.5s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
