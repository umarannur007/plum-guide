import React from 'react';
import Icon from "../../Components/Icon";
import "./index.scss"

const Navigation = () => {
  return (
    <nav className={"navigation"}>
      <div className="navigation__left">
        <div className="navigation__toggle">
          <Icon name={"icon-menu6"} />
        </div>
        <ul className="navigation-list">
          <li className="navigation-list__item">
            <a href="#" className="navigation-list__link navigation-list__link--active">HOMES</a>
          </li>
          <li className="navigation-list__item">
            <a href="#" className="navigation-list__link">HOSTS</a>
          </li>
        </ul>
      </div>
      <div className="navigation__middle">
        <span className={"logo"}>PLUM GUIDE</span>
      </div>
      <div className="navigation__right">
        <ul className="navigation-list">
          <li className="navigation-list__item">
            <a href="#" className="navigation-list__link">Need help?</a>
          </li>
          <li className="navigation-list__item">
            <a href="#" className="navigation-list__link">Login</a>
          </li>
        </ul>
        <div className="navigation__search">
          <Icon name={"icon-search1"}/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;