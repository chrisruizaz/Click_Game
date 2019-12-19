import React from "react";

function GameContainer(props) {
  console.log(props);

  return <div className="game_container">{props.images}</div>;
}

export default GameContainer;
