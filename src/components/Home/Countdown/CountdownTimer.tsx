import { getSevenDaysFromToday } from '@/utils/dateUtils';
import { useEffect, useState } from 'react';
import TimeDisplay from './TimeDisplay';

export interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [date, setDate] = useState<TimeState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTime = () => {
const time = new Date("2026-12-01T10:00:00+01:00").getTime() - Date.now();
    setDate({
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
    });
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-6 mt-6">
      <TimeDisplay value={date.days} label="Dni" />
      <TimeDisplay value={date.hours} label="Godziny" />
      <TimeDisplay value={date.minutes} label="Minuty" />
      <TimeDisplay value={date.seconds} label="Sekundy" />
    </div>
  );
}; 