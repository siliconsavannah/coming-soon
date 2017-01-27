import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import './soon.css'

export default class Soon extends Component {
	constructor(props) {
		super(props)
		this.state = {
			divider: {
					"marginTop": 20,
					"marginLeft": 35,
					"width":2,
					"height": 400,
					"backgroundColor": "white"
			} 
		}
	}

	render() {
		return (
			<div className="home">
				<div className="overlay">
					<div className="pattern">
						<Grid>
							<Row>
								<Col xsHidden md={4}>
									<div style={this.state.divider}/>
								</Col>
      					<Col xs={12} md={8}>

      					</Col>
							</Row>
						</Grid>

			
					</div>
				</div>
			</div>
		);
	}
}
