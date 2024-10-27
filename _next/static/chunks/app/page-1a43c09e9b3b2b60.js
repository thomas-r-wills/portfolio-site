(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6660:(e,t,i)=>{Promise.resolve().then(i.bind(i,5557))},551:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let a=i(9920)._(i(148));function n(e,t){var i;let n={};"function"==typeof e&&(n.loader=e);let r={...n,...t};return(0,a.default)({...r,modules:null==(i=r.loadableGenerated)?void 0:i.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let a=i(5592);function n(e){let{reason:t,children:i}=e;if("undefined"==typeof window)throw new a.BailoutToCSRError(t);return i}},148:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=i(7437),n=i(2265),r=i(912),o=i(5025);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},i=(0,n.lazy)(()=>t.loader().then(s)),c=t.loading;function d(e){let s=c?(0,a.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=!t.ssr||!!t.loading,d=l?n.Suspense:n.Fragment,m=t.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,a.jsx)(i,{...e})]}):(0,a.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(i,{...e})});return(0,a.jsx)(d,{...l?{fallback:s}:{},children:m})}return d.displayName="LoadableComponent",d}},5025:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return s}});let a=i(7437),n=i(4887),r=i(8011),o=i(5759);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let i=r.workAsyncStorage.getStore();if(void 0===i)return null;let s=[];if(i.reactLoadableManifest&&t){let e=i.reactLoadableManifest;for(let i of t){if(!e[i])continue;let t=e[i].files;s.push(...t)}}return 0===s.length?null:(0,a.jsx)(a.Fragment,{children:s.map(e=>{let t=i.assetPrefix+"/_next/"+(0,o.encodeURIPath)(e);return e.endsWith(".css")?(0,a.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,n.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},5557:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f});var a=i(7437),n=i(2265),r=i(551),o=i.n(r);let s=[[{name:"Fullstack Software Engineer",imagePathLight:"/_next/static/media/fullstack-engineer-light.533c907e.webp",imagePathDark:"/_next/static/media/fullstack-engineer-dark.72db1db3.webp",description:["Skilled in building fullstack web applications with JavaScript, Node.js, React, Python, and Ruby on Rails.","Experienced in designing robust, maintainable software architectures.","Strong focus on delivering secure, compliant solutions in regulated industries."]},{name:"Cloud / API Architect",imagePathLight:"/_next/static/media/cloud-architect-light.5a05f41b.webp",imagePathDark:"/_next/static/media/cloud-architect-dark.61ccb7ba.webp",description:["Expert in designing scalable cloud infrastructure on AWS, Azure and GCP.","Developed and implemented enterprise cloud patterns and microservices frameworks.","Detailed, integrated designs delivered for many different types of business use cases."]},{name:"Cybersecurity Analyst",imagePathLight:"/_next/static/media/cyber-analyst-light.0bcf27a9.webp",imagePathDark:"/_next/static/media/cyber-analyst-dark.f9b8a368.webp",description:["Specialized in risk assessments, control frameworks, detections and response.","Led threat assessments using MITRE ATT&CK, enhancing proactive security.","Implemented DevSecOps processes, aligning systems with NIST 800-53 standards."]},{name:"Technical Delivery Lead",imagePathLight:"/_next/static/media/technical-lead-light.d4be2d60.webp",imagePathDark:"/_next/static/media/technical-lead-dark.fb309a4a.webp",description:["Led technical programs from concept to delivery completion using agile methods.","Managed full E2E migration to Kong API gateways, with massive benefits.","Secure site decommissioning, private cloud migrations & cloud environment establishment."]}],[{name:"",imagePathLight:"/_next/static/media/profile-photo-light.77fd9cf9.webp",imagePathDark:"/_next/static/media/profile-photo-dark.7de51368.webp",description:[""],imageOpacity:1},{name:"Diverse Experience",imagePathLight:"/_next/static/media/diverse-experience-light.51c3c203.webp",imagePathDark:"/_next/static/media/diverse-experience-dark.2e26664d.webp",description:["I’ve worked in regulated industries across operations, customer service, product, and technology, thriving in both client-side and consulting roles.","Based in Melbourne, I’m passionate about exploring the latest in tech and science, always seeking to understand the world from new perspectives."]},{name:"Lifelong Learner",imagePathLight:"/_next/static/media/lifelong-learner-light.11d894de.webp",imagePathDark:"/_next/static/media/lifelong-learner-dark.f7f859ca.webp",description:["I completed a BSc. (hons) degree while working full-time, demonstrating my commitment to continuous learning and personal growth.","I have achieved advanced certifications in AWS and Azure and am always looking for new ways to expand my skills and knowledge."]}],[{name:"E-commerce Frontend",imagePathLight:"/_next/static/media/ecomm-project-light.9339cc23.webp",imagePathDark:"/_next/static/media/ecomm-project-dark.f9c014c7.webp",description:["Coming soon","Developed a responsive, feature-rich e-commerce frontend using Vite and Tailwind CSS, integrated with Shopify's API for seamless product management and user interaction."]},{name:"Serverless Image Processing",imagePathLight:"/_next/static/media/image-project-light.e871eb2f.webp",imagePathDark:"/_next/static/media/image-project-dark.ec4883a4.webp",description:["Coming soon","Built a serverless image processing service that dynamically resizes and applies steganography on images across AWS, GCP, and Azure, with centralized logging and DNS-based load balancing for high availability."]},{name:"API Gateway Custom Plugin",imagePathLight:"/_next/static/media/gateway-project-light.3489d5dd.webp",imagePathDark:"/_next/static/media/gateway-project-dark.f6ca16b2.webp",description:["Coming soon","Created a custom Kong plugin to anonymize sensitive data in API request bodies, integrate with Google DLP for enhanced data protection, and support flexible logging to Splunk, Datadog, or S3."]},{name:"DevSecOps Implementation",description:["Implementation of an enterprise-grade DevSecOps model, integrating security tools, automated testing, monitoring and CI/CD pipelines into continuous risk and security assessment.","Fundamental increase in transparency and cross-team collaboration, without impacts to release velocity."]},{name:"NIST 800-53 Controls Validations / Audits",description:["Led validation and audit efforts for NIST 800-53 security compliance across critical systems. Mapping granular technical implementations to low-level control requirements.","Established an independently audited baseline, with no material gaps for ongoing assurance."]},{name:"Enterprise API Gateway Migration",description:["Led and E2E managed the migration of all of the organisation’s APIs from an insecure end of life solution to a cloud native, fault tolerant, DevSecOps integrated Kong API gateway enterprise API gateway. Achieved a seamless transition with a 99.9% uptime during migration and a 50% rationalisation / simplification of APIs."]},{name:"API Patterns and Standards",description:["Created a comprehensive set of strategic API design patterns for REST, GraphQL, and microservices architecture, integrated with enterprise IAM (Active Directory). Enhanced developer productivity by 25% and improved API security and maintainability. Facilitated adoption through workshops/roadshows and technical documentation."]},{name:"Enterprise Cloud Environment Design",description:["Led the design and implementation of regulated industry cloud environments for material use in AWS and GCP, with extensive Microsoft integrations and a focus on security, scalability, and cost-efficiency to support various workloads and compliance needs. Laid the foundations for the organisation’s cloud ambitions."]},{name:"Cloud Security Enhancements",description:["Implemented robust security measures across cloud environments, ensuring compliance with industry standards.","Introduced automated detection and response for cloud threats.","Conducted regular security reviews, improving overall cloud security posture."]},{name:"Quantum Computing Special Interest Group",description:["Initiated a quantum computing special interest group, working with PhD qualified colleagues to make quantum accessible and generate awareness, use cases and quantum innovation. This looked at quantum annealing, quantum computing, and quantum cryptography."]},{name:"Legacy App Modernisation and Migration",description:["Led and managed end-to-end modernisation of a nationally critical legacy system, requiring extensive upgrades and migration from a local area network to a private cloud, with no service disruption. Significant security enhancements and ensured zero data loss during migration with robust backup strategies."]},{name:"Government Secure Site Decommissioning",description:["Led and E2E managed the secure decommissioning of a government site used for high volume printing that in volume citizen personal data, managing data archival, infrastructure dismantling, and secure disposal of assets and network connectivity."]},{name:"Business Lending FinTech Partnership",description:["Enabled a strategic partnership with a FinTech provider to launch digital lending solutions for SMBs.","Integrated APIs for loan origination, scoring, and funding processes, leading on KYC integration design."]},{name:"Roboadvice for Investments Sandbox",description:["Created an experimental roboadvice solution for retail investment scenarios, working with a specialist vendor and a regulatory sandbox.","Enabled real-time testing with simulated data and regulatory constraints."]},{name:"Complex Financial Modelling (Retail Banking)",description:["Designed and implemented complex financial models for retail banking use, covering credit risk, portfolio optimisation, and profitability analysis for the financial plan for a large bank branch network, including full product lifecycle for all products."]},{name:"AI/ML Integration for Operational Efficiency",description:["Led the experimentation and use case development of AI/ML solutions to improve operational efficiency and decision-making across various operations. Deployed predictive models for customer behavior analysis and scoring for fraud prevention."]}],[{name:"GitHub",imagePathLight:"/_next/static/media/github-light.e94db680.webp",imagePathDark:"/_next/static/media/github-dark.7a80d683.webp",description:["https://github.com/thomas-r-wills"],link:{linkText:"Go to GitHub",linkUrl:"https://github.com/thomas-r-wills"}},{name:"LinkedIn",imagePathLight:"/_next/static/media/linkedin-light.9b7bfd66.webp",imagePathDark:"/_next/static/media/linkedin-dark.6a7776b4.webp",description:["https://www.linkedin.com/in/tomwills0001"],link:{linkText:"Go to LinkedIn",linkUrl:"https://www.linkedin.com/in/tomwills0001"}},{name:"Email",imagePathLight:"/_next/static/media/email-light.fa2d6aac.webp",imagePathDark:"/_next/static/media/email-dark.765bb809.webp",description:["tw8307542@gmail.com"],link:{linkText:"Email me",linkUrl:"mailto:tw8307542@gmail.comm"}}]],l=[{x:0,y:0},{x:30,y:0},{x:30,y:8},{x:0,y:8}],c=[0,2,6,8],d=[{x:0,y:0},{x:15,y:0},{x:30,y:0},{x:30,y:2},{x:30,y:4},{x:30,y:6},{x:30,y:8},{x:15,y:8},{x:0,y:8},{x:0,y:6},{x:0,y:4},{x:0,y:2}],m=["resume","about-me","projects","contact-me"],u=[{id:"resume",title:"Resume",items:s[0]},{id:"about-me",title:"About me",items:s[1]},{id:"projects",title:"Projects",items:s[2]},{id:"contact-me",title:"Contact me",items:s[3]}],g=(e,t,i,a)=>{let n=Math.min(i/a,1);return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n}},h=(e,t)=>[t?"bg-indigo-700 hover:bg-indigo-300 text-gray-200 hover:text-black":"bg-indigo-200 hover:bg-indigo-600 text-gray-900 hover:text-white",t?"bg-lime-800 hover:bg-lime-300 text-gray-200 hover:text-black":"bg-lime-200 hover:bg-lime-700 text-gray-900 hover:text-white",t?"bg-sky-800 hover:bg-sky-300 text-gray-200 hover:text-black":"bg-sky-200 hover:bg-sky-700 text-gray-900 hover:text-white",t?"bg-orange-800 hover:bg-orange-300 text-gray-200 hover:text-black":"bg-orange-200 hover:bg-orange-700 text-gray-900 hover:text-white"][e],p=o()(()=>i.e(605).then(i.bind(i,8605)),{loadableGenerated:{webpack:()=>[8605]},ssr:!1});function f(){let[e,t]=(0,n.useState)(l),[i,r]=(0,n.useState)([[!1,!1,!1,!1],[!1,!1,!1],[!1,!1,!1],[!1,!1]]),[o,s]=(0,n.useState)(!1),[f,b]=(0,n.useState)(!1),[x,y]=(0,n.useState)(!1),[w,v]=(0,n.useState)(!1),[k,j]=(0,n.useState)(0),P=(0,n.useRef)(null),S=(0,n.useRef)(c),I=(0,n.useRef)(0),L=(0,n.useRef)(null),_=(0,n.useRef)(null),C=()=>s(!o),A=()=>{let e=window.innerWidth<960;y(e),e||(t(l),S.current=c)},D=()=>{P.current||(P.current=window.requestAnimationFrame(()=>{v(window.scrollY>80),P.current=null}))},N=e=>{_.current||(_.current=e);let i=e-_.current,a=I.current,n=3===a?0:a+1,r=d[S.current[a]],o=d[(S.current[a]+1)%d.length];i<1500?t(e=>{let t=[...e];return t[a]=g(r,o,i,1500),t}):(S.current[a]=(S.current[a]+1)%d.length,t(e=>{let t=[...e];return t[a]=d[S.current[a]],t}),(S.current[a]===S.current[n]-1||11===S.current[a]&&0===S.current[n])&&(I.current=n),_.current=e),L.current=requestAnimationFrame(N)},M=e=>{let t=document.getElementById(e);if(t){let i=t.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:i-120,behavior:"smooth"}),history.pushState(null,"","#".concat(e))}},E=(e,t)=>{let a=[...i];a[e][t]=!a[e][t],r(a)},T=e=>{j(e)};return((0,n.useEffect)(()=>{if(b(!0),A(),window.addEventListener("resize",A),!x){let e=setTimeout(()=>{_.current=performance.now(),L.current=requestAnimationFrame(N)},4e3);return()=>{clearTimeout(e),L.current&&cancelAnimationFrame(L.current)}}return()=>{window.removeEventListener("resize",A)}},[x]),(0,n.useEffect)(()=>(window.addEventListener("scroll",D),()=>{window.removeEventListener("scroll",D)}),[w]),f)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{className:"flex justify-between ".concat(o?"bg-gray-900":"bg-gray-50"," ").concat(x?"fixed w-full top-0 z-50":"fixed w-full top-0 bg-opacity-80 p-8 backdrop-blur-sm z-50"),children:(0,a.jsxs)("nav",{className:"flex justify-between w-full","aria-label":"Main navigation",children:[x?(0,a.jsxs)("div",{className:"flex flex-wrap w-full backdrop-blur-md text-center transition-opacity duration-500",children:[(0,a.jsx)("div",{className:"flex items-center justify-center ".concat(o?"bg-gray-900":"bg-gray-50"," h-10 w-6/12"),"aria-label":o?"Switch to Light Mode":"Switch to Dark Mode",children:(0,a.jsx)("h1",{className:"text-m font-bold ".concat(o?"text-gray-200":"text-zinc-600"),children:"Thomas Wills"})}),(0,a.jsx)("div",{onClick:C,className:"flex items-center justify-center ".concat(o?"bg-gray-700":"bg-gray-300"," h-10 w-1/2"),"aria-label":o?"Switch to Light Mode":"Switch to Dark Mode",children:(0,a.jsx)("h1",{className:"text-sm ".concat(o?"text-gray-200":"text-zinc-600"),children:o?"Light Mode":"Dark Mode"})}),e.map((e,t)=>(0,a.jsx)("div",{onClick:()=>{T(t),console.log("clicked and activeMobileSection is ".concat(k))},className:" w-1/2 h-10 flex items-center justify-center ".concat(h(t,o)),"aria-label":"Go to ".concat(m[t]),children:(0,a.jsx)("h1",{className:"text-sm",children:0===t?"Resume":1===t?"About me":2===t?"Projects":"Contact me"})},"header-box-content-display-".concat(t)))]}):(0,a.jsx)("h1",{className:"text-5xl ".concat(x?"pl-4 my-4":""," ").concat(o?"text-gray-200":"text-zinc-600"),children:"Thomas Wills"}),!x&&(0,a.jsxs)("div",{className:"flex justify-between gap-4",children:[w&&e.map((e,t)=>(0,a.jsx)("a",{href:m[t],onClick:e=>{e.preventDefault(),M(m[t])},className:"rounded w-[10rem] h-12 flex items-center justify-center ".concat(h(t,o)),"aria-label":"Go to ".concat(m[t]),children:(0,a.jsx)("h1",{className:"text-sm",children:0===t?"Resume":1===t?"About me":2===t?"Projects":"Contact me"})},"header-box-links-".concat(t))),(0,a.jsx)("button",{onClick:C,className:"p-2 bg-gray-300 dark:bg-gray-700 rounded-md text-sm","aria-label":o?"Switch to Light Mode":"Switch to Dark Mode",children:o?"Light Mode":"Dark Mode"})]})]})}),(0,a.jsxs)("div",{className:"min-h-screen w-full flex flex-col justify-center items-center ".concat(o?"bg-gray-900":"bg-gray-50"," transition-opacity duration-500"),children:[x?null:(0,a.jsx)("div",{className:"w-5/6 flex justify-center ".concat(!x&&"mt-32"),children:(0,a.jsxs)("div",{className:"h-[13rem] w-[45rem] relative",children:[(0,a.jsx)("div",{className:"m-10 border-zinc-400 rounded-2xl border-4 h-[8.25rem] w-[40rem] opacity-0 animate-fadeIn"}),e.map((e,t)=>(0,a.jsx)("a",{href:m[t],onClick:e=>{e.preventDefault(),M(m[t])},style:{transform:"translate(".concat(e.x,"rem, ").concat(e.y,"rem)")},className:"absolute top-6 left-0 rounded w-60 h-8 flex items-center justify-center ".concat(h(t,o)),children:(0,a.jsx)("h1",{className:"text-2xl",children:0===t?"Resume":1===t?"About me":2===t?"Projects":"Contact me"})},"animation-boxes-".concat(t)))]})}),x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(p,{id:u[k].id,title:u[k].title,sectionIndex:k,sectionItems:u[k].items,isDarkMode:o,cardStateArray:i,handleFlip:E},u[k].id)}):u.map((e,t)=>(0,a.jsx)(p,{id:e.id,title:e.title,sectionIndex:t,sectionItems:e.items,isDarkMode:o,cardStateArray:i,handleFlip:E},e.id))]}),(0,a.jsx)("footer",{className:"py-6  ".concat(o?"bg-gray-800 text-white":"bg-gray-300 text-gray-900"),"data-testid":"footer-section",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 text-center space-y-4",children:[(0,a.jsxs)("p",{className:"text-sm",children:["\xa9 Thomas Wills 2024. Source code available under the\xa0",(0,a.jsx)("a",{href:"https://opensource.org/licenses/MIT",className:"hover:underline font-bold ".concat(o?"text-blue-300":"text-blue-700"),target:"_blank",rel:"noopener noreferrer",children:"MIT License"}),"."]}),(0,a.jsx)("p",{className:"text-sm",children:"This website does not collect personal data."}),(0,a.jsx)("p",{className:"text-sm",children:"This website and its content are provided for informational purposes only. By using this site, you agree not to copy, distribute, or alter content without permission. The source code is available under the MIT License, allowing for free use, modification, and distribution, provided the original copyright notice and license are included in all copies."}),(0,a.jsxs)("p",{className:"text-sm",children:["I am committed to making this website accessible to as many users as possible, regardless of technology or ability. If you encounter any issues, please reach out to\xa0",(0,a.jsx)("a",{href:"mailto:tw8307542@gmail.com",className:"hover:underline font-bold ".concat(o?"text-blue-300":"text-blue-700"),children:"tw8307542@gmail.com"}),"."]}),(0,a.jsxs)("p",{className:"text-sm",children:["Built using Next.js and TailwindCSS, with assistance from AI tools like ChatGPT and GitHub Copilot.\xa0",(0,a.jsx)("a",{href:"https://github.com/thomas-r-wills/portfolio-site ",className:"hover:underline font-bold ".concat(o?"text-blue-300":"text-blue-700"),target:"_blank",rel:"noopener noreferrer",children:"View source code on GitHub"}),"."]})]})})]}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[130,215,744],()=>t(6660)),_N_E=e.O()}]);
//# sourceMappingURL=page-1a43c09e9b3b2b60.js.map