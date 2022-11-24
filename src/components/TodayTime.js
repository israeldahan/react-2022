import React from "react";
import Watch from './Watch.js';
function TodayTime() {
const today = new Date("November 21, 2022 11:13:00");
 return (
 <Watch milliseconds={today} />
 );
}
export default TodayTime;