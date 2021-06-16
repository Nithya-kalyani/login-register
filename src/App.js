import React, {Component} from 'react';
import './App.css';
import { Link} from 'react-router-dom';

class App extends Component {


render() {
    return (
      <div>
        <div>
          <div className="head">
            <Link to="/login">
              <button className="buttons">Login</button>
            </Link>
            &nbsp;
            &nbsp;
            <Link to="/register"> 
              <button className="buttons">Register</button>
            </Link>
          </div>  
        </div>
       
      </div>
    );
  }
}

export default App;