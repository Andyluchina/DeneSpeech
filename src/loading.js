import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

class Loading extends React.Component {

   constructor(props){
      super(props);
      this.state = {
      done: true
    };

   }

   componentDidMount() {
       const loading = this.props.loading;
       if(loading != null){
           this.setState({ done: true });
       }
   }

   render() {
    return (
       <div>
          {!this.state.done ? (
             <ReactLoading type={"bars"} color={"white"} />
          ) : (
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Page url:
                {this.props.path.map(item => {
                  return <p>{item}</p>;
                })}
              </a>
          )}
       </div>
    )
 }
}

export default Loading;
