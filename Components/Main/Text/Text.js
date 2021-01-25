import React from 'react';

class Text extends React.Component {
  render() {
    return <p>{this.props.content}</p>
  }
}

export { Text };
