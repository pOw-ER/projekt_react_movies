import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <p>{props.rate}</p>
      {props.genre.map((genre, i) => <p key={i}>{genre}</p>)}
    </div>
  );
}

export default Card;
