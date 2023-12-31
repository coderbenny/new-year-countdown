import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Confetti from 'react-dom-confetti';

function NewYearCountdown() {
    const [countdownCompleted, setCountdownCompleted] = useState(true);

    // Function to be called when the countdown completes
    const handleCountdownComplete = () => {
        setCountdownCompleted(true);
    };

    // Function to render the countdown component
    const renderCountdown = ({ hours, minutes, seconds }) => (
        <div className='text-9xl'>
            <h1 className=' font-bold'>New Year Countdown</h1>
            <p className='font-bold'>{`${hours} hours, ${minutes} minutes, ${seconds} seconds`}</p>
        </div>
    );

    // Function to render the "Happy New Year" message
    const renderNewYearMessage = () => (
        <div>

            <h1 className='text-4xl md:text-7xl font-bold'>Happy New Year Fam❤️</h1>
        </div>
    );

    // Confetti configuration
    const confettiConfig = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        decay: 0.9,
    };

    useEffect(() => {
        // You can add additional logic here to handle post-countdown actions
        // For now, we'll just log a message to the console
        if (countdownCompleted) {
            console.log('Happy New Year!');
        }
    }, [countdownCompleted]);

    return (
        <div className='items-center text-7xl font-bold mb-10'>
            {/* Countdown component */}
            {
            }
            {!countdownCompleted && (
                <div>
                    <h1 className='text-lg md:text-4xl tracking-wider'>😊Countdown To 2024🥳
                    </h1>
                    <Countdown className='shadow-lg p-2 rounded-md text-5xl md:text-8xl' date={`01/01/${new Date().getFullYear() + 1}`} onComplete={handleCountdownComplete}>
                        {renderCountdown}
                    </Countdown>
                </div>
            )}

            {/* Confetti component */}
            {countdownCompleted && (
                <Confetti active={countdownCompleted} config={confettiConfig} />
            )}

            {/* New Year message component */}
            {countdownCompleted && renderNewYearMessage()}
        </div>
    );
};

export default NewYearCountdown;
