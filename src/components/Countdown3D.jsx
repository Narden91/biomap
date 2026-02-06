import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Individual Flip Card Component
const FlipCard = memo(({ digit, label }) => {
    return (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            <div className="relative w-16 h-20 md:w-24 md:h-32 bg-white rounded-lg shadow-xl overflow-hidden perspective-1000">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={digit}
                        initial={{ rotateX: -90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: 90, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sage-50 to-white text-coral-600 text-4xl md:text-6xl font-display font-bold border border-sage-200 rounded-lg backface-hidden"
                        style={{ transformOrigin: "center center" }}
                    >
                        {String(digit).padStart(2, '0')}
                    </motion.div>
                </AnimatePresence>

                {/* Visual split line for flip effect look */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-sage-200/50 z-20"></div>
            </div>
            <span className="mt-4 text-xs md:text-sm font-semibold text-sage-600 uppercase tracking-widest">{label}</span>
        </div>
    );
});

FlipCard.displayName = 'FlipCard';

const Countdown3D = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex justify-center flex-wrap py-8">
            <FlipCard digit={timeLeft.days} label="Days" />
            <FlipCard digit={timeLeft.hours} label="Hours" />
            <FlipCard digit={timeLeft.minutes} label="Minutes" />
            <FlipCard digit={timeLeft.seconds} label="Seconds" />
        </div>
    );
};

export default Countdown3D;
