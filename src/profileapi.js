import React , {Component} from 'react';
import axios from 'axios';



const rurl="http://localhost:9800/registerdata";
const update="http://localhost:9800/update";

class profile extends Component {
    constructor(){
        super()
        this.state={
            newuser_id:'',
            newusername:'',
            newemail:'',
            newpassword:''
           
        }
    }

    handleChangeemail = (event) => {
        this.setState({newemail:event.target.value}) 
      }
      
    handleChangeusername = (event) => {
          this.setState({newusername:event.target.value}) 
      }
    handleChangepassword = (event) => {
          this.setState({newpassword:event.target.value})
      }
      


        handleUpdate  = () => {
        fetch('http://localhost:9800/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id:this.state.newuser_id,
                username:this.state.newusername,
                email:this.state.newemail,
                password:this.state.newpassword
            })
          })
          .then(response => response.json())
          .then(data => console.log(data)) 
          .catch(err => console.log(err))
     }
  
   
    render(){

   
       
        
        return(
        <form className="form-horizontal">
            <div className="form-group">
                <h3>Profile</h3>
                <br/>
                <label className="control-label" >User Name:</label>
                <input id="input-name" className="form-control"  onChange={this.handleChangeusername}  Value={this.state.newusername} placeholder="Fullname"/>
                <br/>
                <label className="control-label">Email:</label>
                <input id="input-name" className="form-control" onChange={this.handleChangeemail}  Value={this.state.newemail} placeholder="Email"/>
                <br/>
                <label className="control-label">Password:</label>
                <input id="input-name" className="form-control" onChange={this.handleChangepassword}   Value={this.state.newpassword} placeholder="Password"/>
                <br/>
                <button  onClick={this.handleUpdate} >Save</button>
            </div>
        </form>  
        )
        
    }
    
    componentDidMount(){
        var name=this.props.match.params.id
        console.log(name);
        axios.get(`${rurl}/${name}`)
        .then((response)=>{
            // console.log(response)
            this.setState({  newuser_id:response.data[0].user_id})
             this.setState({  newusername:response.data[0].username})
             this.setState({ newemail:response.data[0].email})
             this.setState({ newpassword:response.data[0].password})
        })
     
    }
   


}

export default profile