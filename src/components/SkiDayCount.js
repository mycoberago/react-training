import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
	return((decimal * 10) + '%')
}

const calcGoalProgress = (total,goal) => {
	return percentToDecimal(total/goal)
}
	
//  stateless component
export const SkiDayCount = ({total=70,
							powder=20,
							backcountry=10,
							goal=100}) => (

	<div className="ski-day-count">
		<div className="total-days">
			<span>{total}</span>
			<Calendar />
			<span> Days</span>
		</div>
		<div className="powder-days">
			<span>{powder}</span>
			<SnowFlake />
			<span> Days</span>
		</div>
		<div className="backcountry-days">
			<span>{backcountry}</span>
			<Terrain />
			<span> Days</span>
		</div>
		<div>
			<span>{calcGoalProgress(
					total,
					goal
				  )}</span>
		</div>
	</div>
)

// validate properties
SkiDayCount.propTypes = {
	total: PropTypes.number,
	powder: PropTypes.number,
	backcountry: PropTypes.number
}