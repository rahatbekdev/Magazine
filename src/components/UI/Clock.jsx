// import { useEffect, useState } from "react";

// const Clock = () => {
//   const [days, setDays] = useState();
//   const [hours, setHours] = useState();
//   const [minutes, setMinutes] = useState();
//   const [seconds, setSeconds] = useState();

//   let interval;

//   const countDown = () => {
//     const destination = new Date("Oct 14,2024").getTime();

//     interval = setInterval(() => {
//       const now = new Date().getTime();
//       const different = destination - now;
//       const days = Math.floor(different / (1000 * 60 * 60 * 24));

//       const hours = Math.floor(
//         different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
//       );

//       const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60));

//       const seconds = Math.floor(different % (1000 * 60) / 1000);

//       if (destination < 0) {
//         clearInterval(interval.current)
//       }
//       else {
//         setDays(days);
//         setHours(hours);
//         setMinutes(minutes);
//         setSeconds(seconds);
//       }
//     });
//   };

//   useEffect(() => {
//     countDown();
//   });

//   return (
//     <div className="clock_wrapper d-flex alihn-items-center gap-3">
//       <div className="clock_data d-flex alihn-items-center gap-3">
//         <div className="text-center">
//           <h1 className="text-white fs-3 mb-2">{days} </h1>
//           <h5 className="text-white fs-6">Days</h5>
//         </div>
//         <span className="text-white fs-3">:</span>
//       </div>

//       <div className="clock_data d-flex alihn-items-center gap-3">
//         <div className="text-center">
//           <h1 className="text-white fs-3 mb-2">{hours}</h1>
//           <h5 className="text-white fs-6">Hours</h5>
//         </div>
//         <span className="text-white fs-3">:</span>
//       </div>

//       <div className="clock_data d-flex alihn-items-center gap-3">
//         <div className="text-center">
//           <h1 className="text-white fs-3 mb-2">{minutes} </h1>
//           <h5 className="text-white fs-6">Minutes</h5>
//         </div>
//         <span className="text-white fs-3">:</span>
//       </div>

//       <div className="clock_data d-flex alihn-items-center gap-3">
//         <div className="text-center">
//           <h1 className="text-white fs-3 mb-2">{seconds} </h1>
//           <h5 className="text-white fs-6">Seconds</h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clock;




//!==============================================

import { useEffect, useState, useRef } from "react";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const intervalRef = useRef(null);

  const countDown = () => {
    const destination = new Date("2024-10-15T00:00:00").getTime(); // Целевая дата

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        clearInterval(intervalRef.current); // Остановка таймера при завершении
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    }, 1000); // Интервал обновления — 1 секунда
  };

  useEffect(() => {
    countDown(); // Запуск таймера при монтировании

    return () => clearInterval(intervalRef.current); // Очистка интервала при размонтировании
  }, []); // Пустой массив зависимостей для выполнения один раз

  return (
    <div className="clock_wrapper d-flex align-items-center gap-3">
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
