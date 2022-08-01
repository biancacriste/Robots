import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { // robots is an array of objects
  const cardComponent = robots.map((user, i) => {
    return (
    <Card 
    key={i} 
    id={robots[i].id} 
    name={robots[i].name} 
    email={robots[i].email} />);
  })
  return (
    <div>
      {cardComponent}
    </div>
  );
} 

export default CardList;