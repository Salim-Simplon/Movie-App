import React from "react";
import "./notrevaleur.css";
import Add from "../Ajout/New";

class Mov extends React.Component {
  state = {
    loader: true,
    filterRate: 1,
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

    tab: {
      name: "",
      role: "",
      avis: "",
      info: "",
      image: "",
    },

    favorites: [],

    identities: {
      login: "",
      mail: "",
      pass: "",
    },

    verify: {
      login: "",
      pass: "",
    },
  };

  //Add Movie

  Change = (i) => {
    let newImage = i.target.value;
    this.setState(Object.assign(this.state.tab, { image: newImage }));
    console.log(this.state.tab.image);
  };

  Change1 = (m) => {
    let newName = m.target.value;
    this.setState(Object.assign(this.state.tab, { name: newName }));
    console.log(this.state.tab.name);
  };

  Change2 = (n) => {
    let newRole = n.target.value;
    this.setState(Object.assign(this.state.tab, { role: newRole }));
    console.log(this.state.tab.role);
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
    this.setState(Object.assign(this.state.tab, { avis: exp }));
    console.log(this.state.tab.avis);
  };

  Change4 = (u) => {
    let newInfo = u.target.value;
    this.setState(Object.assign(this.state.tab, { info: newInfo }));
    console.log(this.state.tab.info);
  };

  movieAdd = () => {
    this.state.films.push(this.state.tab);
  };

  // Delete Movie

  Delete = (item) => {
    let films = this.state.films;
    films = films.filter((element) => element.image !== item.image);
    console.log("film", films);
    this.setState({ films });
  };

  /* Edit Movies

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({items: items})
  }

// in the input we add (onChange={(e)=>this.setUpdate(e.target.value, item.key)})

*/
  // Favorite Movies

  Favorite = (item) => {
    this.setState((prevState) => ({
      favorites: prevState.favorites.concat(item),
    }));
  };

  //Search barre

  handleChange = (event) => {
    this.setState({ filterName: event.target.value });
  };

  //Search stars

  setFilter = (star) => {
    this.setState({ filterRate: star });
  };

  // Verif Identity

  setIdentity1 = (e) => {
    let newLogin = e.target.value;
    this.setState(Object.assign(this.state.identities, { login: newLogin }));
    console.log(this.state.identities.login);
  };

  setIdentity2 = (e) => {
    let newMail = e.target.value;
    this.setState(Object.assign(this.state.identities, { mail: newMail }));
    console.log(this.state.identities.mail);
  };

  setIdentity3 = (e) => {
    let newPass = e.target.value;
    this.setState(Object.assign(this.state.identities, { pass: newPass }));
    console.log(this.state.identities.pass);
  };

  setVerify1 = (e) => {
    let newLogin = e.target.value;
    this.setState(Object.assign(this.state.verify, { login: newLogin }));
    console.log(this.state.verify.login);
  };

  setVerify2 = (e) => {
    let newPass = e.target.value;
    this.setState(Object.assign(this.state.verify, { pass: newPass }));
    console.log(this.state.verify.pass);
  };

  verIdentity = () => {
    if (
      this.state.verify.login.value === this.state.identities.login.value &&
      this.state.verify.pass.value === this.state.identities.pass.value
    )
      return alert("Hello! In Your Movie Space!");
    else return alert("Opps! You Should Verrify Your Informations!");
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loader: false });
    }, 5000);
  };

  render() {
    const { filterName, films, filterRate } = this.state;
    return (
      <div>
        <div className="container">
          <h2 className="titre">Movies</h2>
          <input value={filterName} onChange={this.handleChange} />
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
          {this.state.loader ? (
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className="top">
              {films
                .filter((item) => {
                  if (!filterRate) return item;
                  else if (filterRate) {
                    return item.avis.length >= filterRate;
                  }
                })
                .filter((item) => {
                  if (!filterName) return item;
                  else if (filterName)
                    return item.name
                      .toLowerCase()
                      .includes(filterName.toLowerCase());
                })
                .map((item) => (
                  <div className="section" key={item.avis} key={Math.random()}>
                    <a
                      href="#6"
                      title="Ajouter aux favoris"
                      className="fav"
                      onClick={() => this.Favorite(item)}
                    >
                      ❤
                    </a>
                    <img className="photo" src={item.image} alt="moviepic" />
                    <h3>{item.name}</h3>
                    <input
                      className="gen"
                      type="text"
                      id={item.key}
                      defaultValue={item.role}
                    />

                    <div className="rating2">
                      <a href="#7" title="Avis du public">
                        {item.avis}
                      </a>
                    </div>
                    <p>
                      <a className="voir" href={item.info}>
                        [Voir]
                      </a>
                    </p>
                    <div>
                      <button
                        title="Supprimer un film"
                        className="bntc"
                        onClick={() => this.Delete(item)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
          <Add
            movieAdd={this.movieAdd}
            Change={this.Change}
            Change1={this.Change1}
            Change2={this.Change2}
            Change3={this.Change3}
            Change4={this.Change4}
          />
          <div>
            <h2 className="titre" id="favoris">
              Movies Favoris
            </h2>
          </div>
          <div className="top">
            {this.state.favorites.map((item) => (
              <div className="section">
                <img className="photo2" src={item.image} alt="moviepic" />
                <h3>{item.name}</h3>
                <div>{item.role}</div>
                <div className="rating2">
                  <a href="#7" title="Avis du public">
                    {item.avis}
                  </a>
                </div>
                <p>
                  <a className="voir" href={item.info}>
                    [Voir]
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Mov;
