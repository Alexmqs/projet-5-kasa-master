import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'

//Page d'erreur de redirection en cas de mauvaise URL
function Error() {
   return (
      <div className="error">
         <h1 className="error__code">404</h1>
         <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
         <Link to="/" className="error__link">
            Retourner sur la page d'accueil
         </Link>
      </div>
   )
}

export default Error
