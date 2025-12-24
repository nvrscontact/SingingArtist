import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
        <h1>Pagina Equivocada</h1>
        <Link to="/">Regresar</Link>
    </section>
  )
}

export default NotFound