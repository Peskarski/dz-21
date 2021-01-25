import React from 'react';
import './Menu.css';
import { MenuEl } from './MenuEl/MenuEl.js';

class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <MenuEl title="Главная" />
        <MenuEl title="Новости" />
        <MenuEl title="Услуги" />
        <MenuEl title="Продукты" />
        <MenuEl title="Портфолио" />
        <MenuEl title="О нас" />
        <MenuEl title="Контакты" />
      </nav>
    )
  }
}

export { Menu };
