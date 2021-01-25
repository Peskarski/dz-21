import React from 'react';
import './Footer.css';
import { Link } from './Link/Link.js';
import { Text } from './Text/Text.js';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="links">
          <Link href="" content="Реклама" />
          <Link href="" content="Размещение в каталоге" />
          <Link href="" content="Вакансии" />
          <Link href="" content="Политика конфиденциальности" />
        </div>
        <div className="text">
          <Text content="created by Vadim Peskarski" />
        </div>
      </footer>
    )
  }
}

export { Footer };
