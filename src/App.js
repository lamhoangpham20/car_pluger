import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={plug:[{id:1,key:'VUW1',name:'plug1',type:'slow',connector:'Type 2',electricity:22,address:"Torikatu 28"},
                      {id:2,key:'E12T',name:'plug2', type:'fast',connector:'CSS',electricity:100,address:"Kirkkokatu 28"}],
                      textInput: ""
    }
  }
  newInput = (event)=>{
   this.setState({textInput: event.target.value });
   console.log(event.target.value);
 }
    render()
    {
      return(

<Router>
<Route path="/" exact render={ routeProps => <List plug={this.state.plug} newInput={this.newInput} textInput={this.state.textInput} {...routeProps}
    /> }/>
</Router>

)
}
}

export default App;
