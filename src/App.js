import React, { Component } from 'react';
import './App.css';
import CommentBoard from './components/comment';

class App extends Component {
  render() {
    return (
      <div className="commentBoard">
        <CommentBoard />
      </div>
    );
  }
}

export default App;
