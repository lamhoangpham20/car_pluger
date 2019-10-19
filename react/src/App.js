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
import Register from './component/Register'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import constants from './constants.json';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={plug:[],
                      textInput: "",
                      startTime:0,
                      endTime:0,
                      plugVerify: null,
                      isAuthenticated: false,
                      someData: null,
                      marker:null,
                      money:null,
                      centerLat:65.01236,centerLng:25.46816,
                      searchPlug:[],
    }
  }
  componentDidMount = () =>
  {
    axios.get(constants.baseAddress + '/pluggers').then(result => {
      this.setState({ plug: result.data.pluggers });
    })
    .catch(error => {
      console.error(error);
    })
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
  register = (event)=>
  {
    event.preventDefault();
    console.log('post');
    axios.post(constants.baseAddress +'/users', {
    username: event.target['username'].value,
    password: event.target['password'].value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  newInput = (event)=>{
   this.setState({textInput: event.target.value });
   console.log(event.target.value);
   console.log(this.state.marker);
 }
 choosePlug = (event) =>
 {
   event.preventDefault();
   console.log(event.target['digit'].value);
   let b = this.state.plug.filter(i=>i.digit === event.target['digit'].value);
   console.log(b);
   if(b.length != 0)
   {
     this.setState({plugVerify : b[0]});
     console.log('ngu');
   }
   else
   {
      console.log('Undifine');
   }
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
   let money;
   let d = this.state.plugVerify;
   if(d.type === 'slow')
   {
     if(d.free === 'yes')
     {
       money = 0;
     }
     else
     {
       money =  0.2 * c/60 ;
     }
   }
   else if(d.type === 'fast')
   {
     money= 0.18 * c/3600 * this.state.plugVerify.electricity
   }
   this.setState({money:money});
 }
 show_plug = (id)=>
 {
   let marker = this.state.plug.find(i=> i.id===id);
   this.setState({marker:marker});
   console.log(id);
   console.log(this.state.marker);
   this.setState({centerLat:60.16983});
   this.setState({centerLng:24.93848});
   console.log(this.state.centerLat);
 }
 search = ()=>
 {
   let searchPlug = this.state.plug.filter(i=>i.name.toUpperCase().includes(this.state.textInput.toUpperCase()))
   this.setState({searchPlug:searchPlug});
   this.setState({marker:null})
}
    render()
    {
      return(

<Router>
<Route path="/" exact render={ routeProps => <List searchPlug={this.state.searchPlug} search={this.search} plug={this.state.plug} show_plug={this.show_plug}
                                                    centerLat={this.state.centerLat} centerLng={this.state.centerLng} marker={this.state.marker} newInput={this.newInput} textInput={this.state.textInput} {...routeProps}/> }/>
<Route path="/start" exact render={ routeProps => <Start start={this.start} stop={this.stop} money={this.state.money}  {...routeProps}/> }/>
<Route path="/digit" exact render={ routeProps => <Digit isAuthenticated ={this.state.isAuthenticated} choosePlug={this.choosePlug} {...routeProps}/> }/>
<Route path="/register" exact render={ routeProps => <Register register={this.register} {...routeProps}/> }/>
<Route path="/login" exact render={
          (routeProps) =>
            <LoginView
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              userInfo={ this.state.userInfo }
              redirectPathOnSuccess="/"
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
