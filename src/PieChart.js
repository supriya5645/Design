import React, { useEffect } from 'react';
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './pie.css';

const PieChart = () => {
	return (
		<div className='doughnut-chart'>
      <CircularProgressbarWithChildren value={0}
      styles={buildStyles({
        trailColor: "transparent"
      })}
      >
      <p className='progressDesc fs-10'>Total now Customer</p>
			<CircularProgressbarWithChildren
				value={25}
        className='innerProgress'
				styles={buildStyles({
					pathColor: '#fc037b',
					trailColor: '#eee',
					// strokeLinecap: "butt"
				})}
			>
				{/* Foreground path */}
				<CircularProgressbar
					value={40}
          text='65%'
					styles={buildStyles({
						rotation: 0.2,
						pathColor: '#7b03fc',
						trailColor: 'transparent',
						strokeLinecap: 'butt',
					})}
				/>
			</CircularProgressbarWithChildren>
      </CircularProgressbarWithChildren>
		</div>
	);
};

export { PieChart };
