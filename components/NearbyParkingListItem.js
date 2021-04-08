import React from 'react';
import { Text, ListItem, Left, Body, Right } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';

export default class NearbyParkingListItem extends React.Component {
	render() {
		return (
			<ListItem>
				<Grid>
					<Col style={{ flex: 6 }}>
						<Row style={{ marginBottom: 6 }}>
							<Text>{this.props.name}</Text>
						</Row>
						<Row style={{ justifyContent: 'space-between' }}>
							<Text>{this.props.distance} Km</Text>
							<Text>{this.props.slots} Available</Text>
						</Row>
					</Col>
					<Col style={{ flex: 2 }}>
						<Row style={{ justifyContent: 'flex-end' }}>
							<Text note>${this.props.price}</Text>
						</Row>
						<Row style={{ justifyContent: 'flex-end' }}>
							<Text note>
								{this.props.hourly === 'hour'
									? 'Per Hour'
									: 'Per Day'}
							</Text>
						</Row>
					</Col>
				</Grid>
			</ListItem>
		);
	}
}
