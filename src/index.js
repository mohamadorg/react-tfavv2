import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
  constructor(props){
    super(props);

  }
  render(){

    return this.fullName;
  }
  fullName(){
    return this.props.name + this.props.family ;
  }
}

ReactDOM.render(
<App name="Mohamad" family="Ebrahimi" age={21} />,
 document.getElementById("root")
);
