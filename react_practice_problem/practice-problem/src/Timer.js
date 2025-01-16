import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer); // Correctly clear the timeout
        }
    }, [time]);

    return (
        <div>
            <h1>Time Left: {time} Second</h1>
        </div>
    );
};

export default Timer;
