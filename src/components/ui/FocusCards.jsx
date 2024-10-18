import React, { useState, memo } from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Card = memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className="rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out"
  >
    <img
      src={card.src}
      alt={card.title}
      className={cn(
        "object-cover absolute inset-0 w-full h-full transition-all duration-300",
        hovered === index ? "" : "blur-sm scale-105"
      )}
    />
    <div className="absolute inset-0 bg-black/50 flex items-end py-8 px-4">
      <div
        className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}