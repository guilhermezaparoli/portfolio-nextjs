"use client";
import React, { useRef, useState } from "react";
import css3 from "../../../public/assets/svg/css3.svg";
import git from "../../../public/assets/svg/git.svg";
import gitHub from "../../../public/assets/svg/github.svg";
import gitHubDark from "../../../public/assets/svg/github dark.svg";
import html5 from "../../../public/assets/svg/hml5.svg";
import js from "../../../public/assets/svg/js.svg";
import react from "../../../public/assets/svg/react.svg";
import tailwind from "../../../public/assets/svg/tailwind.svg";
import mongoDB from "../../../public/assets/svg/mongo-db.svg";
import nodejs from "../../../public/assets/svg/nodejs.svg";
import nodejsDark from "../../../public/assets/svg/nodejs-dark.svg";
import vite from "../../../public/assets/svg/vite.svg";
import figma from "../../../public/assets/svg/figma.svg";
import nextjs from "../../../public/assets/svg/nextjs.svg";
import nextjsDark from "../../../public/assets/svg/nextjs dark.svg";
import styledComponents from "../../../public/assets/svg/styled-components.svg";
import typescript from "../../../public/assets/svg/typescript.svg";
import materialUI from "../../../public/assets/svg/material-ui.svg";
import postgreSQL from "../../../public/assets/svg/postgresql.svg";
import jira from "../../../public/assets/svg/jira.svg";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");
  const skillRref = useRef<HTMLDivElement>(null);
  const IconsRef = useRef<HTMLDivElement>(null);
  const [firstAnimationFinished, setFirstAnimationFinished] = useState(false);
  const { isLightTheme } = useGlobalContext();

  const isSkillRefInView = useInView(skillRref, { once: true });
  return (
    <div id="habilidades" className="pt-20">
      <div className="mb-40" ref={skillRref}>
        <motion.p
          initial={{ x: "-1000px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-start font-mono text-simple dark:text-simpleDark"
        >
          {t("tag")}
        </motion.p>
        <motion.h1
          initial={{ x: "-1000px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ x: "-1000px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          onAnimationComplete={() => setFirstAnimationFinished(true)}
          className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          ref={IconsRef}
          initial={{ opacity: 0 }}
          animate={firstAnimationFinished ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="md:grid md:grid-cols-skills md:gap-36"
        >
          <div className="mt-10">
            <p className="text-simple dark:text-simpleDark md:text-lg">
              {t("groups.1")}
            </p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
              <Image title="HTML5" src={html5} alt="HTML5" />
              <Image title="CSS3" src={css3} alt="CSS3" />
              <Image title="JavaScript" src={js} alt="JavaScript" />
              <Image title="TypeScript" src={typescript} alt="TypeScript" />
              <Image
                title="Node.js"
                src={isLightTheme ? nodejs : nodejsDark}
                alt="Node.js"
              />
              <Image title="Vite" src={vite} alt="Vite" />
              <Image title="Figma" src={figma} alt="Figma" />
              <Image title="Jira" src={jira} alt="Jira" />
            </div>
          </div>
          <div className="mt-10">
            <p className="text-simple dark:text-simpleDark md:text-lg">
              {t("groups.2")}
            </p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
              <Image title="React.js" src={react} alt="React.js" />
              <Image
                title="Next.js"
                src={isLightTheme ? nextjs : nextjsDark}
                alt="Next.js"
              />
              <Image title="Tailwind" src={tailwind} alt="Tailwind" />
              <Image
                title="Styled-components"
                src={styledComponents}
                alt="Styled-components"
              />
              <Image title="Material UI" src={materialUI} alt="Material UI" />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-simple dark:text-simpleDark md:text-lg">
              {t("groups.3")}
            </p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
              <Image title="PostgreSQL" src={postgreSQL} alt="PostgreSQL" />
              <Image title="MongoDB" src={mongoDB} alt="MongoDB" />
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="mt-10 flex-1">
            <p className="text-simple dark:text-simpleDark md:text-lg">
              {t("groups.4")}
            </p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-6 md:justify-start">
              <Image title="Git" src={git} alt="Git" />
              <Image
                title="GitHub"
                src={isLightTheme ? gitHub : gitHubDark}
                alt="GitHub"
                className="text-white"
              />
              <div></div>
              <div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
