import React from "react";
import Display from "./src/components/Display";
import Input from "./src/components/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      random: "",
      value: "",
    };
  }

  componentDidMount() {
    this.setState((state) => ({
      random: Math.floor(Math.random() * 100),
    }));
  }
  render() {
    return (
      <>
        <Display />
        <Input />
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
