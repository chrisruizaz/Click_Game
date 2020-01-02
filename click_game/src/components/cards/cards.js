import React from "react";
function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.src}
        alt={props.name}
        onClick={() => props.clickPicture(props.id)}
      />
    </div>
  );
}

export default Card;
