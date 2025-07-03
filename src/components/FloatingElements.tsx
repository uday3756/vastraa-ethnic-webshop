
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Flowers */}
      <div className="floating-flower absolute top-20 left-10 text-4xl opacity-20">
        🌸
      </div>
      <div className="floating-flower absolute top-40 right-20 text-3xl opacity-15" style={{ animationDelay: '2s' }}>
        🌺
      </div>
      <div className="floating-flower absolute top-60 left-1/4 text-2xl opacity-25" style={{ animationDelay: '4s' }}>
        🌼
      </div>
      <div className="floating-flower absolute bottom-40 right-1/4 text-3xl opacity-20" style={{ animationDelay: '1s' }}>
        🌷
      </div>
      <div className="floating-flower absolute bottom-20 left-1/3 text-4xl opacity-15" style={{ animationDelay: '3s' }}>
        🌹
      </div>
      
      {/* Traditional Pattern Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 traditional-pattern opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 traditional-pattern opacity-30"></div>
    </div>
  );
};

export default FloatingElements;
