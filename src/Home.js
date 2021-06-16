import React from 'react';
import { Link} from 'react-router-dom';


const Home =(props) =>{
    console.log(props)

console.log(props.match.params.id)
    
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                  <span>  <h1 style={{color:"white"}}>Dashboard</h1></span>
                   <span class="nav navbar-nav navbar-right" style={{color:"white"}}> </span>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to={`/profile/${props.match.params.id}`}><span class="glyphicon glyphicon-user" style={{color:"white"}}> Profile</span> </Link></li>
                   
                </ul>
            </div>
        </nav>
        
    )
}
export default Home;