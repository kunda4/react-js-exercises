import React from 'react';
export default function MappingComponent({ names, images }){
  const Animals = names.map((animal, index) => (
    <div className="myAnimals">
      <span className="img">{images[index]}</span>
      <span  className="animal">{animal}</span>
    </div>
  ));

    return (
  
      <div >
        {Animals}
      </div>
  
  );
}


