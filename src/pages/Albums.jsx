import React from 'react'
import Article_Albums from '../components/subcomponents/Article_Albums'

function Albums() {
  return (
    <>
      <section className='albums'>
        <Article_Albums title={"Red"} subtitle={"Album"} img={"/img/red_album.jpg"} date={"June 2011"} />
        <Article_Albums title={"Folklore"} subtitle={"Deluxe Version"} img={"/img/folklore.jpg"} date={"May 2013"} />
        <Article_Albums title={"Midnights"} subtitle={"New Album"} img={"/img/midnightsAlbum.jpg"} date={"May 2013"} />
        <Article_Albums title={"Style"} subtitle={"Deluxe Version"} img={"/img/style_album.jpg"} date={"May 2013"} />

      </section>
    </>
  )
}

export default Albums