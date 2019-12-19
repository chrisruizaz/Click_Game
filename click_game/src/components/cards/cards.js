import React from "react";
function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <img class="card-img-top" src={props.src} alt={props.name} />
    </div>
  );
}

export default Card;
