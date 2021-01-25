import React from 'react';
import './Text.css';

class Text extends React.Component {
  render () {
  return <p className="footer-text">{this.props.content}</p>
  }
}

export { Text };
