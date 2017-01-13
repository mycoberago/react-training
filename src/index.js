import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'
import { SkiDayList } from './components/SkiDayList'

window.React = React


render(
	<SkiDayList days={
		[
			{
				resort: "Squaw Valley",
				date: new Date('1/2/2016'),
				powder: true,
				backcountry: false
			},
			{
				resort: "Dells",
				date: new Date('5/23/2016'),
				powder: false,
				backcountry: false
			},
			{
				resort: "Philippines",
				date: new Date('1/5/2015'),
				powder: false,
				backcountry: true
			}
		]
	}/>,
	document.getElementById('react-container')
)