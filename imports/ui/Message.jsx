import React from 'react';

export const Message = ({ message, onDeleteClick, currentUser }) => {
    return (
      <li>
       <span>{message.userName} - {message.text}</span>
       {currentUser === message.userName ? <button onClick={ () => onDeleteClick(message) }>&times; delete</button> : null}
      </li>
    );
  };