import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/add">Ajouter une tâche</Link>
        </li>
        <li>
          <Link to="/edit">Modifier une tâche</Link>
        </li>
        <li>
          <Link to="/delete">Supprimer une tâche</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
