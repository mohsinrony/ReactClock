import { useState, useEffect } from 'react';

const Clock = () => {
const  [time, setTime] = useState(new Date());

useEffect(() => {
const interval = setInterval(() => {
setTime(new Date())
}, 1000);
return () => clearInterval(interval);}, []);

return (
  <div className="clock">
    <h1>This is a Finnish clock.</h1>
    <h3>Current Date and Time:</h3> 
    <p>{time.toString()}</p>
  </div>
);
};

export default Clock;