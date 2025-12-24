import React from 'react'
import { Link } from 'react-router-dom'
import One_Button from './One_Button'

function Article_Albums({title,subtitle,img,date}) {
  return (
    <>
      <section className='articleAlbums'>
        <h1>{title}</h1>
        <span>{subtitle}</span>

        <div>
           <img src={img} alt="" />
          <span>{date}</span>
        </div>

      <One_Button url={""} msg={"Listen"} img={"/img/arrowLink.svg"}/>
       

      </section>
    </>
  )
}

export default Article_Albums