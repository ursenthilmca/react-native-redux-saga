import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import Indicator from "../../components/activity-indicator"

const lockIcon = require("./lock.png");
const personIcon = require("./person.png");

class Login extends Component {
    
    componentDidMount(){
       this.props.actions.login();
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        }
    }

    isValid() {
        const { username, password } = this.state;
        let valid = false;
        this.setState({error:null });
        if (username.length > 0 && password.length > 0) {
            valid = true;
        }
        if (username.length === 0 && password.length === 0){
            this.setState({ error: 'You must enter an username and password' })
        } else if (username.length === 0) {
            this.setState({ error: 'You must enter an username' });
        } else if (password.length === 0) {
            this.setState({ error: 'You must enter a password' });
        }
        return valid;
    }

    onLogin = () => {
        if (this.isValid()) {
            
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }



    render(){
       return this.props.isLoadingLogin ? (<Indicator />):
           (<View style={styles.container}>
                <Image
                    style={styles.logoImg}
                    source={require('../../assets/logo.png')}
                />
               <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                       placeholder="Username"
                       autoCapitalize={'none'}
                       returnKeyType={'next'}
                       onSubmitEditing={() => this.passwordInput.focus()} 
                       autoCorrect={false}
                       underlineColorAndroid='transparent'
                       onChangeText={(username) => this.setState({ username })} />
               </View>

               <View style={styles.inputContainer}>
                   <TextInput style={styles.inputs}
                       placeholder="Password"
                       ref={(input) => this.passwordInput = input} 
                       secureTextEntry={true}
                       returnKeyType={'done'}
                       autoCapitalize={'none'}
                       autoCorrect={false}
                       underlineColorAndroid='transparent'
                       onChangeText={(password) => this.setState({ password })} />
               </View>
               { this.state.error != null && 
                    <Text style={styles.error}>{this.state.error}</Text>
               }
               <TouchableHighlight
                    style={[styles.buttonContainer, styles.loginButton]} 
                   onPress={this.onLogin}>
                   <Text style={styles.loginText}>Login</Text>
               </TouchableHighlight>

               <TouchableHighlight 
                    style={styles.buttonContainer}
                    onPress={() => this.onClickListener('restore_password')}>
                   <Text>Forgot your password?</Text>
               </TouchableHighlight>

               <TouchableHighlight 
                    style={styles.buttonContainer} 
                    onPress={() => this.onClickListener('register')}>
                   <Text>Register</Text>
               </TouchableHighlight>
           </View>);
    }
}

function mapStateToProps(state) {
    return {
        isLoadingLogin: state.login.isLoading,
        loginData: state.login.loginData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    logoImg:{
        width:100,
        height:100,
        marginBottom: 50
    },
    error:{
        width: "80%",
        marginBottom:20,
        color:"red"
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderBottomWidth: 1,
        width: "80%",
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 50,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: "80%",
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);