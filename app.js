import React from 'react';
import ReactDOM from 'react-dom';

import { Menu } from './Components/Header/Menu/Menu.js';
import { Main } from './Components/Main/Main.js';
import { Footer } from './Components/Footer/Footer.js';

const rootEl = document.querySelector('#root');

class App extends React.Component {
  render () {
    return (
      <div>
        <Menu />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, rootEl);


