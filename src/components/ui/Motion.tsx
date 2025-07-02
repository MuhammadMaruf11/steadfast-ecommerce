"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

const pageVariants = {
    initial: {
        opacity: 0,
        y: -10,
    },
    enter: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 10,
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
} as const;

interface RootLayoutProps {
    children: ReactNode;
}

const Motion: FC<RootLayoutProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
}

export default Motion;