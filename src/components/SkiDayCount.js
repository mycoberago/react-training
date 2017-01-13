const percentToDecimal = (decimal) => {
	return((decimal * 10) + '%')
}

const calcGoalProgress = (total,goal) => {
	return percentToDecimal(total/goal)
}
	

export const SkiDayCount = ({total, backcountry, powder, goal}) => (

	<div className="ski-day-count">
		<div className="total-days">
			<span>{total}</span>
			<span> Days</span>
		</div>
		<div className="powder-days">
			<span>{powder}</span>
			<span> Days</span>
		</div>
		<div className="backcountry-days">
			<span>{backcountry}</span>
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
