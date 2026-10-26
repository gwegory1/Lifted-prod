import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { ease } from "../theme/theme";

const variants = {
  // text and blocks: rise into place
  up: { hidden: { opacity: 0, y: 32 }, shown: { opacity: 1, y: 0 } },
  // photos: uncover upward; the end state sits outside the box so shadows aren't cut
  clip: { hidden: { opacity: 0, clipPath: "inset(6% -15% -15% -15%)" }, shown: { opacity: 1, clipPath: "inset(-15% -15% -15% -15%)" } },
};

type RevealProps = HTMLMotionProps<"div"> & { variant?: keyof typeof variants; delay?: number };

// Animates its children once, when they scroll into view.
const Reveal = ({ variant = "up", delay = 0, ...rest }: RevealProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={variants[variant]}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: variant === "clip" ? 0.7 : 0.8, delay, ease }}
      {...rest}
    />
  );
};

export default Reveal;
