import { useState, useEffect } from 'react';

export default function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

  useEffect(() => {
    const today = new Date();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = month + '-' + day;
    setCurrentDate(dateString);

    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const currentDayText = daysOfWeek[today.getDay()];
    setCurrentDayOfWeek(currentDayText);
  }, []); 

  return {
    currentDate,
    currentDayOfWeek
  };
}