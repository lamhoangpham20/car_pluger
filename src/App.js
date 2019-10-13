import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List'
import Start from './component/Start'
import Digit from './component/Digit'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={plug:[{id:1,key:'VUW1',name:'plug1',type:'slow',connector:'Type 2',electricity:22,address:"Torikatu 28"},
                      {id:2,key:'E12T',name:'plug2', type:'fast',connector:'CSS',electricity:100,address:"Kirkkokatu 28"}],
                      textInput: "",
                      startTime:0,
                      endTime:0,
                      plugID: null
    }
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
</Router>

)
}
}

export default App;
