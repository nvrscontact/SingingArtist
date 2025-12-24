export default function Hero(){
    return(
        <section className="hero">
            <img src="/img/presentationArtist.jpg" alt="" />

            <div className="float">
                <h1>Folklore</h1>
                <span>Album of the year</span>
            </div>

            <section className="float">
                <ul className="billboard">
                    <li>#1 Spotify USA</li>
                    <li>#1 Spotify Canada </li>
                    <li>#2 Apple Music</li>
                </ul>
                <button>
                    Stream now
                    <a href=""><img src="/img/arrowLink.svg" alt="" /></a>
                </button>
            </section>

        </section>
    )
}