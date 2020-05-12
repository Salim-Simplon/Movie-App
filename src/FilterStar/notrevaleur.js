import React from "react";
import "./notrevaleur.css";

class Mov extends React.Component {
  state = {
    filter: 0,
    films: [
      {
        name: "My Spy",
        role: "ACTION",
        avis: "★★★★★",
        info: "https://dpstreaming.vip/my-spy-hdrip-streaming-telecharger/",
        image:
          "https://4.bp.blogspot.com/-_dBbh5u8yYw/XrKlra3G60I/AAAAAAAAJbg/OdwoBi7OnGYJPzgctWovSUxuvQViLqZGwCK4BGAYYCw/s1600/ee.jpg",
      },
      {
        name: "The Demon Inside",
        role: "HORROR",
        avis: "★★★",
        info:
          "https://dpstreaming.vip/the-demon-inside-bdrip-streaming-telecharger/",
        image:
          "https://2.bp.blogspot.com/-FNxYCmwO0N4/Xnn37fzhb5I/AAAAAAAAIvU/FQyiwZk5R3gDsvqSxlBAsAnhJpVA8z5jgCK4BGAYYCw/s1600/QFkjT.png",
      },
      {
        name: "Aladdin",
        role: "AVENTURE",
        avis: "★★",
        info: "https://dpstreaming.vip/aladdin-tc-streaming-telecharger/",
        image:
          "https://1.bp.blogspot.com/-WZwjRxEQ-to/XPkECd2s6SI/AAAAAAAAE7c/Mg-YfazZShwHIXWI6BVSV_pWV-S2_OeCwCK4BGAYYCw/s1600/A9rg0.jpg",
      },
      {
        name: "Scandale",
        role: "DRAME",
        avis: "★★★",
        info: "https://dpstreaming.vip/scandale-dvdscr-streaming-telecharger/",
        image:
          "https://2.bp.blogspot.com/-LJjakQnQH_4/XihEym8BPlI/AAAAAAAAH4o/R0qm6sy-kqIR4Hg7zJcDGOT8bFoUYV0eACK4BGAYYCw/s1600/rYJ1j.jpg",
      },
      {
        name: "Bloodshot",
        role: "ACTION",
        avis: "★★★★",
        info: "https://dpstreaming.vip/bloodshot-hdrip-streaming-telecharger/",
        image:
          "https://3.bp.blogspot.com/-o63yuRDIFHM/XnstmnUDa-I/AAAAAAAAIv4/lNq_iTO7yJsWI7MnpsnDyVkPbJ__SjmEQCK4BGAYYCw/s1600/P8py1.jpg",
      },
      {
        name: "Star Wars: L’Ascension de Skywalker",
        role: "AVENTURE",
        avis: "★★",
        info:
          "https://dpstreaming.vip/star-wars-lascension-de-skywalker-hdts-md-streaming-telecharger/",
        image:
          "https://2.bp.blogspot.com/-eIePgQ3WGtY/XfuS8UDft3I/AAAAAAAAHeY/9m_qyUzxEIYCzeYfdfGcwg0a0ZGEumzgwCK4BGAYYCw/s1600/IOZoH.jpg",
      },
      {
        name: "The Boy II",
        role: "HORROR",
        avis: "★★★",
        info:
          "https://dpstreaming.vip/the-boy-ii-hdts-md-streaming-telecharger/",
        image:
          "https://1.bp.blogspot.com/-ycppJ00BJNU/XlfQAIJvOjI/AAAAAAAAIV0/cUuYrs0Wkt8UQjEu9yHJEdt4pubfQiBXACK4BGAYYCw/s1600/R6UKm.jpg",
      },
      {
        name: "Le Prince Oublié",
        role: "AVENTURE",
        avis: "★★★",
        info:
          "https://dpstreaming.vip/le-prince-oublie-bdrip-streaming-telecharger/",
        image:
          "https://2.bp.blogspot.com/-LLHG4rDXxXo/Xo8QL4YxC1I/AAAAAAAAI_U/KnugUt2CouQcZWUKQsdgQTECD2JYekkBwCK4BGAYYCw/s1600/ULvT8.jpg",
      },
    ],
  };

  setFilter = (star) => {
    this.setState({ filter: star });
  };

  render() {
    const dataToRender = this.state.filter
      ? this.state.films.filter((item) => item.avis.length >= this.state.filter)
      : this.state.films;

    return (
      <div>
        <div className="container">
          <h2 className="titre">Movies</h2>
          <input />
          <div className="rating">
            <a href="javascript:void(0)" onClick={(e) => this.setFilter(5)}>
              ★
            </a>
            <a href="javascript:void(0)" onClick={(e) => this.setFilter(4)}>
              ★
            </a>
            <a href="javascript:void(0)" onClick={(e) => this.setFilter(3)}>
              ★
            </a>
            <a href="javascript:void(0)" onClick={(e) => this.setFilter(2)}>
              ★
            </a>
            <a href="javascript:void(0)" onClick={(e) => this.setFilter(1)}>
              ★
            </a>
          </div>
          <div className="top">
            {dataToRender.map((item) => (
              <div className="section" key={item.avis}>
                <a href="#6" title="Ajouter aux favoris" className="fav">
                  ☆
                </a>
                <img className="photo" src={item.image} alt="moviepic" />
                <h3>{item.name}</h3>
                <input type="text" value={item.role}></input>
                <div class="rating2">
                  <a href="#7" title="Avis du public">
                    {item.avis}
                  </a>
                </div>
                <p>
                  <a href={item.info}>[Voir]</a>
                </p>
              </div>
            ))}
          </div>
          <div className="Ajout">
            <a href="#8" title="Ajouter un film">
              +
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Mov;
