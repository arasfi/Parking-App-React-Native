import React from 'react';
import {Container,Row,Text,Button,Content,Header,Title,List,ListItem,Left,Right,Icon,Thumbnail,Form,Item,Input,Label} from 'native-base';
import { app } from '../src/config';
import { StyleSheet, Platform } from 'react-native';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	signOutUser = async () => {
		try {
			await app.auth().signOut();
			navigate('LoginScreen');
		}catch (e) {
			console.log(e);
		}
	}
	render() {
		return (
			<Container>
				<Header style={styles.header}>
				<Title style={styles.title}>My Account</Title>
				</Header>
				<Content>
				<Row size={40} style={styles.logo}>
						<Thumbnail
							style={{ resizeMode: 'contain' }}
							
							large
							source={require('../assets/images/image.png')}
						/>
						
				</Row>
					<List>
					<ListItem onPress={() => this.props.navigation.navigate('AccountDetails')}>
					<Left>
						<Text style={styles.listitem}>Account Details</Text>
					</Left>
					<Right>
						<Icon name="arrow-forward" />
					</Right>
					</ListItem>
					<ListItem  >
					<Left>
						<Text style={styles.listitem}>Setup Payment</Text>
					</Left>
					<Right>
						<Icon name="arrow-forward" />
					</Right>
					</ListItem>
					<ListItem  >
					<Left>
						<Text style={styles.listitem}>Vehicles</Text>
					</Left>
					<Right>
						<Icon name="arrow-forward" />
					</Right>
					</ListItem>
					<ListItem  >
					<Left>
						<Text style={styles.listitem}>Notifications</Text>
					</Left>
					<Right>
						<Icon name="arrow-forward" />
					</Right>
					</ListItem>
					<ListItem  >
					<Left>
						<Text style={styles.listitem}>Help</Text>
					</Left>
					<Right>
						<Icon name="arrow-forward" />
					</Right>
					</ListItem>
					<ListItem  onPress={() => this.signOutUser()}>
					<Left>
						<Text style={styles.listitem}>Logout</Text>
					</Left>
					</ListItem>
				</List>
				</Content>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	logo: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		resizeMode: 'contain',
		marginTop: 20,
		marginBottom: 20
	},
	header: {
		backgroundColor: '#00AEEF',
		color: '#fff',
		marginTop: Platform.OS === 'ios' ? 0 : 0,
		paddingTop: Platform.OS === 'ios' ? 15 : 35,
		height: Platform.OS === 'ios' ? 60 : 80
	},
	title: {
		color: '#fff'
	},
	listitem: {
		marginBottom: 10,
		marginTop: 6
	}
});
