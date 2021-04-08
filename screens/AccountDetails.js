import React from 'react';
import {Container,Row,Text,Button,Grid,Content,Header,Title,List,ListItem,Left,Right,Icon,Thumbnail,Form,Item,Input,Label,Col} from 'native-base';
import { app } from '../src/config';
import { StyleSheet, Platform } from 'react-native';

export default class AccountDetails extends React.Component {
    
    static navigationOptions = {
		header: null
    };
    constructor(props) {
		super(props);

		this.state = {
			Username: '',
            Email: '',
            Address:'',
            Phone:'',
            Country:'',
            Region:'',
            City:'',
            Zip:'',
            user:''
		};
    }
    componentDidMount(){
        userId = app.auth().currentUser.uid;
        app.database().ref('users/' + userId).on('value',(snapshot)=>{
                this.state.user = snapshot.val();
                this.setState(this.state.user) ;
            })
    }
    
    addinfo = () => {
		userId = app.auth().currentUser.uid;
        if (userId) {
        app.database().ref('users/' + userId).set({
            Username: this.state.Username,
            Email: this.state.Email,
            Address: this.state.Address,
            Phone: this.state.Phone,
            Country: this.state.Country,
            Region: this.state.Region,
            City: this.state.City,
            Zip: this.state.Zip
        })
    }
	};
	render() {
		return (
			<Container>
				<Header style={styles.header}>
				<Title style={styles.title}>Account Details</Title>
				</Header>
				<Content>
				<Row size={40} style={styles.logo}>
						<Thumbnail
							large
							source={require('../assets/images/image.png')}
						/>
				</Row>
                <Item ><Input placeholder={this.state.user.Username} onChangeText={(Username) =>this.setState({ Username })}/></Item>
                <Item ><Input placeholder={this.state.user.Email} onChangeText={(Email) =>this.setState({ Email })}/></Item>
                <Item ><Input placeholder={this.state.user.Address} onChangeText={(Address) =>this.setState({ Address })}/></Item>
                <Item ><Input placeholder={this.state.user.Phone} onChangeText={(Phone) =>this.setState({ Phone })}/></Item>
                <Grid>
                    <Col >
                        <Item>
                            <Input placeholder={this.state.user.Country} onChangeText={(Country) =>this.setState({ Country })}/>
                            <Input placeholder={this.state.user.Region} onChangeText={(Region) =>this.setState({ Region })}/>
                        </Item>
                        <Item>
                            <Input placeholder={this.state.user.City} onChangeText={(City) =>this.setState({ City })}/>
                            <Input placeholder={this.state.user.Zip} onChangeText={(Zip) =>this.setState({ Zip })}/>
                        </Item>
                    </Col>
                </Grid>
                <Item ><Input placeholder='Entre your password'/></Item>
                <Text style={styles.dltaccount} onPress = {() =>this.addinfo()} >Delete Account</Text>
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
    rows:{
        flexDirection: 'row',
		flex: 1,
    },
    dltaccount:{
        textDecorationLine: 'underline',
        color:'#E95435',
        paddingTop: 40,
        textAlign: 'center',
        
    }
});
