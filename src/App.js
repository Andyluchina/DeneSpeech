import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import LoadingScreen from 'react-loading-screen';
import Loading from "./loading.js";

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
        this.setState({path: null, configuration: null});
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
            path.join("/");
            this.setState({path: path});
            const res = await axios.get("/index.php", path);
            console.log(res);
            //trying to find config for that page
        }
    };
    render() {
        if (this.state.configuration == null) {
            return (<div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <Loading/>
            </div>);
        } else {
            return (<div>
                <img src={logo} className="App-logo" alt="logo"/>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Page url: {
                        this.state.path.map(item => {
                            return <p>{item}</p>;
                        })
                    }
                </a>
            </div>)
        }
    }

}

export default App;
