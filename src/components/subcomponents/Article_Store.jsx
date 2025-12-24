import React from 'react'
import { Link } from 'react-router-dom'

function Article_Store({title,subtitle,img,height,button}) {
  return (
    <section className='articleStore'>
        <h1>{title}</h1>
        <span>{subtitle}</span>
        <img src={img} alt="" style={height={height}} />
        <ul>
            <li>
                <Link className='link' to="">{button} <img src="/img/arrowLink.svg" alt="" /></Link>
            </li>
        </ul>
    </section>
  )
}

export default Article_Store