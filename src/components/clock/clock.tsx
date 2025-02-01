"use client"

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
    const [time, setTime] = useState({
        days: 47,
        hours: 16,
        minutes: 35,
        seconds: 19
    });

    useEffect(() => {
        const timer = setInterval(() => {
            if (time.seconds > 0) {
                setTime(prev => ({ ...prev, seconds: prev.seconds - 1 }));
            } else if (time.minutes > 0) {
                setTime(prev => ({ 
                    ...prev, 
                    minutes: prev.minutes - 1,
                    seconds: 59
                }));
            } else if (time.hours > 0) {
                setTime(prev => ({
                    ...prev,
                    hours: prev.hours - 1,
                    minutes: 59,
                    seconds: 59
                }));
            } else if (time.days > 0) {
                setTime(prev => ({
                    ...prev,
                    days: prev.days - 1,
                    hours: 23,
                    minutes: 59,
                    seconds: 59
                }));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div className='flex items-center gap-2'>
            <div className='flex gap-1'>
                <div className='bg-gray-100 rounded px-2 py-1'>
                    <span className='text-lg font-bold'>{time.days.toString().padStart(2, '0')}</span>
                </div>
                :
                <div className='bg-gray-100 rounded px-2 py-1'>
                    <span className='text-lg font-bold'>{time.hours.toString().padStart(2, '0')}</span>
                </div>
                :
                <div className='bg-gray-100 rounded px-2 py-1'>
                    <span className='text-lg font-bold'>{time.minutes.toString().padStart(2, '0')}</span>
                </div>
                :
                <div className='bg-gray-100 rounded px-2 py-1'>
                    <span className='text-lg font-bold'>{time.seconds.toString().padStart(2, '0')}</span>
                </div>
            </div>
            <span className='text-sm text-gray-500'>Remains until the end of the offer</span>
        </div>
    );
}
