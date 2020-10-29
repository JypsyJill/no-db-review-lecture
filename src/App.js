import "./App.css";
import React from "react";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Team from "./components/Team";

import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      team: [],
    };

    this.addToTeam = this.addToTeam.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/team")
      .then((res) => {
        this.setState({ team: res.data });
      })
      .catch((err) => console.log(err));
  }

  addToTeam(id) {
    axios
      .post(`/api/team/${id}`)
      .then((res) => {
        this.setState({ team: res.data });
      })
      .catch((err) => console.log(err));
  }

  removeFromTeam = (index) => {
    axios
      .delete(`/api/team/${index}`)
      .then((res) => {
        this.setState({ team: res.data });
      })
      .catch((err) => console.log(err));
  };

  editNickname = (index, nickname) => {
    axios
      .put(`/api/team/${index}`, { nickname })
      .then((res) => {
        this.setState({ team: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <main className="main-box">
          <Team
            team={this.state.team}
            removeFromTeam={this.removeFromTeam}
            editNickname={this.editNickname}
          />
          <Pokedex addToTeam={this.addToTeam} />
        </main>
      </div>
    );
  }
}

export default App;
