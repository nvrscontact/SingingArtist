import React from 'react'
import { Link } from 'react-router-dom'

function One_Button({url,msg,img}) {
  return (
    <>
      <button className='one_Button'>
        <ul>
            <li>
                <Link to={url}>{msg} </Link>
            </li>
        </ul>
        </button>  
    </>
  )
}

export default One_Button