import React from "react";
import Display from "./Display";
import Input from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      random: "",
      value: "",
      proposition: ""
    };
  }

  componentDidMount() {
    this.setState((state) => ({
      random: Math.floor(Math.random() * 100),
    }));
  }
  

  handleSubmit(e) {
    //e.preventDefault();
    this.setState({
      proposition: this.state.value,
      value:""
    });
    
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    
  }
  render() {
    return (
      <>
        <Display random={this.state.random} proposition={this.state.proposition} />
        <Input
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </>
    );
  }
}

export default App;
