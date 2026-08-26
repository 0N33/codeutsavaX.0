"use client";

import { useEffect } from "react";
import { retroAudio } from "@/utils/audioEffects";

const GLITCH_DURATION = 600;

export function CursorGlitch() {
    useEffect(() => {
        let resetTimer: number | null = null;

        const triggerGlitch = () => {
            document.documentElement.classList.remove("cursor-glitch-click");
            void document.documentElement.offsetWidth;
            document.documentElement.classList.add("cursor-glitch-click");

            if (resetTimer !== null) window.clearTimeout(resetTimer);
            resetTimer = window.setTimeout(() => {
                document.documentElement.classList.remove("cursor-glitch-click");
                resetTimer = null;
            }, GLITCH_DURATION);
        };

        window.addEventListener("pointerdown", triggerGlitch);
        return () => {
            window.removeEventListener("pointerdown", triggerGlitch);
            if (resetTimer !== null) window.clearTimeout(resetTimer);
            document.documentElement.classList.remove("cursor-glitch-click");
        };
    }, []);

    return null;
}
