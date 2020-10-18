import React from 'react';
import { Link } from 'react-router-dom';

const LinkMenu = (props) => {
  return (
    <li className="nav-list">
      <Link className="nav-link" to={props.src}>
        {props.titulo}
      </Link>
    </li>
  )
};

export default LinkMenu;