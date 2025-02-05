import React from "react";
import './Playlist.css';
import imgCard1 from "../../assets/playlist/1.jpeg";
import imgCard2 from "../../assets/playlist/2.png";
import imgCard3 from "../../assets/playlist/3.jpeg";
import imgCard4 from "../../assets/playlist/4.jpeg";
import imgCard5 from "../../assets/playlist/5.jpeg";
import imgCard6 from "../../assets/playlist/6.jpeg";
import imgCard7 from "../../assets/playlist/7.jpeg";
import imgCard8 from "../../assets/playlist/8.jpeg";
import imgCard9 from "../../assets/playlist/9.jpeg";
import imgCard10 from "../../assets/playlist/10.jpeg";
import imgCard11 from "../../assets/playlist/11.jpeg";
import imgCard12 from "../../assets/playlist/12.jpeg";
import imgCard13 from "../../assets/playlist/13.jpeg";
import imgCard14 from "../../assets/playlist/14.jpeg";
import imgCard15 from "../../assets/playlist/15.jpeg";

const Playlist = (props) => {
  // Váriavel que guarda o horário atual em horas
  const horarioAtual = new Date().getHours();

  let saudacao = "";
  if (horarioAtual >= 5 && horarioAtual < 12) {
    saudacao = "Bom dia";
  } else if (horarioAtual >= 12 && horarioAtual < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa Noite";
  }
  return (
    <div class="playlist-container">
      <div id="result-playlist">
        <div class="playlist">
          {/* BOM DIA | BOA TARDE | BOA NOITE */}
          <h1 id="greeting">{saudacao}</h1>
          <h2 class="session">Navegar por todas as seções</h2>
        </div>


        {/* Lista de cards  */}
        {props.search.length > 0 ? null :
          <div class="offer__scroll-container">
            <div class="offer__list">
              <section class="offer__list-item">
                {/* <!-- CARD 1 --> */}
                <a href="" class="cards">
                  <div class="cards card1">
                    <img src={imgCard1} alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

                {/* <!-- CARD 2 --> */}
                <a href="" class="cards">
                  <div class="cards card2">
                    <img src={imgCard2} alt="" />
                    <span>Feitos para você</span>
                  </div>
                </a>

                {/* <!-- CARD 3 --> */}
                <a href="" class="cards">
                  <div class="cards card3">
                    <img src={imgCard3} alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>

                {/* <!-- CARD 4 --> */}
                <a href="" class="cards">
                  <div class="cards card4">
                    <img src={imgCard4} alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                {/* <!-- CARD 5 --> */}
                <a href="" class="cards">
                  <div class="cards card5">
                    <img src={imgCard5} alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

                {/* <!-- CARD 6 --> */}
                <a href="" class="cards">
                  <div class="cards card6">
                    <img src={imgCard6} alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                {/* <!-- CARD 7 --> */}
                <a href="" class="cards">
                  <div class="cards card7">
                    <img src={imgCard7} alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

                {/* <!-- CARD 8 --> */}
                <a href="" class="cards">
                  <div class="cards card8">
                    <img src={imgCard8} alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                {/* <!-- CARD 9 --> */}
                <a href="" class="cards">
                  <div class="cards card9">
                    <img src={imgCard9} alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                {/* <!-- CARD 10 --> */}
                <a href="" class="cards">
                  <div class="cards card10">
                    <img src={imgCard10} alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                {/* <!-- CARD 11 --> */}
                <a href="" class="cards">
                  <div class="cards card11">
                    <img src={imgCard11} alt="" />
                    <span>Rock</span>
                  </div>
                </a>

                {/* <!-- CARD 12 --> */}
                <a href="" class="cards">
                  <div class="cards card12">
                    <img src={imgCard12} alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                {/* <!-- CARD 13 --> */}
                <a href="" class="cards">
                  <div class="cards card13">
                    <img src={imgCard13} alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                {/* <!-- CARD 14 --> */}
                <a href="" class="cards">
                  <div class="cards card14">
                    <img src={imgCard14} alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                {/* <!-- CARD 15 --> */}
                <a href="" class="cards">
                  <div class="cards card15">
                    <img src={imgCard15} alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
        }
      </div>
      <div id="result-artist">
        <div class="grid-container">
          {props.search.length > 0 && props.artists.map((artist) =>

            <div class="artist-card" id={artist.id}>
              <div class="card-img">
                <img id="artist-img" class="artist-img" src={artist.urlImg} />
                <div class="play">
                  <span class="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div class="card-text">
                <a title="Foo Fighters" class="vst" href=""></a>
                <span class="artist-name" id="artist-name">{artist.name}</span>
                <span class="artist-categorie">Artista</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default Playlist;