// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import React from 'react';

// Utility function to generate a unique gradient based on the input
const generateGradient = (input: string) => {
  const hash = Array.from(input).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color1 = `hsl(${(hash * 5) % 360}, 70%, 60%)`;
  const color2 = `hsl(${(hash * 7) % 360}, 70%, 40%)`;
  return `radial-gradient(circle, ${color1}, ${color2})`;
};

interface CardProps {
  item: {
    name: string;
    imagePathLight?: string;
    imagePathDark?: string;
    description: string[];
    imageOpacity?: number;
    link?: {
      linkText: string;
      linkUrl: string;
    };
  };
  index: number;
  isDarkMode: boolean;
  cardState: boolean;
  handleFlip: (section: number, index: number) => void;
  sectionIndex: number;
}

const Card: React.FC<CardProps> = ({
  item,
  index,
  isDarkMode,
  cardState,
  handleFlip,
  sectionIndex,
}) => {
  const bgColor = isDarkMode ? "bg-zinc-900 text-gray-200" : "bg-zinc-100 text-gray-900";
  const linkBg = isDarkMode ? "bg-gray-300 text-gray-900" : "bg-gray-700 text-gray-200";

  // Determine the background image or gradient
  const backgroundImage = item.imagePathLight || item.imagePathDark
    ? `url(${isDarkMode ? item.imagePathDark : item.imagePathLight})`
    : generateGradient(item.name || `${index}`);

  return (
    <div
      key={`${item.name}-${index}`}
      className={`relative flex-shrink-0 w-80 h-80 border-zinc-300 ${
        !cardState && "hover:border-8"
      } hover:border-zinc-400 ${bgColor} border-4 m-2 rounded-lg shadow-lg p-4 flex flex-col items-center justify-start text-center`}
      onClick={() => handleFlip(sectionIndex, index)}
    >
      {/* Image Overlay */}
      <div
        className="absolute inset-0 rounded hover:rounded-none overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage,
          opacity: item.imageOpacity ? item.imageOpacity : cardState ? 0.1 : 0.9,
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10">
        <h2
          className={`text-lg font-bold opacity-80 px-1.5 rounded ${bgColor}`}
          aria-label={item.name || "Empty heading"}
        >
          {item.name || <span aria-hidden="true">Placeholder</span>}
        </h2>
        <br />
        {cardState && item.link && (
          <>
            <a
              href={item.link.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${linkBg} rounded-md text-sm`}
            >
              {item.link.linkText}
            </a>
            <br />
            <br />
          </>
        )}
        {cardState && item.description.map((desc, index) => (
          <React.Fragment key={`desc-${index}`}>
            <p className="text-base">{desc}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Card;
