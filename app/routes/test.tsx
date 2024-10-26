import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="example">
      <p className="label">Logo</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <motion.g>
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x="0.5"
            y="1"
            width="5"
            height="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.rect>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x1="13.25"
            y1="13.5"
            x2="8.25"
            y2="13.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x1="8.25"
            y1="8.5"
            x2="13.25"
            y2="8.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x1="8.25"
            y1="11"
            x2="13.25"
            y2="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            points="13.5 6 8 6 10.75 0.5 13.5 6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.polygon>
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            cx="3"
            cy="11"
            r="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.circle>
        </motion.g>
      </svg>
    </div>
  );
}
