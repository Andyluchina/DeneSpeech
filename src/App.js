import React from "react";
import "./App.css";
import axios from "axios";
import LoadingScreen from "react-loading-screen";
import Loading from "./loading.js";
import NotFoundPage from "./NotFoundPage.js";
import Page from "./page.js";

class App extends React.Component {
  componentWillMount() {
    this.parseUrl();
    //set to loading page
    //request mysql
    //turn off the loading
    //load the page
  }

  state = {
    path: null,
    configuration: null
  };

  //have to use this method to redirect pages
  redirect = path => {
    this.setState({ path: null, configuration: null });
    this.props.history.push(path);
  };

  parseUrl = async () => {
    if (this.state.path === null) {
      //console.log(this.props.location.pathname.split("/"));
      var path = this.props.location.pathname.split("/");
      for (var i = 0; i < path.length; i++) {
        if (path[i] === "") {
          path.splice(i, 1);
        }
      }

      this.setState({ path: path.join("/") });
      const res = await axios.get("/index.php?path=" + path.join("/"));
      console.log(res);
      if (res.data === null) {
        this.setState({
          configuration: "not found"
        });
      } else {
        this.setState({
          configuration: res.data.configuration
        });
      }
      //trying to find config for that page
    }
  };

  render() {
    if (this.state.configuration === null) {
      return <Loading />;
    } else if (this.state.configuration === "not found") {
      return <NotFoundPage />;
    } else {
      //  return <div>{this.state.path} is found in the database</div>;
      return <Page />;
    }
  }
}

export default App;
