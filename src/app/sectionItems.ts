// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import fullstackLight from "@/app/assets/fullstack-engineer-light.webp";
import fullstackDark from "@/app/assets/fullstack-engineer-dark.webp";

import cloudLight from "@/app/assets/cloud-architect-light.webp";
import cloudDark from "@/app/assets/cloud-architect-dark.webp";

import cyberLight from "@/app/assets/cyber-analyst-light.webp";
import cyberDark from "@/app/assets/cyber-analyst-dark.webp";

import techLeadLight from "@/app/assets/technical-lead-light.webp";
import techLeadDark from "@/app/assets/technical-lead-dark.webp";

import diverseExperienceLight from "@/app/assets/diverse-experience-light.webp";
import diverseExperienceDark from "@/app/assets/diverse-experience-dark.webp";

import lifelongLearnerLight from "@/app/assets/lifelong-learner-light.webp";
import lifelongLearnerDark from "@/app/assets/lifelong-learner-dark.webp";

import ecommProjectLight from "@app/assets/ecomm-project-light.webp";
import ecommProjectDark from "@app/assets/ecomm-project-dark.webp";

import imageProjectLight from "@app/assets/image-project-light.webp";
import imageProjectDark from "@app/assets/image-project-dark.webp";

import gatewayProjectLight from "@app/assets/gateway-project-light.webp";
import gatewayProjectDark from "@app/assets/gateway-project-dark.webp";

import linkedinLight from "@/app/assets/linkedin-light.webp";
import linkedinDark from "@/app/assets/linkedin-dark.webp";

import githubLight from "@/app/assets/github-light.webp";
import githubDark from "@/app/assets/github-dark.webp";

import emailLight from "@/app/assets/email-light.webp";
import emailDark from "@/app/assets/email-dark.webp";

import profilePicLight from "@/app/assets/profile-photo-light.webp";
import profilePicDark from "@/app/assets/profile-photo-dark.webp";

