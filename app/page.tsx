'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  content: string;
}

const SubtleBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    {/* Easter Egg - Extremely subtle */}
    <div className="fixed bottom-6 right-6 opacity-5 hover:opacity-15 transition-opacity duration-1000 z-20">
      <div className="font-mono text-xs rotate-45 text-pink-400">
        <div className="tracking-widest transform scale-y-125">M▲GGZZ</div>
        <div className="text-[4px] text-center mt-1">eternal</div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [showSecret, setShowSecret] = useState<boolean>(false);
  const [showPromise, setShowPromise] = useState<boolean>(false);

  useEffect(() => {
    const createHeart = () => {
      const rand = Math.random();
      let content = '❤';
      if (rand < 0.10) content = 'Aza❤'; // 8% chance
      else if (rand < 0.007) content = 'Maggzz❤'; // 0.7% chance

      const heart: Heart = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 15 + 10,
        duration: Math.random() * 8 + 5,
        delay: Math.random() * 2,
        content
      };
      
      setHearts(prev => [...prev, heart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, heart.duration * 1000);
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden relative">
      <Head>
        <title>For My Aza</title>
        <meta name="description" content="A gentle whisper from my heart to yours" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SubtleBackground />

      <main className="py-20 flex-1 flex flex-col justify-center items-center max-w-4xl w-full mx-auto px-4 text-center relative z-10">
        {/* Floating Hearts */}
        {hearts.map(heart => (
          <div 
            key={heart.id}
            className={`absolute -top-12 select-none pointer-events-none
              ${heart.content.includes('Maggzz') ? 
                'text-pink-600 animate-rare-flicker' : 
                'text-pink-300'}
              ${heart.content.includes('Aza') ? 'animate-soft-flicker' : ''}`}
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animation: `float ${heart.duration}s ease-in ${heart.delay}s forwards`
            }}
          >
            {heart.content}
          </div>
        ))}

        <div className="animate-floatIn mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
            My Beloved Aza
          </h1>
          <div className="relative group">
            <p className="text-2xl md:text-3xl text-pink-500 transform transition-transform duration-500 hover:scale-105">
              You are my forever sunrise
              <span className="absolute -right-8 top-0 text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                🌸
              </span>
            </p>
          </div>
        </div>

        <div className="my-8 space-y-6">
          <button 
            onMouseEnter={() => setShowSecret(true)}
            onMouseLeave={() => setShowSecret(false)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-lg relative"
          >
            ✉️ Our Secret Whisper
            {showSecret && (
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-xl animate-fadeIn">
                <p className="text-pink-600 font-medium">
                  "Through lifetimes and beyond time's flow,<br/>
                  My soul would always know your glow<br/>
                  - Your Eternal Partner"
                </p>
              </div>
            )}
          </button>

          <div 
            className="cursor-pointer transform transition hover:scale-105"
            onClick={() => setShowPromise(!showPromise)}
          >
            <div className="bg-white/95 p-6 rounded-xl shadow-md border border-pink-100">
              <p className="text-pink-600 text-lg font-medium">
                {showPromise ? (
                  <span className="animate-fadeIn">
                    "I vow to cherish every moment,<br/>
                    To love you gently and endlessly"<br/>
                    <span className="text-sm mt-2 block">- Carved in life's tapestry</span>
                  </span>
                ) : (
                  'Click to unveil timeless vow 🌹'
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div className="bg-white/95 p-8 rounded-3xl shadow-xl border border-pink-100 animate-slideUp">
            <h3 className="text-3xl font-bold text-pink-600 mb-6">AZA: My Serenade</h3>
            <div className="space-y-4 text-pink-700 text-lg">
              <p>A - Always my morning's first light</p>
              <p>Z - Zenith where all feels right</p>
              <p>A - Anchor through every night</p>
              <div className="mt-6 border-t-2 border-pink-100 pt-6 italic">
                "Your laughter - my favorite melody,<br/>
                Your heart - my eternal symphony,<br/>
                My always and forever, my wife."
              </div>
            </div>
          </div>

          <div className="w-48 h-48 rounded-full bg-pink-50 shadow-lg border-4 border-pink-300 flex justify-center items-center mx-auto mt-12">
            <div className="text-center">
              <span className="text-6xl text-pink-400">🌺</span>
              <p className="text-sm mt-2 text-pink-600 font-medium">
                Infinite Us<br/>
                <span className="text-xs">Est. 06 January 2025</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes rare-flicker {
          0%, 85%, 100% { opacity: 0.4; }
          5%, 80% { opacity: 0.8; }
        }
        
        @keyframes soft-flicker {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.6; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-rare-flicker {
          animation: rare-flicker 12s ease-in-out infinite;
        }
        
        .animate-soft-flicker {
          animation: soft-flicker 8s ease-in-out infinite;
        }
        
        .animate-floatIn {
          animation: fadeIn 1.5s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }
      `}</style>
    </div>
  );
}