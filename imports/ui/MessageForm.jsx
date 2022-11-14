import React, { useState } from 'react';

export const MessageForm = () => {
    const [text, setText] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
  
      if (!text) return;
  
      Meteor.call('messages.insert', text);
  
      setText('');
    };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ecrivez votre message ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Envoyer un message</button>
    </form>
  );
};