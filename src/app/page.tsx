// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  defaultPositions,
  defaultBoxPositionNumbers,
  positionOffsets,
  links,
  sections,
} from "./constants";
import { moveBoxSmoothly, getBoxClasses } from "./utils";

// Define the structure of the Position interface
interface Position {
  x: number;
  y: number;
}

// Import dynamic sections
const DynamicSection = dynamic(() => import("./section"), { ssr: false });

const animationDuration = 1500; // Duration in milliseconds
const SCROLL_THRESHOLD = 80; // 5rem in pixels

export default function Page() {
  // State declarations
  const [positions, setPositions] = useState<Position[]>(defaultPositions);
  const [cardStateArray, setCardStateArray] = useState([
    [false, false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false],
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(0);

  // Refs for animation control
  const scrollListenerRef = useRef<number | null>(null);
  const boxPositionNumbers = useRef<number[]>(defaultBoxPositionNumbers);
  const movingBox = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
 

  // Toggle dark mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Handle window resizing and update isMobileView
  const handleResize = () => {
    const isCurrentlyMobile = window.innerWidth < 960;
    setIsMobileView(isCurrentlyMobile);

    // Reset to default positions if switching from mobile to desktop
    if (!isCurrentlyMobile) {
      setPositions(defaultPositions);
      boxPositionNumbers.current = defaultBoxPositionNumbers;
    }
  };

  // Handle scroll and set scrolling state
  const handleScroll = () => {
    if (scrollListenerRef.current) return;
    scrollListenerRef.current = window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > SCROLL_THRESHOLD);
      scrollListenerRef.current = null;
    });
  };

  // Function to animate the movement of the boxes
  const animate = (timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    const activeBox = movingBox.current;
    const nextBox = activeBox === 3 ? 0 : activeBox + 1;

    const startPos = positionOffsets[boxPositionNumbers.current[activeBox]];
    const endPos =
      positionOffsets[
        (boxPositionNumbers.current[activeBox] + 1) % positionOffsets.length
      ];

    if (delta < animationDuration) {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        newPositions[activeBox] = moveBoxSmoothly(
          startPos,
          endPos,
          delta,
          animationDuration
        );
        return newPositions;
      });
    } else {
      boxPositionNumbers.current[activeBox] =
        (boxPositionNumbers.current[activeBox] + 1) % positionOffsets.length;

      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        newPositions[activeBox] =
          positionOffsets[boxPositionNumbers.current[activeBox]];
        return newPositions;
      });

      if (
        boxPositionNumbers.current[activeBox] ===
          boxPositionNumbers.current[nextBox] - 1 ||
        (boxPositionNumbers.current[activeBox] === 11 &&
          boxPositionNumbers.current[nextBox] === 0)
      ) {
        movingBox.current = nextBox;
      }

      lastTimeRef.current = timestamp;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  // Function to handle content scrolling
  const contentScroll = (id: string) => {
    const element = document.getElementById(id);
    const offset = 120; // Adjust this value to the height of your fixed header

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without reloading
      history.pushState(null, "", `#${id}`);
    }
  };

  // Function to handle card flipping
  const handleFlip = (section: number, index: number) => {
    const newCardStateArray = [...cardStateArray];
    newCardStateArray[section][index] = !newCardStateArray[section][index];
    setCardStateArray(newCardStateArray);
  };

  const updateActiveMobileSection = (section: number) => {
    setActiveMobileSection(section);
  }

  // useEffect for resizing and animation initialization
  useEffect(() => {
    setIsMounted(true);
    handleResize();

    window.addEventListener("resize", handleResize);

    if (!isMobileView) {
      const delay = setTimeout(() => {
        lastTimeRef.current = performance.now();
        animationRef.current = requestAnimationFrame(animate);
      }, 4000);

      return () => {
        clearTimeout(delay);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  // useEffect for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  if (!isMounted) return null;

  return (
    <>
      <header
        className={`flex justify-between ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        } ${
          isMobileView
            
              ? "fixed w-full top-0 z-50"
             
            : "fixed w-full top-0 bg-opacity-80 p-8 backdrop-blur-sm z-50"
        }`}
      >
        <nav
          className="flex justify-between w-full"
          aria-label="Main navigation"
        >
          {isMobileView ? (
            <div className="flex flex-wrap w-full backdrop-blur-md text-center transition-opacity duration-500">
              <div
              
                className={`flex items-center justify-center ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        } h-10 w-6/12`}
                aria-label={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                <h1 className={`text-m font-bold ${
                isDarkMode ? "text-gray-200" : "text-zinc-600"
              }`}>Thomas Wills</h1>
              </div>
              <div
                onClick={toggleDarkMode}
                className={`flex items-center justify-center ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                } h-10 w-1/2`}
                aria-label={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                <h1 className={`text-sm ${
                isDarkMode ? "text-gray-200" : "text-zinc-600"
              }`}>{isDarkMode ? "Light Mode" : "Dark Mode"}</h1>
              </div>
              {
                positions.map((pos, index) => (
                  <div
                    key={`header-box-content-display-${index}`}
                    
                    onClick={() => {updateActiveMobileSection(index)
                      console.log(`clicked and activeMobileSection is ${activeMobileSection}`)
                    }}
                    className={` w-1/2 h-10 flex items-center justify-center ${getBoxClasses(
                      index,
                      isDarkMode
                    )}`}
                    aria-label={`Go to ${links[index]}`}
                  >
                    <h1 className="text-sm">
                      {index === 0
                        ? "Resume"
                        : index === 1
                        ? "About me"
                        : index === 2
                        ? "Projects"
                        : "Contact me"}
                    </h1>
                  </div>
                ))}
              
            </div>
          ) : (
            <h1
              className={`text-5xl ${isMobileView ? "pl-4 my-4" : ""} ${
                isDarkMode ? "text-gray-200" : "text-zinc-600"
              }`}
            >
              Thomas Wills
            </h1>
          )}
          {!isMobileView && (
            <div className="flex justify-between gap-4">
              {isScrolled &&
                positions.map((pos, index) => (
                  <a
                    key={`header-box-links-${index}`}
                    href={links[index]}
                    onClick={(e) => {
                      e.preventDefault();
                      contentScroll(links[index]);
                    }}
                    className={`rounded w-[10rem] h-12 flex items-center justify-center ${getBoxClasses(
                      index,
                      isDarkMode
                    )}`}
                    aria-label={`Go to ${links[index]}`}
                  >
                    <h1 className="text-sm">
                      {index === 0
                        ? "Resume"
                        : index === 1
                        ? "About me"
                        : index === 2
                        ? "Projects"
                        : "Contact me"}
                    </h1>
                  </a>
                ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md text-sm"
                aria-label={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          )}
        </nav>
      </header>

      <div
        className={`min-h-screen w-full flex flex-col justify-center items-center ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        } transition-opacity duration-500`}
      >
        {isMobileView ? null : (
          // Render original animation layout for larger screens
          <div
            className={`w-5/6 flex justify-center ${!isMobileView && "mt-32"}`}
          >
            <div className="h-[13rem] w-[45rem] relative">
              <div className="m-10 border-zinc-400 rounded-2xl border-4 h-[8.25rem] w-[40rem] opacity-0 animate-fadeIn"></div>

              {positions.map((pos, index) => (
                <a
                  key={`animation-boxes-${index}`}
                  href={links[index]} // Use unique link for each box
                  onClick={(e) => {
                    e.preventDefault();
                    contentScroll(links[index]);
                  }}
                  style={{ transform: `translate(${pos.x}rem, ${pos.y}rem)` }}
                  className={`absolute top-6 left-0 rounded w-60 h-8 flex items-center justify-center ${getBoxClasses(
                    index,
                    isDarkMode
                  )}`}
                >
                  <h1 className={`text-2xl`}>
                    {index === 0
                      ? "Resume"
                      : index === 1
                      ? "About me"
                      : index === 2
                      ? "Projects"
                      : "Contact me"}
                  </h1>
                </a>
              ))}
            </div>
          </div>
        )}
        {isMobileView ? (
          <>
            
                <DynamicSection
              key={sections[activeMobileSection].id}
              id={sections[activeMobileSection].id}
              title={sections[activeMobileSection].title}
              sectionIndex={activeMobileSection}
              sectionItems={sections[activeMobileSection].items}
              isDarkMode={isDarkMode}
              cardStateArray={cardStateArray}
              handleFlip={handleFlip}
            />
             
            
          </>
        ) : (
          sections.map((section, index) => (
            <DynamicSection
              key={section.id}
              id={section.id}
              title={section.title}
              sectionIndex={index}
              sectionItems={section.items}
              isDarkMode={isDarkMode}
              cardStateArray={cardStateArray}
              handleFlip={handleFlip}
            />
          ))
        )}
      </div>
      <footer
        className={`py-6  ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 text-center space-y-4">
          {/*<!-- Copyright and Licensing Notice -->*/}
          <p className="text-sm">
            © Thomas Wills 2024. Source code available under the&nbsp;
            <a
              href="https://opensource.org/licenses/MIT"
              className={`hover:underline font-bold ${
                isDarkMode ? "text-blue-300" : "text-blue-700"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </p>

          {/*<!-- Privacy Policy Notice -->*/}
          <p className="text-sm">
            This website does not collect personal data.
          </p>

          {/*<!-- Terms of Use -->*/}
          <p className="text-sm">
            This website and its content are provided for informational purposes
            only. By using this site, you agree not to copy, distribute, or
            alter content without permission. The source code is available under
            the MIT License, allowing for free use, modification, and
            distribution, provided the original copyright notice and license are
            included in all copies.
          </p>

          {/*<!-- Accessibility Statement -->*/}
          <p className="text-sm">
            I am committed to making this website accessible to as many users as
            possible, regardless of technology or ability. If you encounter any
            issues, please reach out to&nbsp;
            <a
              href="mailto:tw8307542@gmail.com"
              className={`hover:underline font-bold ${
                isDarkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              tw8307542@gmail.com
            </a>
            .
          </p>

          {/*<!-- Credits -->*/}
          <p className="text-sm">
            Built using Next.js and TailwindCSS, with assistance from AI tools
            like ChatGPT and GitHub Copilot.&nbsp;
            <a
              href="https://github.com/thomas-r-wills/portfolio-site
"
              className={`hover:underline font-bold ${
                isDarkMode ? "text-blue-300" : "text-blue-700"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View source code on GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
