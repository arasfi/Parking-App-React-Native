import React from 'react';

import {
	Container,
	Text,
	Button,
	Content,
	Thumbnail,
	Form,
	Item,
	Input,
	Label,
	Grid,
	Row,
	Col
} from 'native-base';
import { StyleSheet } from 'react-native';
import { app } from '../src/config';

export default class LoginScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	loginUser = (email, password) => {
		app.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => this.props.navigation.navigate('Home'));
	};

	render() {
		return (
			<Container>
				<Grid>
					<Row size={40} style={styles.logo}>
						<Thumbnail
							style={{ resizeMode: 'contain' }}
							square
							large
							source={require('../assets/images/logo.png')}
						/>
						<Text style={{ marginTop: 11 }}>
							Let's login or create your Parkzr account.
						</Text>
					</Row>
					<Row size={80}>
						<Form style={styles.formslog}>
							<Item regular style={styles.txtlog}>
								<Input
									placeholder="Regular Textbox"
									onChangeText={(email) =>
										this.setState({ email })
									}
								/>
							</Item>
							<Item regular style={styles.txtlog}>
								<Input
									placeholder="Regular Textbox"
									onChangeText={(password) =>
										this.setState({ password })
									}
								/>
							</Item>
							<Button
								block
								style={styles.submitbtn}
								onPress={() =>
									this.loginUser(
										this.state.email,
										this.state.password
									)
								}
							>
								<Text>Sign in</Text>
							</Button>
							<Text style={styles.cnwith}>or continue with</Text>
							<Row style={styles.gofb}>
								<Col>
									<Button light style={styles.btnfb}>
										<Text>facebook</Text>
									</Button>
								</Col>
								<Col>
									<Button light style={styles.btngo}>
										<Text>google</Text>
									</Button>
								</Col>
							</Row>
							<Row style={styles.bottomSignup}>
								<Text onPress={() => this.props.navigation.navigate('SignupScreen')}>
									Don't have an account? Register Here 
								</Text>
							</Row>
						</Form>
					</Row>
				</Grid>
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
		marginTop: 20
	},
	gofb: {
		flexDirection: 'row',
		flex: 1,
		position: 'absolute',
		bottom: 50,
		left: 0,
		right: 0,
		justifyContent: 'space-between',
		padding: 15
	},
	btnfb: {
		width: 151,
		height: 60
	},
	btngo: {
		width: 151,
		justifyContent: 'flex-start',
		height: 60
	},
	bottomSignup: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		marginBottom: 20,
		alignItems: 'center'
	},
	cnwith: {
		textAlign: 'center',
		marginTop: 3,
		marginBottom: 3
	},
	formslog: {
		flex: 1,
		justifyContent: 'flex-start'
	},
	submitbtn: {
		backgroundColor: '#00AEEF',
		marginRight: 10,
		marginLeft: 10,
		borderRadius: 0
	},
	txtlog: {
		marginBottom: 20,
		marginLeft: 10,
		marginRight: 10
	}
});
