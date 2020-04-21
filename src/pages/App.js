import React from "react";
class App extends React.Component {
  state = {
    count: 0,
  };
  // 우리는 바꾸고 싶은 data를 넣는 것!
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>

        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
