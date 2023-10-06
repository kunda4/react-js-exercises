import React from 'react';
import MappingComponent from './ListComponents';
export default function MappingCustom() {
  const names = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const images = ["🐩", "🐈", "🐔", "🐄", "🐑", "🏇"];

  return (
    <div className="myList">
        <h1>List of Animals</h1>
      <MappingComponent names= {names} images = {images}/>
    </div>
  );
}


