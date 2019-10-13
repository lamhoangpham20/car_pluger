import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List'
import Start from './component/Start'
import Digit from './component/Digit'
import LoginView from './component/LoginView'
import Auth from './component/Auth'
import ExampleProtectedView from './component/ExampleProtectedView'
import ProtectedRoute from './component/ProtectedRoute'
import MapContainer from './component/MapContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import constants from './constants.json';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={plug:[{id:1,key:'VUW1',name:'plug1',type:'slow',connector:'Type 2',electricity:22,address:"Torikatu 28"},
                      {id:2,key:'E12T',name:'plug2', type:'fast',connector:'CSS',electricity:100,address:"Kirkkokatu 28"}],
                      textInput: "",
                      startTime:0,
                      endTime:0,
                      plugID: null,
                      isAuthenticated: false,
                      someData: null
    }
  }
  onLogin = () => {
  this.setState({ isAuthenticated: true })
  }

  onLoginFail = () => {
  this.setState({ isAuthenticated: false });
  console.log("Login failed");
  }
  loadProtectedData = () => {
    axios.get(constants.baseAddress + '/hello-protected', Auth.getAxiosAuth()).then(results => {
      this.setState({ someData: results.data });
    })
  }
  newInput = (event)=>{
   this.setState({textInput: event.target.value });
   console.log(event.target.value);
 }
 choosePlug = (event) =>
 {
   event.preventDefault();
   console.log(event.target['digit'].value);
   let b = this.state.plug.find(i=>i.key === event.target['digit'].value);
   console.log(b.id);
   this.setState({plugID : b.id});
 }
 start = () =>
 {
   let a = performance.now()/1000;
   this.setState({startTime:a});
   console.log(a);
 }
 stop = () =>
 {
   let b = performance.now()/1000;
   let c = (b - this.state.startTime);
   this.setState({endTime:b});
   console.log(c);
 }
    render()
    {
      return(

<Router>
<Route path="/" exact render={ routeProps => <List plug={this.state.plug} newInput={this.newInput} textInput={this.state.textInput} {...routeProps}/> }/>
<Route path="/start" exact render={ routeProps => <Start start={this.start} stop={this.stop}  {...routeProps}/> }/>
<Route path="/digit" exact render={ routeProps => <Digit choosePlug={this.choosePlug} {...routeProps}/> }/>
<Route path="/login" exact render={
          (routeProps) =>
            <LoginView
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              userInfo={ this.state.userInfo }
              redirectPathOnSuccess="/example"
              {...routeProps}
              />
        } />
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/example" exact render={
            (routeProps) =>
              <ExampleProtectedView
                loadProtectedData={ this.loadProtectedData }
                someData={ this.state.someData }
                />
          }>
        </ProtectedRoute>
</Router>

)
}
}

export default App;
