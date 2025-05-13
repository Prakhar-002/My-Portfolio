/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaBootstrap,
  FaNodeJs,
  FaMarkdown,
  FaJava,
  FaPython
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCloudinary,
  SiAppwrite,
  SiPrisma,
  SiNetlify,
  SiVercel,
  SiRender,
  SiNumpy,
  SiPandas,
  SiHoppscotch,
  SiPostman
} from "react-icons/si";


// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'


// counter
import CountUp from "react-countup";


// 📦 Export data objects
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 key="Frontend-0" className="text-orange-600" />,
          <FaCss3 key="Frontend-1" className="text-blue-600" />,
          <FaJs key="Frontend-2" className="text-yellow-400" />,
          <SiTypescript key="Frontend-3" className="text-blue-500" />,
          <FaReact key="Frontend-4" className="text-cyan-400" />,
          <SiNextdotjs key="Frontend-5" className="text-black dark:text-white" />,
          <FaBootstrap key="Frontend-6" className="text-purple-600" />,
          <SiTailwindcss key="Frontend-7" className="text-sky-400" />,
          <SiFramer key="Frontend-8" className="text-pink-500" />,
          <FaMarkdown key="Frontend-9" className="text-gray-600" />
        ]
      },
      {
        title: 'Backend & Database',
        icons: [
          <FaNodeJs key="Backend-0" className="text-green-600" />,
          <SiExpress key="Backend-1" className="text-gray-800 dark:text-white" />,
          <SiPrisma key="Backend-2" className="text-indigo-600" />,
          <SiMongodb key="Backend-3" className="text-green-700" />,
          <SiMysql key="Backend-4" className="text-blue-700" />
        ],
      },
      {
        title: 'Deployment & Tools',
        icons: [
          <FaGithub key="Tools-0" className="text-gray-800 dark:text-white" />,
          <SiCloudinary key="Tools-1" className="text-blue-400" />,
          <SiAppwrite key="Tools-2" className="text-pink-600" />,
          <SiNetlify key="Tools-3" className="text-cyan-600" />,
          <SiVercel key="Tools-4" className="text-black dark:text-white" />,
          <SiRender key="Tools-5" className="text-indigo-400" />,
          <SiHoppscotch key="Tools-6" className="text-rose-500" />,
          <SiPostman key="Tools-7" className="text-orange-500" />
        ]
      },
      {
        title: 'Programming & Data',
        icons: [
          <FaJava key="Prog-0" className="text-red-600" />,
          <FaPython key="Prog-1" className="text-blue-400" />,
          <SiNumpy key="Prog-2" className="text-violet-500" />,
          <SiPandas key="Prog-3" className="text-blue-800" />
        ]
      },
    ]
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Top 0.5% LeetCode Global Rank',
        stage: '2025'
      },
      {
        title: '1000+ Days LeetCode Questions',
        stage: '2024 - Present'
      },
      {
        title: 'Java Excellence Award – Great Learning',
        stage: '2024'
      },
      {
        title: '365 Days LeetCode Streak Badge',
        stage: '2024 - Present'
      },
    ]
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full-Stack Developer – Freelance & Personal Projects',
        stage: '2023 – Present',
      },
      {
        title: '1000+ Days LeetCode Questions',
        stage: '2024 - Present'
      },
      {
        title: 'React.js and Next.js Monster Course – 100+ Projects',
        stage: '2025 – Present',
      },
      {
        title: 'Open Source Contributor – GitHub & Dev Community',
        stage: '2024 – Present',
      }
    ]
  },
  {
    title: 'credentials',
    info: [
      { title: 'Certified Web Development - Apna College', stage: '2024' },
      { title: 'Database Management System - Infosys', stage: '2024' },
      { title: 'Java Certified - Apna College & Great Leaning', stage: '2023' },
    ]
  }
];


