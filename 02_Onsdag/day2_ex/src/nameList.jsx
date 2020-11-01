import React, {Component} from 'react';

function NamesList(props) {
    
    const names = props.names;
    const listItems = names.map((name) =>
      <li key={name.toString()}>{name}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  export default NamesList;