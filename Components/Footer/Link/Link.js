import React from 'react';
import './Link.css';

class Link extends React.Component {
  render() {
    return <a href={this.props.link} className="link">{this.props.content}</a>
  }
}

export { Link };
