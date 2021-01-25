import React from 'react';
import './MenuEl.css';

class MenuEl extends React.Component {
  render() {
    return <p className="menu-el">{this.props.title}</p>;
  }
}

export { MenuEl };
