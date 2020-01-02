import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../redux/reducer';
import axios from 'axios';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            img:'',
            edit: false,
            x:''
        }
    }

    componentDidMount = () => {
        this.setState({x:this.props.user.user_id})
    }

    // componentDidUpdate = () => {
    //     axios.get('/api/user')
    // }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   
    handleLogout = () => {
        axios.post('/auth/logout').then(res => {
            this.props.logout()
        })
        .catch(err => console.log(err))
    }

    toggleEdit = () => {
        this.setState({edit:!this.state.edit})
    }

    cancel = () => {
        this.setState({
            firstName:'',
            lastName:'',
            img:'',
            edit:false
        })
    }

    save = () => {
        const {firstName,lastName,img} = this.state;
        let id = this.state.x
        this.edit(id,{firstName,lastName,img})
        this.cancel()
        console.log('save',id)
    }

    edit = (id,body) => {
        console.log(id)
        axios.put(`/api/user/${id}`, body).then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    }

    render(){
        // console.log(this.props.session)
        let button;
        if (!this.state.edit) {
            button = <button onClick = {this.toggleEdit}>edit</button>;
        }else{
            button = 
            <div>
                <input name='firstName' placeholder='first name'
                onChange = {(e)=>this.handleInput(e)}/>
                <br/>
                <input name='lastName' placeholder='last name'
                onChange = {(e)=>this.handleInput(e)}/>
                <br/>
                <input name='img' placeholder='profile pic url'
                onChange = {(e)=>this.handleInput(e)}/>
                <br/>

                <button onClick={this.save}>save</button>
                <button onClick={this.cancel}>cancel</button>
            </div>
        }
        return(
          <div>profile
              <br/>      
                <Link to='/' onClick={this.handleLogout}>Logout</Link>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.user_id}</p>
                <p>{this.state.firstName}</p>
                <p>{this.props.user.first_name}</p>
                <p>{this.props.user.last_name}</p>
                <p>{this.props.user.img}</p>


                {button}
                {/* {!this.state.edit
                ?<button onClick={this.toggleEdit}>edit</button>
                : console.log('hi')}
                
                {!this.state.edit
                ?<button>save</button>
                : <button onClick={this.cancel}>cancel</button>} */}
          </div>
        )
     }
    }

    const mapStateToProps = (reduxState) => {
        return reduxState
    }

export default connect(mapStateToProps,{logout})(Profile);