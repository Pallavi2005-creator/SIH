import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    // Load GSAP and Split-Type dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/split-type';
    document.body.appendChild(script2);

    script2.onload = () => {
      const animatedTextElement = document.getElementById('animatedText');

      // Initial split (only once)
      const split = new window.SplitType(animatedTextElement, { types: 'words, chars' });

      const animateText = () => {
        // Reset characters' styles for a smooth re-animation
        window.gsap.set(split.chars, { opacity: 0, y: 50 });

        // Apply GSAP animation to the split text
        window.gsap.fromTo(
          split.chars, 
          { opacity: 0, y: 50 },
          {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.05,
            onComplete: () => {
              // Optional: fade out text before the next iteration
              window.gsap.to(split.chars, { opacity: 0, delay: 1, duration: 0.5 });
            }
          }
        );
      };

      
      animateText();

      
      const intervalId = setInterval(animateText, 6000);

      return () => {
        
        clearInterval(intervalId);
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    };
  }, []);

  return (
    <div 
      className="w-auto bg-cover bg-center h-screen relative" 
      style={{
        backgroundColor:"1f1f1f",
        
      }}
    >
      <div className="absolute left-[90px] top-[190px]"> 
        <div className="w-full">
          <h1 id="animatedText" className='text-white text-7xl font-serif text-bold'>
            CLASS, <br />
            CAPABILITY,
            UNLOCKED
            <img src="" alt="" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
