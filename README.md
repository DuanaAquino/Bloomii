🌸 Bloomii - Avatar Maker (Front-End Project)

  <img width="600" height="auto" alt="preview1" src="https://github.com/user-attachments/assets/4ccbcea2-483c-4294-a3bf-2949ff4ea8ad" />

Bloomii is an interactive avatar builder developed with a strong focus on front-end engineering principles such as component-based UI logic, state management, and responsive design.

The application allows users to create fully customized pixel-style avatars and export them as images, combining real-time visual updates with a smooth and intuitive user experience.

🚀 Live Features
Real-time avatar customization with instant visual feedback
Modular UI system with multiple categories:
Hair (styles + dynamic colors)
Skin tones
Eye colors
Clothing (top, bottom, shoes)
Accessories
Dynamic color system powered by CSS filters
Image export to JPG using canvas rendering
Email notification system triggered on user interaction
Fully responsive layout (mobile-first → desktop scaling)

🎥 Demo

<img width="auto" height="400" alt="demo2" src="https://github.com/user-attachments/assets/9a3c2997-1cb2-42a8-bb23-5a56c034aa33" /> <br>
<img width="400" height="178" alt="demo1" src="https://github.com/user-attachments/assets/390732fb-c02c-4cff-8725-3c938a97b350" />   


🧠 Front-End Engineering Highlights
State Management (Vanilla JS)
Centralized state using objects like:
activeCategory
currentColourIndex
UI updates driven by state instead of hardcoded DOM changes
Component-Like Architecture
Clear separation of responsibilities:
setHair, setSkinColour, setEyesColour
updateElementColour
showCard
Reusable logic across multiple UI sections
Dynamic Rendering Strategy
Avatar built using layered <img> elements
Visual customization handled via:
CSS filters (color system)
Dynamic src swapping (assets)
Event-Driven UI
User interactions handled through:
Button click events
Category switching logic
Clean class toggling system (active, active-btn)
Canvas & Image Processing
DOM-to-image conversion using html2canvas
Export optimized to JPG format with controlled quality
Handles scaling for higher resolution output
Third-Party Integration
Email trigger via EmailJS
Sends user-generated content (avatar image) without backend


🛠️ Tech Stack
HTML5
CSS3 (Flexbox, Grid, Responsive Design)
Vanilla JavaScript (ES6+)
html2canvas
EmailJS


📱 Responsiveness
Mobile-first approach
Adaptive layout using:
Flexbox for flow-based sections
CSS Grid for structured layouts
Desktop optimization with media queries (min-width: 900px)


⚙️ Project Structure
/bloomii
│── index.html
│── style.css
│── bloomii.js
│── /images
│── /assets
📸 Core Functionality Flow
User selects a category (hair, skin, etc.)
UI updates active state and displays corresponding options
Selection triggers DOM updates (image layers / filters)
On download:
Avatar is rendered via canvas
Converted to JPG
Downloaded locally
Email notification is triggered


📧 Email Integration Setup

To enable email notifications:

Create an account on EmailJS
Add your Public Key:
emailjs.init("YOUR_PUBLIC_KEY");
In your template:
<img src="{{avatar_image}}" />


🎯 Future Improvements
Convert to React (component-based architecture)
Global state management (Context API or Zustand)
Avatar persistence (database / local storage)
Drag-and-drop customization
Performance optimization (lazy loading assets)
Accessibility improvements (ARIA, keyboard navigation)


💡 Key Learnings
Structuring scalable front-end logic without frameworks
Managing UI state and synchronization manually
Working with canvas for image generation
Integrating third-party APIs without backend support
Building responsive and interactive user interfaces


👩‍💻 Author

Duana Aquino
Front-End Developer focused on building interactive and user-centered experiences
