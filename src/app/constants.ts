// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import sectionItems from "./sectionItems";

export const defaultPositions = [
    { x: 0, y: 0 },
    { x: 30, y: 0 },
    { x: 30, y: 8 },
    { x: 0, y: 8 },
  ];
  
  export const defaultBoxPositionNumbers = [0, 2, 6, 8];
  
  export const positionOffsets = [
    { x: 0, y: 0 },
    { x: 15, y: 0 },
    { x: 30, y: 0 },
    { x: 30, y: 2 },
    { x: 30, y: 4 },
    { x: 30, y: 6 },
    { x: 30, y: 8 },
    { x: 15, y: 8 },
    { x: 0, y: 8 },
    { x: 0, y: 6 },
    { x: 0, y: 4 },
    { x: 0, y: 2 },
  ];

  export const links = [
    "resume", // Link for 'Resume' section
    "about-me", // Link for 'About me' section
    "projects", // Link for 'Projects' section
    "contact-me", // Link for 'Contact me' section
  ];

  export const sections = [
    { id: 'resume', title: 'Resume', items: sectionItems[0] },
    { id: 'about-me', title: 'About me', items: sectionItems[1] },
    { id: 'projects', title: 'Projects', items: sectionItems[2] },
    { id: 'contact-me', title: 'Contact me', items: sectionItems[3] },
  ];
  