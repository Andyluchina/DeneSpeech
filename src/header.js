import React from "react";

class Head extends React.Component {

   render() {
    return (
        <div style = {styles.header} >
            <h1> HEADER </h1>
        </div>
    )
 }

}

const styles = {
    header: {
        display: "inline-block",
        backgroundColor: "white",
        height: "20%",
        width: '100%',
        marginBottom: '10%',
        textAlign: 'center',
        clear:'both'
    }
}

export default Head;
