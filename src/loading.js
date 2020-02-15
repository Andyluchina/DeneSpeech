import React from "react";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

class Loading extends React.Component {

   render() {
    return (
       <div style={{
               position: 'absolute',
               left: '50%',
               top: '50%',
               transform: 'translate(-50%, -50%)'
           }}>
             <ReactLoading type={"bars"} color={"black"} />
       </div>
    )
 }
}

export default Loading;
