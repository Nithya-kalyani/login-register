import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const rurl="http://localhost:9800/register"
class Login extends Component {
constructor(){
  super();
  this.state={
    user_id:(Math.floor(Math.random()*10000)).toString(),
  username:'',
  email:'',
  password:''
  }
 }
 handleChangeemail = (event) => {
  this.setState({email:event.target.value}) 
}

 handleChangeusername = (event) => {
    this.setState({username:event.target.value}) 
}
handleChangepassword = (event) => {
    this.setState({password:event.target.value})
}

handleSubmit = () => {
  fetch(rurl,{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(this.state)
})
.then((this.props.history.push('/login')))

}

render() {
    return (
    <div className="Register-page" >
      <MuiThemeProvider>
        <div>
          <AppBar
             title="Register"
           />
<div className="form-group register-form">
              <div>
                <label>UserName</label>
                <input type="text" name="username" onChange={this.handleChangeusername} value={this.state.username} className="form-control"/>
              </div>
              <br/>
              <div>
                <label>Email</label>
                <input type="email" name="email" onChange={this.handleChangeemail} value={this.state.email} className="form-control"/>
              </div>
              <br/>
              <div>
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChangepassword} value={this.state.password} className="form-control"/>
              </div>
            
             <br/>
            <div id="register-btn" >
              <RaisedButton label="Submit" primary={true}  onClick={this.handleSubmit }/>
            </div>
            </div>
           
           </div>
           </MuiThemeProvider>


         </div>
       
    );
  }
}

export default Login;