const sectionItems = [
    [
      {
        name: "Fullstack Software Engineer",
        imagePathLight: fullstackLight.src,
        imagePathDark: fullstackDark.src,
        description: [
          "Skilled in building fullstack web applications with JavaScript, Node.js, React, Python, and Ruby on Rails.",
          "Experienced in designing robust, maintainable software architectures.",
          "Strong focus on delivering secure, compliant solutions in regulated industries.",
        ],
      },
      {
        name: "Cloud / API Architect",
        imagePathLight: cloudLight.src,
        imagePathDark: cloudDark.src,
        description: [
          "Expert in designing scalable cloud infrastructure on AWS, Azure and GCP.",
          "Developed and implemented enterprise cloud patterns and microservices frameworks.",
          "Detailed, integrated designs delivered for many different types of business use cases.",
        ],
      },
      {
        name: "Cybersecurity Analyst",
        imagePathLight: cyberLight.src,
        imagePathDark: cyberDark.src,
        description: [
          "Specialized in risk assessments, control frameworks, detections and response.",
          "Led threat assessments using MITRE ATT&CK, enhancing proactive security.",
          "Implemented DevSecOps processes, aligning systems with NIST 800-53 standards.",
        ],
      },
      {
        name: "Technical Delivery Lead",
        imagePathLight: techLeadLight.src,
        imagePathDark: techLeadDark.src,
        description: [
          "Led technical programs from concept to delivery completion using agile methods.",
          "Managed full E2E migration to Kong API gateways, with massive benefits.",
          "Secure site decommissioning, private cloud migrations & cloud environment establishment.",
        ],
      },
    ],
    [
      {
        name: "",
        imagePathLight: profilePicLight.src,
        imagePathDark: profilePicDark.src,
        description: [""],
        imageOpacity: 1,
      },
      {
        name: "Diverse Experience",
        imagePathLight: diverseExperienceLight.src,
        imagePathDark: diverseExperienceDark.src,
        description: [
          "I’ve worked in regulated industries across operations, customer service, product, and technology, thriving in both client-side and consulting roles.",
          "Based in Melbourne, I’m passionate about exploring the latest in tech and science, always seeking to understand the world from new perspectives.",
        ],
      },
      {
        name: "Lifelong Learner",
        imagePathLight: lifelongLearnerLight.src,
        imagePathDark: lifelongLearnerDark.src,
        description: [
          "I completed a BSc. (hons) degree while working full-time, demonstrating my commitment to continuous learning and personal growth.",
          "I have achieved advanced certifications in AWS and Azure and am always looking for new ways to expand my skills and knowledge.",
        ],
      },
    ],
    [
      {
        name: "E-commerce Frontend",
        imagePathLight: ecommProjectLight.src,
        imagePathDark: ecommProjectDark.src,
        description: ["Coming soon",
          "Developed a responsive, feature-rich e-commerce frontend using Vite and Tailwind CSS, integrated with Shopify's API for seamless product management and user interaction.",
        ],
      },
      {
        name: "Serverless Image Processing",
        imagePathLight: imageProjectLight.src,
        imagePathDark: imageProjectDark.src,
        description: ["Coming soon",
          "Built a serverless image processing service that dynamically resizes and applies steganography on images across AWS, GCP, and Azure, with centralized logging and DNS-based load balancing for high availability.",
        ],
      },
      {
        name: "API Gateway Custom Plugin",
        imagePathLight: gatewayProjectLight.src,
        imagePathDark: gatewayProjectDark.src,
        description: ["Coming soon",
          "Created a custom Kong plugin to anonymize sensitive data in API request bodies, integrate with Google DLP for enhanced data protection, and support flexible logging to Splunk, Datadog, or S3.",
        ],
      },
      {
        name:"DevSecOps Implementation",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
            "Implementation of an enterprise-grade DevSecOps model, integrating security tools, automated testing, monitoring and CI/CD pipelines into continuous risk and security assessment.","Fundamental increase in transparency and cross-team collaboration, without impacts to release velocity."
        ]
      },
      {
        name:"NIST 800-53 Controls Validations / Audits",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
            "Led validation and audit efforts for NIST 800-53 security compliance across critical systems. Mapping granular technical implementations to low-level control requirements.", "Established an independently audited baseline, with no material gaps for ongoing assurance."
        ]
      },
      {
        name: "Enterprise API Gateway Migration",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Led and E2E managed the migration of all of the organisation’s APIs from an insecure end of life solution to a cloud native, fault tolerant, DevSecOps integrated Kong API gateway enterprise API gateway. Achieved a seamless transition with a 99.9% uptime during migration and a 50% rationalisation / simplification of APIs.",
        ],
      },
      {
        name: "API Patterns and Standards",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Created a comprehensive set of strategic API design patterns for REST, GraphQL, and microservices architecture, integrated with enterprise IAM (Active Directory). Enhanced developer productivity by 25% and improved API security and maintainability. Facilitated adoption through workshops/roadshows and technical documentation.",
        ],
      },
      {
        name: "Enterprise Cloud Environment Design",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Led the design and implementation of regulated industry cloud environments for material use in AWS and GCP, with extensive Microsoft integrations and a focus on security, scalability, and cost-efficiency to support various workloads and compliance needs. Laid the foundations for the organisation’s cloud ambitions.",
        ],
      },
      {
        name: "Cloud Security Enhancements",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Implemented robust security measures across cloud environments, ensuring compliance with industry standards.", "Introduced automated detection and response for cloud threats.", "Conducted regular security reviews, improving overall cloud security posture.",
        ],
      },
      {
        name: "Quantum Computing Special Interest Group",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Initiated a quantum computing special interest group, working with PhD qualified colleagues to make quantum accessible and generate awareness, use cases and quantum innovation. This looked at quantum annealing, quantum computing, and quantum cryptography.",
        ],
      },
      {
        name: "Legacy App Modernisation and Migration",
          //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Led and managed end-to-end modernisation of a nationally critical legacy system, requiring extensive upgrades and migration from a local area network to a private cloud, with no service disruption. Significant security enhancements and ensured zero data loss during migration with robust backup strategies.",
        ],
      },
      {
        name: "Government Secure Site Decommissioning",
           //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Led and E2E managed the secure decommissioning of a government site used for high volume printing that in volume citizen personal data, managing data archival, infrastructure dismantling, and secure disposal of assets and network connectivity.",
        ],
      },
      {
        name: "Business Lending FinTech Partnership",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Enabled a strategic partnership with a FinTech provider to launch digital lending solutions for SMBs.", "Integrated APIs for loan origination, scoring, and funding processes, leading on KYC integration design.",
        ],
      },
      {
        name: "Roboadvice for Investments Sandbox",
         //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Created an experimental roboadvice solution for retail investment scenarios, working with a specialist vendor and a regulatory sandbox.", "Enabled real-time testing with simulated data and regulatory constraints.",
        ],
      },
      {
        name: "Complex Financial Modelling (Retail Banking)",
         //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Designed and implemented complex financial models for retail banking use, covering credit risk, portfolio optimisation, and profitability analysis for the financial plan for a large bank branch network, including full product lifecycle for all products.",
        ],
      },
      {
        name: "AI/ML Integration for Operational Efficiency",
        //imagePathLight: gatewayProjectLight.src,
        //imagePathDark: gatewayProjectDark.src,
        description: [
          "Led the experimentation and use case development of AI/ML solutions to improve operational efficiency and decision-making across various operations. Deployed predictive models for customer behavior analysis and scoring for fraud prevention.",
        ],
      }
    ],
    [
      {
        name: "GitHub",
        imagePathLight: githubLight.src,
        imagePathDark: githubDark.src,
        description: ["https://github.com/thomas-r-wills"],
        link: {
          linkText: "Go to GitHub",
          linkUrl: "https://github.com/thomas-r-wills",
        },
      },
      {
        name: "LinkedIn",
        imagePathLight: linkedinLight.src,
        imagePathDark: linkedinDark.src,
        description: ["https://www.linkedin.com/in/tomwills0001"],
        link: {
          linkText: "Go to LinkedIn",
          linkUrl: "https://www.linkedin.com/in/tomwills0001",
        },
      },
      {
        name: "Email",
        imagePathLight: emailLight.src,
        imagePathDark: emailDark.src,
        description: ["tw8307542@gmail.com"],
        link: {
          linkText: "Email me",
          linkUrl: "mailto:tw8307542@gmail.comm",
        },
      },
    ],
  ];

  export default sectionItems;