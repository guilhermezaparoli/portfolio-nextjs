"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect, useState } from "react";

const RainCanvas = () => {
  const { isLightTheme } = useGlobalContext();
  const [transitionProgress, setTransitionProgress] = useState(1);

  useEffect(() => {
    const div = document.createElement("div");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return; // Early exit if context is not available
    }

    let w: number;
    let h: number;
    let msTimer = 0.0;
    let lightningTimer: number;
    let lightningAlpha: number;
    let rainArr: Array<{ x: number; y: number; z: number; w: number }> = [];
    const rainSpeed = 4;
    let animationFrameId: number;

    const init = () => {
      document.body.appendChild(div);
      div.style.position = "fixed";
      div.style.zIndex = "-2";
      div.style.pointerEvents = "none";
      div.style.width = "100vw";
      div.style.height = "100vh";
      div.style.left = "0";
      div.style.top = "0";
      div.appendChild(canvas);
      updatePosition();
      createRain();
      lightningTimer = 8000.0;
      lightningAlpha = 0.0;

      animationFrameId = requestAnimationFrame(mainLoop);
    };

    const createRain = () => {
      const length = 2000;
      rainArr = [];
      for (let i = length - 1; i >= 0; i--) {
        rainArr.push({
          x: Math.floor(Math.random() * w),
          y: Math.floor(Math.random() * h),
          z: Math.floor(Math.random() * 2 + 1),
          w: Math.floor(Math.random() * 3 + 2),
        });
      }
    };

    const updatePosition = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const mainLoop = () => {
      updatePosition();
      msTimer += 30;
      lightningTimer = lightningTimer < 0.0 ? 8000.0 : lightningTimer - 30.0;

      // Calculate transition progress
      if (isLightTheme && transitionProgress < 1) {
        setTransitionProgress((prev) => prev + 0.01);
      } else if (!isLightTheme && transitionProgress > 0) {
        setTransitionProgress((prev) => prev - 0.01);
      }

      // Night to day transition colors
      const nightColor = "#000000";
      const dayColor = "#3FC5F0";
      const currentBackgroundColor = blendColors(
        nightColor,
        dayColor,
        transitionProgress,
      );

      ctx.fillStyle = currentBackgroundColor;
      ctx.fillRect(0, 0, w, h);

      if (transitionProgress < 1) {
        lamp();
        rain();
      }

      if (lightningTimer < 500.0 && transitionProgress < 1) {
        weather(lightningTimer);
      }

      // Draw the sun during the day and the moon at night
      drawSunAndMoon(transitionProgress);

      animationFrameId = requestAnimationFrame(mainLoop);
    };

    const lamp = () => {
      const lampX = w / 3;
      const lampY = h - 300;

      const grd = ctx.createLinearGradient(lampX, lampY, lampX, lampY + 290);
      grd.addColorStop(0.0, "rgba(60, 60, 60, 1.0)");
      grd.addColorStop(0.2, "rgba(80, 80, 80, 1.0)");
      grd.addColorStop(1.0, "rgba(45, 45, 45, 1.0)");
      ctx.fillStyle = grd;
      ctx.fillRect(lampX - 3, lampY, 6, 290);

      const grdOuterHigh = ctx.createLinearGradient(
        lampX,
        lampY,
        lampX,
        lampY + 290,
      );
      grdOuterHigh.addColorStop(0.0, "rgba(65, 65, 65, 1.0)");
      grdOuterHigh.addColorStop(0.2, "rgba(95, 95, 95, 1.0)");
      grdOuterHigh.addColorStop(1.0, "rgba(47, 47, 47, 1.0)");
      ctx.fillStyle = grdOuterHigh;
      ctx.fillRect(lampX - 4, lampY, 1, 290);

      const grdOuterLow = ctx.createLinearGradient(
        lampX,
        lampY,
        lampX,
        lampY + 290,
      );
      grdOuterLow.addColorStop(0.0, "rgba(45, 45, 45, 1.0)");
      grdOuterLow.addColorStop(0.2, "rgba(60, 60, 60, 1.0)");
      grdOuterLow.addColorStop(1.0, "rgba(43, 43, 43, 1.0)");
      ctx.fillStyle = grdOuterLow;
      ctx.fillRect(lampX + 3, lampY, 1, 290);

      const sinGlowMod = 5 * Math.sin(msTimer / 200);
      const cosGlowMod = 5 * Math.cos((msTimer + 0.5 * sinGlowMod) / 200);
      const grdGlow = ctx.createRadialGradient(
        lampX,
        lampY - 10,
        0,
        lampX + sinGlowMod,
        lampY + 200 + cosGlowMod,
        250,
      );
      grdGlow.addColorStop(0.0, "rgba(220, 240, 160, 1)");
      grdGlow.addColorStop(0.2, "rgba(180, 240, 160, 0.4)");
      grdGlow.addColorStop(0.4, "rgba(140, 240, 160, 0.2)");
      grdGlow.addColorStop(1.0, "rgba(140, 240, 160, 0)");
      ctx.fillStyle = grdGlow;
      ctx.fillRect(0, 0, w, h);
    };

    const rain = () => {
      rainArr.forEach((drop) => {
        if (drop.y >= h - 20) drop.y -= h;
        if (drop.x < -10) drop.x += w;
        else {
          drop.y += drop.w * rainSpeed;
        }

        const grd = ctx.createRadialGradient(250, 450, 140, 250, 300, 600);
        grd.addColorStop(0.1, "rgba(100, 170, 160, 0.2)");
        grd.addColorStop(0.1, "rgba(100, 160, 160, 0.12)");
        ctx.fillStyle = grd;
        ctx.fillRect(drop.x, drop.y, drop.z, 4);
      });
    };

    const weather = (lightningTimer: number) => {
      lightningAlpha = 0.0;

      if (lightningTimer > 350.0) {
        lightningAlpha = (500.0 - lightningTimer) * 0.004;
      } else if (lightningTimer < 350.0 && lightningTimer > 250.0) {
        lightningAlpha = (lightningTimer - 250.0) * 0.006;
      } else if (lightningTimer < 250.0 && lightningTimer >= 100.0) {
        lightningAlpha = (250.0 - lightningTimer) * 0.004;
      } else if (lightningTimer < 100.0 && lightningTimer >= 0.0) {
        lightningAlpha = lightningTimer * 0.006;
      }

      if (lightningAlpha > 0.0) {
        ctx.fillStyle = `rgba(250, 250, 245, ${lightningAlpha})`;
        ctx.fillRect(0, 0, w, h);
      }
      if (navigator.vibrate) {
        // Faz o dispositivo vibrar por 200ms
        navigator.vibrate(500);
      }
    };

    const drawSunAndMoon = (progress: number) => {
      const sunX = w - 100;
      const sunY = 150;
      const sunRadius = 50 + 30 * progress;

      const moonX = w - 100;
      const moonY = 150;
      const moonRadius = 60 - 40 * progress;

      // Draw the moon when transitionProgress < 1 (night)
      if (progress < 1) {
        // Moon outer glow
        const outerGlow = ctx.createRadialGradient(
          moonX,
          moonY,
          0,
          moonX,
          moonY,
          moonRadius + 30,
        );
        outerGlow.addColorStop(0, "rgba(255, 255, 255, 0.6)");
        outerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius + 30, 0, Math.PI * 2);
        ctx.fill();

        // Moon main body
        const moonGradient = ctx.createRadialGradient(
          moonX,
          moonY,
          0,
          moonX,
          moonY,
          moonRadius,
        );
        moonGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        moonGradient.addColorStop(1, "rgba(180, 180, 180, 1)");

        ctx.fillStyle = moonGradient;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw the sun when transitionProgress > 0 (day)
      if (progress > 0) {
        // Sun outer glow
        const outerGlow = ctx.createRadialGradient(
          sunX,
          sunY,
          0,
          sunX,
          sunY,
          sunRadius + 60,
        );
        outerGlow.addColorStop(0, "rgba(255, 255, 0, 0.6)");
        outerGlow.addColorStop(1, "rgba(255, 255, 0, 0)");

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius + 60, 0, Math.PI * 2);
        ctx.fill();

        // Main Sun Body
        const sunGradient = ctx.createRadialGradient(
          sunX,
          sunY,
          0,
          sunX,
          sunY,
          sunRadius,
        );
        sunGradient.addColorStop(0, "rgba(255, 215, 0, 1)");
        sunGradient.addColorStop(0.5, "rgba(255, 215, 0, 1)");
        sunGradient.addColorStop(1, "rgba(255, 215, 0, 1)");
        sunGradient.addColorStop(1, "rgba(255, 150, 0, 1)");

        ctx.fillStyle = sunGradient;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner Glow
        const innerGlow = ctx.createRadialGradient(
          sunX,
          sunY,
          0,
          sunX,
          sunY,
          sunRadius * 0.5,
        );
        innerGlow.addColorStop(0, "rgba(255, 255, 255, 1)");
        innerGlow.addColorStop(1, "rgba(255, 255, 0, 0)");

        ctx.fillStyle = innerGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const blendColors = (
      color1: string,
      color2: string,
      percentage: number,
    ) => {
      const c1 = parseInt(color1.slice(1), 16);
      const c2 = parseInt(color2.slice(1), 16);

      const r1 = (c1 >> 16) & 0xff;
      const g1 = (c1 >> 8) & 0xff;
      const b1 = c1 & 0xff;

      const r2 = (c2 >> 16) & 0xff;
      const g2 = (c2 >> 8) & 0xff;
      const b2 = c2 & 0xff;

      const r = Math.round(r1 + (r2 - r1) * percentage);
      const g = Math.round(g1 + (g2 - g1) * percentage);
      const b = Math.round(b1 + (b2 - b1) * percentage);

      return `rgb(${r},${g},${b})`;
    };

    init();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.removeChild(div);
    };
  }, [isLightTheme, transitionProgress]);

  return null;
};

export default RainCanvas;
