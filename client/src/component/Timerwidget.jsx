import styles from './Timerwidget.module.css'
import { HiChevronDown,HiChevronUp} from "react-icons/hi";
import { useState,useEffect } from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const HOURS_STEP = 3600;
const MINUTES_STEP = 60;
const SECONDS_STEP = 1;

export default function Timerwidget() {
	const [timeRemaining, setTimeRemaining] = useState(10);
const [cachedSeconds, setCachedSeconds] = useState(10);
const[isRunning,setIsRunning]=useState(false)

useEffect(() => {
  if (isRunning) {
    const interval = setInterval(() => {
      
   
		setTimeRemaining((totalSeconds) => {
        if (totalSeconds > 0) return totalSeconds - 1;
        else {
          setIsRunning(false);
          return 0;
        }
      });
    }, 1000); 
    return () => clearInterval(interval); 
  }
}, [isRunning]);

const parseTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
};

const stepHandler = (step) => {
  if (isRunning || (step < 0 && timeRemaining - step < 0)) return;
  setCachedSeconds(timeRemaining + step);
  setTimeRemaining(timeRemaining + step);
};


const formatTime = (time) => {
	return `${time.hours.toString().padStart(2, "0")}:${time.minutes
		.toString()
		.padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
	// 0 seconds -> 00
	// 0 minutes -> 00
	// 0 hours -> 00
};
const percentage = (timeRemaining / cachedSeconds) * 100;

  return (
    <div className={styles.container}>
			<div className={styles.left}>	<CircularProgressbar
			value={percentage} 
			text={formatTime(parseTime(timeRemaining))}
			styles={{
				path: {
					stroke: "#FF6A6A",
					strokeWidth: "3px",
					transition: "stroke-dashoffset 0.5s ease 0s",
				},
				trail: {
					stroke: "transparent",
				},
				text: {
					fill: "white",
					fontSize: "12px",
					
				},
			}}
				/></div>
			<div className={styles.right}>
				<div className={styles.configure}>
					<div className={styles.cell}>
						<p>Hours</p>
						<HiChevronUp onClick={() => stepHandler(HOURS_STEP)} />
						<p>{parseTime(cachedSeconds).hours.toString().padStart(2, "0")}</p>
						<HiChevronDown onClick={() => stepHandler(-HOURS_STEP)} />
					</div>
					<div className={styles.cell}>
						<p>Minutes</p>
						<HiChevronUp
							onClick={() => stepHandler(MINUTES_STEP)}
						/>
						<p>
							{parseTime(cachedSeconds).minutes.toString().padStart(2, "0")}
						</p>
						<HiChevronDown onClick={() => stepHandler(-MINUTES_STEP)} />
					</div>
					<div className={styles.cell}>
						<p>Seconds</p>
						<HiChevronUp
							onClick={() =>stepHandler(SECONDS_STEP)}
						/>
							<p>
							{parseTime(cachedSeconds).seconds.toString().padStart(2, "0")}
						</p>
						<HiChevronDown onClick={() => stepHandler(-SECONDS_STEP)}
						/>
					</div>
				</div>
				<button onClick={() => setIsRunning(!isRunning)}>
					{isRunning ? "Stop" : "Start"}
				</button>
			</div>
		</div>
  )
}