// bigScreen data
export const bigScreenAboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Dev',
        icons: [
          <FaHtml5 key="WebDev-0" className="text-orange-600" />,
          <FaCss3 key="WebDev-1" className="text-blue-600" />,
          <FaJs key="WebDev-2" className="text-yellow-400" />,
          <SiTypescript key="WebDev-3" className="text-blue-500" />,
          <FaReact key="WebDev-4" className="text-cyan-400" />,
          <SiNextdotjs key="WebDev-5" className="text-black dark:text-white" />,
          <FaBootstrap key="WebDev-6" className="text-purple-600" />,
          <SiTailwindcss key="WebDev-7" className="text-sky-400" />,
          <SiFramer key="WebDev-8" className="text-pink-500" />,
          <FaMarkdown key="WebDev-9" className="text-gray-600" />
        ]
      },
      {
        title: 'Backend & API',
        icons: [
          <FaNodeJs key="BackendAPI-0" className="text-green-600" />,
          <SiExpress key="BackendAPI-1" className="text-gray-800 dark:text-white" />,
          <SiPrisma key="BackendAPI-2" className="text-indigo-600" />
        ]
      },
      {
        title: 'Databases',
        icons: [
          <SiMongodb key="DB-0" className="text-green-700" />,
          <SiMysql key="DB-1" className="text-blue-700" />
        ]
      },
      {
        title: 'Deployment & Hosting',
        icons: [
          <FaGithub key="Deploy-0" className="text-gray-800 dark:text-white" />,
          <SiCloudinary key="Deploy-1" className="text-blue-400" />,
          <SiAppwrite key="Deploy-2" className="text-pink-600" />,
          <SiNetlify key="Deploy-3" className="text-cyan-600" />,
          <SiVercel key="Deploy-4" className="text-black dark:text-white" />,
          <SiRender key="Deploy-5" className="text-indigo-400" />
        ]
      },
      {
        title: 'API & Testing Tools',
        icons: [
          <SiHoppscotch key="API-0" className="text-rose-500" />,
          <SiPostman key="API-1" className="text-orange-500" />
        ]
      },
      {
        title: 'Programming & DSA',
        icons: [
          <FaJava key="DSA-0" className="text-red-600" />,
          <FaPython key="DSA-1" className="text-blue-400" />
        ]
      },
      {
        title: 'Data Science Libraries',
        icons: [
          <SiNumpy key="DSLib-0" className="text-violet-500" />,
          <SiPandas key="DSLib-1" className="text-blue-800" />
        ]
      }
    ]
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Top 0.5% LeetCode Global Rank',
        stage: '2025'
      },
      {
        title: '1000+ Days LeetCode Questions',
        stage: '2024 - Present'
      },
      {
        title: 'Java Excellence Award – Great Learning',
        stage: '2024'
      },
      {
        title: '365 Days LeetCode Streak Badge',
        stage: '2024 - Present'
      },
    ]
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full-Stack Developer – Freelance & Personal Projects',
        stage: '2023 – Present',
      },
      {
        title: '1000+ Days LeetCode Questions',
        stage: '2024 - Present'
      },
      {
        title: 'React.js and Next.js Monster Course – 100+ Projects',
        stage: '2025 – Present',
      },
      {
        title: 'Open Source Contributor – GitHub & Dev Community',
        stage: '2024 – Present',
      }
    ]
  },
  {
    title: 'credentials',
    info: [
      { title: 'Certified Web Development - Apna College', stage: '2024' },
      { title: 'Database Management System - Infosys', stage: '2024' },
      { title: 'Java Certified - Apna College & Great Leaning', stage: '2023' },
    ]
  }
];


const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[100px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          {/* Text */}
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="h2 z-10"
          >
            Captivating <span className="text-accent">stories</span> birth magnificent design.
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="max-w-[500px] z-10 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden md:flex"
          >
            Three years ago, I began my journey as a self-taught developer. Since then, I&apos;ve built over 15 full-stack web projects, completed 10+ tech courses—including Next.js, React.js, TypeScript, Numpy-Pandas, Framer Motion, Prisma, Zustand and grown into a confident MERN stack developer.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="hidden xl:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">

              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} delay={1} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>

              {/* Tech-courses */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} delay={1} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Tech Courses</div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} delay={1} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Awesome Web Projects</div>
              </div>

              {/* Certificates */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} delay={1} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Tech Certificates</div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={`about-item-${itemIndex}`}
                  className={`${index === itemIndex && 'text-accent after:w-[100%]'} ${index === itemIndex ? 'after:bg-accent' : "after:bg-white"} cursor-pointer capitalize xl:text-lg relative transition-all after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-[100%]  hover:after:bg-accent hover:text-accent`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>

          {/* small screen about */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start xl:hidden">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={`item-${itemIndex}`} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex flex-wrap gap-4">
                  {/* itemIcons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={`item-icon-${iconIndex}`} className="text-2xl text-white">{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Big screen about section */}
          <div className="py-2 xl:py-6 hidden xl:flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {bigScreenAboutData[index].info.map((item, itemIndex) => (
              <div
                key={`big-src-item-${itemIndex}`}
                className="flex-1 flex flex-col md:flex-row items-center justify-between gap-2 text-white/80 px-4 py-2 border-b border-white/10"
              >
                {/* Title & Stage */}
                <div className="flex items-center gap-2 text-sm md:text-base font-light">
                  <span>{item.title}</span>
                  <span className="hidden md:inline">|</span>
                  <span className="text-white/60 italic">{item.stage}</span>
                </div>

                {/* Icons */}
                {item.icons?.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                    {item.icons.map((icon, iconIndex) => (
                      <div key={`big-item-icon-${iconIndex}`} className="text-xl text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>

            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
