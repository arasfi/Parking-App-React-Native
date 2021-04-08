import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container,Header,List,Item,Icon,Text,Input } from 'native-base';
import { MapView } from 'expo';
import { app } from '../src/config';
import { Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import NearbyParkingListItem from '../components/NearbyParkingListItem';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);

		this.state = {
			listingData: []
		};
	}
	componentDidMount(){
        userId = app.auth().currentUser.uid;
        app.database().ref('parkings/').on('value',(snapshot)=>{
				this.state.listingData = snapshot.val();
            })
    }
	render() {
		return (
			<Container>
				<Header searchBar style={styles.header}>
					<Item style={styles.searchbar}>
						<Input
							style={styles.inputsearch}
							placeholder="Where do you want to park?"
							placeholderTextColor="#000"
						/>
						<Icon name="ios-search" />
					</Item>
				</Header>
				<Grid>
					<Row size={50}>
						<MapView
							style={{ flex: 1 }}
							initialRegion={{
								latitude: 37.78825,
								longitude: -122.4324,
								latitudeDelta: 9,
								longitudeDelta: 4
							}}
						>
							<MapView.Marker
								coordinate={{
									latitude: 37.78635,
									longitude: -102.4324
								}}
								title=''
								description="Description"
							/>

							<MapView.Marker
								coordinate={{
									latitude: 36.78325,
									longitude: -103.4336
								}}
								title="TitEEEle"
								description="Description"
							/>

							<MapView.Marker
								coordinate={{
									latitude: 35.78635,
									longitude: -92.4394
								}}
								title="TitlWWWe"
								description="Description"
							/>
						</MapView>
					</Row>
					<Row size={50}>
						<List style={{ flex: 1 }}>
							<View style={styles.headerView}>
								<Text style={{ height: 20, color: '#00AEEF' }}>
									Nearby Parkings
								</Text>
							</View>

							<ScrollView>
								<NearbyParkingListItem
									name="Indiana Ave Parking"
									price="2-6"
									distance={1.8}
									slots={3}
									hourly="hour"
								/>

								<NearbyParkingListItem
									name="Indiana Ave Parking"
									price="2-6"
									distance={1.8}
									slots={3}
									hourly="hour"
								/>

								<NearbyParkingListItem
									name="Indiana Ave Parking"
									price="2-6"
									distance={1.8}
									slots={3}
									hourly="day"
								/>

								<NearbyParkingListItem
									name="Indiana Ave Parking"
									price="2-6"
									distance={1.8}
									slots={3}
									hourly="hour"
								/>
							</ScrollView>
						</List>
					</Row>
				</Grid>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#00AEEF',
		marginTop: Platform.OS === 'ios' ? 0 : 0,
		paddingTop: Platform.OS === 'ios' ? 15 : 15,
		height: Platform.OS === 'ios' ? 75 : 90
	},
	searchbar: {
		paddingTop: Platform.OS === 'ios' ? 0 : 0,
		paddingRight: Platform.OS === 'ios' ? 0 : 0,
		paddingBottom: Platform.OS === 'ios' ? 0 : 0,
		paddingLeft: Platform.OS === 'ios' ? 5 : 5,
		backgroundColor: '#fff'
	},
	grid: {
		height: 600
	},
	list: {
		flex: 1
	},
	headerView: {
		backgroundColor: '#F4F4F4',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 21,
		maxHeight: 30
	}
});
