// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

// Define the structure of the Position interface
interface Position {
    x: number;
    y: number;
  }

export const moveBoxSmoothly = (
  startPos: Position,
  endPos: Position,
  elapsed: number,
  duration: number
): Position => {
  const progress = Math.min(elapsed / duration, 1);
  return {
    x: startPos.x + (endPos.x - startPos.x) * progress,
    y: startPos.y + (endPos.y - startPos.y) * progress,
  };
};

// Function to get box classes based on index and dark mode
export const getBoxClasses = (index: number, isDarkMode: boolean): string => {
    const colorClasses = [
      isDarkMode
        ? "bg-indigo-700 hover:bg-indigo-300 text-gray-200 hover:text-black"
        : "bg-indigo-200 hover:bg-indigo-600 text-gray-900 hover:text-white",
      isDarkMode
        ? "bg-lime-800 hover:bg-lime-300 text-gray-200 hover:text-black"
        : "bg-lime-200 hover:bg-lime-700 text-gray-900 hover:text-white",
      isDarkMode
        ? "bg-sky-800 hover:bg-sky-300 text-gray-200 hover:text-black"
        : "bg-sky-200 hover:bg-sky-700 text-gray-900 hover:text-white",
      isDarkMode
        ? "bg-orange-800 hover:bg-orange-300 text-gray-200 hover:text-black"
        : "bg-orange-200 hover:bg-orange-700 text-gray-900 hover:text-white",
    ];
    return colorClasses[index];
  };

