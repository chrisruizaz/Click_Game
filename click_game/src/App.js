import React, { Component } from "react";
import GameContainer from "./components/container/GameContainer";
import Card from "./components/cards/cards";
import examples from "./examples.json";

class App extends Component {
  state = {
    examples,
    click_array: []
  };

  shuffleArray = examples => {
    for (let i = examples.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = examples[i];
      examples[i] = examples[j];
      examples[j] = temp;
    }
    return examples;
  };

  clickPicture = id => {
    console.log(id);
    var click = this.state.click_array.concat(id);
    this.setState({ click_array: click });
    console.log(click);
  };

  render() {
    return (
      <div>
        <GameContainer
          images={this.state.examples.map(image => (
            <Card
              src={image.image}
              name={image.name}
              id={image.id}
              clickPicture={this.clickPicture}
            />
          ))}
        />
        ;
      </div>
    );
  }
}

export default App;
