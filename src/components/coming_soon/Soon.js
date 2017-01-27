import React, { Component } from 'react'
import { TweenLite } from 'gsap'
import { Grid, Row, Col } from 'react-bootstrap'

import './soon.css'

export default class Soon extends Component {
	componentDidMount() {
		const divider = document.getElementById("divider")
		const silicon = document.getElementById("silicon")
		const trend = document.getElementById("trend")
		TweenLite.to(divider, 2, { height: "400px", backgroundColor: "white" })
		TweenLite.to(silicon, 2, { opacity:"1", marginTop:"10%" })
		TweenLite.to(trend, 2, { opacity:"1" })
	}

	render() {
		return (
			<div className="home">
				<div className="overlay">
					<div className="pattern">
						<Grid>
							<Row>
								<Col xs={2} md={3}>
									<div id="divider"/>
								</Col>
      					<Col xs={10} md={9}>
									<p id="silicon">Coming Soon</p>
									<p id="trend">Get all the Latest Tech news from Sub-Saharan Africa</p>
      					</Col>
							</Row>
						</Grid>

			
					</div>
				</div>
			</div>
		);
	}
}
