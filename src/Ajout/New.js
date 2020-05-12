import React, { Component } from "react";
import "./New.css";

export default class Add extends Component {
  state = {
    image: "",
    titre: "",
    genre: "",
    star: "",
    url: "",
  };

  Change = (i) => {
    this.setState({ image: i.target.value });
  };

  Change1 = (m) => {
    this.setState({ titre: m.target.value });
  };

  Change2 = (n) => {
    this.setState({ genre: n.target.value });
  };

  Change3 = (e) => {
    let exp = e.target.value;

    if (exp == 1) {
      exp = "★";
    } else if (exp == 2) {
      exp = "★★";
    } else if (exp == 3) {
      exp = "★★★";
    } else if (exp == 4) {
      exp = "★★★★";
    } else if (exp == 5) {
      exp = "★★★★★";
    } else {
      alert("Entrez un nombre correct");
      exp = "";
    }

    this.setState({ star: exp });
  };

  Change4 = (u) => {
    this.setState({ url: u.target.value });
  };

  render() {
    return (
      <div className="appli">
        <div className="first">
          <h1>Nouveau Film</h1>
          <div className="second">
            <form>
              <p>
                Saisir le lien de la Couverture :
                <input
                  type="text"
                  id="text"
                  placeholder="Couverture"
                  value={this.state.image}
                  onChange={this.Change}
                />
              </p>
              <p>
                Saisir le titre :
                <input
                  type="text"
                  id="name"
                  placeholder="titre"
                  value={this.state.titre}
                  onChange={this.Change1}
                />
              </p>
              <p>
                Saisir le genre du film :
                <input
                  type="text"
                  id="name"
                  placeholder=""
                  value={this.state.genre}
                  onChange={this.Change2}
                />
              </p>
              <p>
                Saisir l'avis du public :
                <input
                  type="text"
                  id="nombre"
                  placeholder="Avis"
                  value={this.state.star}
                  onChange={this.Change3}
                />
              </p>
              <p>
                Saisir le lien du film :
                <input
                  type="text"
                  id="text"
                  placeholder="URL"
                  value={this.state.url}
                  onChange={this.Change4}
                />
              </p>

              <div className="form-actions">
                <button className="btn btn-primary btn-block">
                  Raffrechir
                </button>
              </div>
            </form>
          </div>
        </div>


        <div className="third">
        <div className="section">
          <a href="#" title="Ajouter aux favoris" className="fav">
            ☆
          </a>
          <img className="photo" src={this.state.image} alt="moviepic" />
          <h3>{this.state.titre}</h3>
          <p>{this.state.genre}</p>
          <div class="rating2">
            <a href="#" title="Avis du public">
              {this.state.star}
            </a>
          </div>
          <p>
            <a href={this.state.url}>[Voir]</a>
          </p>
        </div>
        </div>
      </div>
    );
  }
}

/*




              <div className="card">
          <div>
            <img src="/image/Salim.jpeg" alt="" />
          </div>

          <div className="cardNumber">{this.state.genre}</div>

          <div className="cardInfo">
            <div className="cardInfoName">
              <div className="cardInfoLabel">NOM ET PRENOM</div>
              <div className="name">{this.state.titre}</div>
            </div>

            <div className="cardInfoExpiry">
              <div className="cardInfoLabel">Avis</div>
              <div className="date">{this.state.star}</div>

              <div className="cardInfoLabel">Voir</div>
              <div className="date">{this.state.url}</div>
            </div>
          </div>
        </div>
              */
