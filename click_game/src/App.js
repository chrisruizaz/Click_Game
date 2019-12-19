import React, { Component } from "react";
import GameContainer from "./components/container/GameContainer";
import Card from "./components/cards/cards";
import examples from "./examples.json";

class App extends Component {
  state = {
    examples
  };
  render() {
    return (
      <div>
        <GameContainer
          images={this.state.examples.map(image => (
            <Card src={image.image} name={image.name} />
          ))}
        />
        ;
      </div>
    );
  }
}

export default App;
