import { motion } from "framer-motion";

const NUM_STARS = 90;

export default function BackgroundAnimation() {
    const stars = Array.from({ length: NUM_STARS }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // Horizontal position
        y: Math.random() * 100, // Vertical position
        delay: Math.random() * 10, // Animation delay
        duration: Math.random() * 5 + 5, // Animation duration (5-10s)
    }));

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"> 
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white"
                    style={{
                        width: `${Math.random() * 4 + 3}px`,
                        height: `${Math.random() * 4 + 3}px`,
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        clipPath: "polygon(50% 0%, 61% 35%, 100% 50%, 61% 65%, 50% 100%, 39% 65%, 0% 50%, 39% 35%)", // 四角星形状
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}


// import { motion } from "framer-motion";

// const codeSymbols = ["< />", "{ }", "//", "fn()", "return", "const", "import", "async", "await", "=>", "data", "console.log"];

// export default function BackgroundAnimation() {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {Array.from({ length: 20 }).map((_, index) => {
//                 const randomSymbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
//                 const randomX = Math.random() * 100;
//                 const randomY = Math.random() * 100;
//                 const delay = Math.random() * 3;

//                 return (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: randomY - 10 }}
//                         animate={{ opacity: [0, 1, 0.5, 0], y: randomY }}
//                         transition={{
//                             duration: 3,
//                             repeat: Infinity,
//                             repeatType: "reverse",
//                             delay: delay,
//                         }}
//                         className="absolute text-purple-400 text-lg"
//                         style={{ left: `${randomX}%`, top: `${randomY}%` }}
//                     >
//                         {randomSymbol}
//                     </motion.div>
//                 );
//             })}
//         </div>
//     );
// }
