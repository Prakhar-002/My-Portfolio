# Nextfolio ➺ Crafted with Passion & Precision

A sleek, responsive portfolio built with `Next.js` ⚛️, `Tailwind CSS` 💨, and `Framer Motion` 🎞️. Showcasing projects 📂, skills 🧠, and awards 🏆 in a modern layout.

<br/>

<h1 align="center"> 

<a href="https://prakhar-002.vercel.app/"><strong> ➥ Nextfolio 🏕️</strong></a>
</h1>

<br/>

![Nextfolio](https://github.com/user-attachments/assets/33b0454e-217e-43bb-8a4b-88013b417d74)

<br/>

# 💻 Tech Stack ⛅️🏞️

![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge) &nbsp; ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
&nbsp; ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge) &nbsp; ![Framer Badge](https://img.shields.io/badge/Framer-05F?logo=framer&logoColor=fff&style=for-the-badge) &nbsp; ![Swiper Badge](https://img.shields.io/badge/Swiper-6332F6?logo=swiper&logoColor=fff&style=for-the-badge) &nbsp; ![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=for-the-badge) &nbsp; ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)

</br>

# Features 🍂🧸

- 💡 Built with **Next.js 13 App Router**
- 🎨 Styled using **Tailwind CSS**
- 🌀 Smooth animations using **Framer Motion**
- 📊 Animated counters with **React CountUp**
- 🔁 Interactive sliders using **Swiper**
- 🌌 Dynamic particle effects via **tsparticles**
- 🧠 Organized, scalable project structure
- ⚙️ Custom scrollbar with `tailwind-scrollbar`

</br>

# Tech Used 👩🏻‍💻🤖

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [SwiperJS](https://swiperjs.com/)
- **Particles**: [tsparticles](https://particles.js.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Scrolling**: [tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar)

<br/>

# Installation Guide 🚀

## Clone 🏗️ the repository 🔍

### `For Windows` 🖥️

```bash
git clone https://github.com/Prakhar-002/My-Portfolio
cd My-Portfolio
```

### `For Linux and macOS` 🍏

```bash
git clone https://github.com/Prakhar-002/My-Portfolio
cd My-Portfolio
```

## Install 📥 dependencies 📦

```bash
npm install
```

## Start ▶️ the application 🚀

```bash
npm run dev
```

## 🌍 Access the app in your browser at ➡️ 

🔗 [http://localhost:3000](http://localhost:3000)

<br/>

# 📁 Folder Structure


        📦 NEXT-PORTFOLIO/
            │
            ├── 🗂️ components               🔸 Reusable and animated UI components
            │   │
            │   ├── 📑 Avatar.js                    ⚛️ Avatar image with animation
            │   ├── 📑 Bulb.js                      ⚛️ Background bulb light animation
            │   ├── 📑 Circles.js                   ⚛️ Decorative circle animations
            │   ├── 📑 Header.js                    ⚛️ Top navigation bar
            │   ├── 📑 Layout.js                    ⚛️ Main layout wrapper
            │   ├── 📑 Nav.js                       ⚛️ Sidebar / Bottom navigation
            │   ├── 📑 ParticlesContainer.js        ⚛️ Animated particles background using tsParticles
            │   ├── 📑 ProjectsBtn.js               ⚛️ Custom project call-to-action button
            │   ├── 📑 ServiceSlider.js             ⚛️ Slider showcasing services with motion
            │   ├── 📑 Socials.js                   ⚛️ Social media icon list
            │   ├── 📑 TestimonialSlider.js         ⚛️ Testimonial slider component
            │   ├── 📑 TopLeftImg.js                ⚛️ Decorative top-left image
            │   ├── 📑 Transition.js                ⚛️ Page transition animations
            │   └── 📑 WorkSlider.js                ⚛️ Project showcase carousel
            │
            │
            ├── 🗂️ pages                    🔸 Next.js route pages
            │   │
            │   ├── 🗂️ about/
            |   |   |
            │   │   └── 📑 index.js                 📄 About section route
            │   │
            │   ├── 🗂️ contact/
            |   |   |
            │   │   └── 📑 index.js                 📄 Contact form page
            │   │
            │   ├── 🗂️ services/
            |   |   |
            │   │   └── 📑 index.js                 📄 Services offered
            │   │
            │   ├── 🗂️ testimonials/
            |   |   |
            │   │   └── 📑 index.js                 📄 Client testimonials
            │   │
            │   ├── 🗂️ work/
            |   |   |
            │   │   └── 📑 index.js                 📄 Project showcase
            │   │
            │   ├── 📑 _app.js                      ⚙️ Root-level component to wrap all pages
            │   └── 📑 index.js                     🏠 Homepage
            │
            │
            ├── 🗂️ public                  🔸 Static assets served directly
            │   └── 🖼️ (images, icons, animations)   🖼️ Accessible via `/public` path
            │
            │
            ├── 🗂️ styles                  🔸 Global styles
            │   └── 📑 globals.css                  🎨 TailwindCSS + custom global styles
            │
            ├── 📑 variants.js                     🔁 Motion animation variants
            │
            ├── 📑 .eslintrc.json                  🧹 ESLint config for consistent formatting
            ├── 📑 .gitignore                      🚫 Ignored files in version control
            ├── 📑 next.config.js                  ⚙️ Next.js config settings
            ├── 📑 package.json                    📦 Project dependencies and metadata
            ├── 📑 package-lock.json               🔒 Dependency lockfile
            ├── 📑 postcss.config.js               🛠️ PostCSS plugin config
            ├── 📑 tailwind.config.js              🌬️ TailwindCSS configuration
            |
            └── 📑 README.md                       📘 Project documentation
