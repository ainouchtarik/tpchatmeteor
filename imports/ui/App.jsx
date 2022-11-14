import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MessagesCollection } from '../db/MessagesCollection';
import { Message } from './Message';
import { MessageForm } from './MessageForm';
import { LoginForm } from './LoginForm';

export const App = () => {

  const user = useTracker(() => Meteor.user());


  const { messages, isLoading } = useTracker(() => {
    const noDataAvailable = { messages: []};
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('messages');

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const messages = MessagesCollection.find().fetch();

    return { messages };
  });

  const deleteMessage = ({ _id }) => Meteor.call('messages.remove', _id);

  const logout = () => Meteor.logout();

return(
  <div className="app">
      <h1>💌 ☄️ Meet'eor</h1>
  <header>
    <div className="app-bar">
      <div className="app-header">
        <h1>Welcome to Chat !</h1>
      </div>
    </div>
  </header>

  <div className="main">
        {user ? (
          <Fragment>
            <div className="user" onClick={logout}>
              Logout🚪
            </div>
            {isLoading && <div className="loading">loading...</div>}

            <ul className="tasks">
              {messages.map(message => (
                <Message
                  key={message._id}
                  message={message}
                  onDeleteClick={deleteMessage}
                  currentUser={user.username}
                />
              ))}
            </ul>
            <MessageForm />
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
</div>
)
};
