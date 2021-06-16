import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Home from './Home'

const url="http://localhost:9800/register?email="
const lurl="http://localhost:9800/login"
class Login extends Component {
constructor(){
  super();
  this.state={
  email:'',
  password:'',
  login:''
  }
 }
 
 handleChangeemail = (event) => {
  this.setState({email:event.target.value}) 
}
handleChangepassword = (event) => {
  this.setState({password:event.target.value})
}

handleSubmit = () => {
    axios.get(`http://localhost:9800/register?email=${this.state.email}&&password=${this.state.password}`)
    .then((response)=>{ console.log(response)
      if(response.data.length === 1){
       
        (this.props.history.push(`/home/${response.data[0].user_id}`))
        return(
          <div><Home profiledata={response}/></div>
        )
    }else{
      alert("Invalid Data")
    }
    })

  



 /* fetch(lurl,{
   console.log(response.data[0].email)
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(this.state)
})
.then( res=>{
  console.log(res)
}
  // (this.props.history.push('/home'))
  )*/

}

render() {
    return (
      <div className="Register-page">
       <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
             <div>
            
            <div className="form-group register-form">
              <div>
                <label>Email</label>
                <input type="email" name="email" onChange={this.handleChangeemail} value={this.state.email} className="form-control"/>
              </div>
              <br/>
              <div>
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChangepassword} value={this.state.name} className="form-control"/>
              </div>
            
             <br/>
             <div id="register-btn" >
                <RaisedButton label="Submit" primary={true}  onClick={this.handleSubmit }/>
             </div>
            </div>
            
         </div>
       
           </div>
           </MuiThemeProvider>
        
      </div>
    );
  }
}

export default Login;