import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleRegister = () => {
        const{email,password} = this.state;
        console.log(email,password)
        axios.post('/auth/register', {email,password}).then(res=>{
            this.setState({
                email:'',
                password:''
            })         
        })
        .catch(err => alert(err.response.request.response))
    }
    
    handleLogin = () => {
        const{email,password} = this.state;
        axios.post('/auth/login',{email,password}).then(res => {
            this.props.getUser(res.data)
            this.setState({
                email:'',
                password:''
            })
            this.props.history.push('/home')
        })
        .catch(err=>alert(err.response.request.response))
    }

    render(){
        return(
            <div>
                login

            <br/>
            
            <input 
            placeholder='username'
            name='email' 
            maxLength = '100' 
            onChange={(e) => this.handleInput(e)}/>

            <input
            placeholder='password'
            name='password'
            type='password'
            maxLength='20'
            onChange={(e) => this.handleInput(e)}/>

            <br/>

            <button 
            onClick={this.handleRegister}>register
            </button>

            <button
            onClick={this.handleLogin}>login
            </button>

            </div>
        )
    }

}

export default connect(null,{getUser})(Login);