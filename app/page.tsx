'use client';

import { useState } from 'react';
import Header from '@/components/header';
import IntroScreen from '@/components/IntroScreen';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleFinishIntro = () => setShowIntro(false);

  const videoCards = [
    {
      title: 'Welcome to SentinelAI',
      desc: 'Real-time AI-powered security & surveillance system.',
      video: '/videos/heroone.mp4',
    },
    {
      title: 'Real-Time Monitoring',
      desc: 'Surveillance intelligence for modern challenges.',
      video: '/videos/heroone.mp4',
    },
    {
      title: 'AI Threat Detection',
      desc: 'Predict, prevent, and protect with SentinelAI.',
      video: '/videos/heroone.mp4',
    },
  ];

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </button>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={showIntro ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      {showIntro ? (
        <IntroScreen onFinish={handleFinishIntro} />
      ) : (
        <>
          <Header />

          {/* Hero Slider Section */}
          <main className="pt-14">
            <Slider {...settings} className="relative w-full min-h-screen">
              {videoCards.map((card, index) => (
                <section key={index} className="relative min-h-screen w-full overflow-hidden">
                  {/* Video Background */}
                  <video
                    autoPlay
                    loop
                    playsInline
                    controls={false}
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={card.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Text Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                      {card.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6"
                    >
                      {card.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-medium transition duration-300"
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  </div>
                </section>
              ))}
            </Slider>
          </main>
        </>
      )}
    </div>
  );
}
