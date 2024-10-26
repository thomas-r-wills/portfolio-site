// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import React from 'react';
import Card from './card';

interface SectionProps {
  id: string;
  title: string;
  sectionIndex: number;
  sectionItems: {
    name: string;
    imagePathLight?: string;
    imagePathDark?: string;
    description: string[];
    imageOpacity?: number;
    link?: {
      linkText: string;
      linkUrl: string;
    };
  }[];
  isDarkMode: boolean;
  cardStateArray: boolean[][];
  handleFlip: (section: number, index: number) => void;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  sectionIndex,
  sectionItems,
  isDarkMode,
  cardStateArray,
  handleFlip,
}) => {
  const titleBg = isDarkMode
    ? `bg-${title.toLowerCase().replace(/\s/g, "-")}-800 text-gray-200`
    : `bg-${title.toLowerCase().replace(/\s/g, "-")}-200 text-gray-900`;

  return (
    <>
      <div className="mt-[10rem] h-2 bg-zinc-400 w-full"></div>
      <h1
        id={id}
        className={`mt-5 text-4xl rounded w-60 h-10 text-center ${titleBg}`}
      >
        {title}
      </h1>
      <div className="m-8 flex flex-row flex-wrap justify-around contents-center w-full">
        {sectionItems.map((item, index) => (
          <Card
            key={`${title}-card-${index}`}
            item={item}
            index={index}
            isDarkMode={isDarkMode}
            cardState={cardStateArray[sectionIndex][index]}
            handleFlip={handleFlip}
            sectionIndex={sectionIndex}
          />
        ))}
      </div>
    </>
  );
};

export default Section;
