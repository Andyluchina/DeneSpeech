import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  componentWillMount() {
    this.parseUrl();
  }

  state = {
    path: null,
    configuration: null
  };

  //have to use this method to redirect pages
  redirect = path => {
    this.setState({
      path: null,
      configuration: null
    });
    this.props.history.push(path);
  };

  parseUrl = () => {
    if (this.state.path === null) {
      console.log(this.props.location.pathname.split("/"));
      var path = this.props.location.pathname.split("/");
      for (var i = 0; i < path.length; i++) {
        if (path[i] === "") {
          path.splice(i, 1);
        }
      }
      this.setState({
        path: path
      });
      //trying to find config for that page
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Page url:
            {this.state.path.map(item => {
              return <p>{item}</p>;
            })}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
