import React from "react";

class Head extends React.Component {

   render() {
    return (
        <div style = {styles.header} >
            <div style={styles.top}></div>
            <h1 style={styles.title}><strong>Dene Speech Atlas</strong></h1>
            <div style={styles.tagLine}><em>Seeds for the Future</em></div>
            <div style={styles.nav}></div>
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
        marginBottom: '5%',
        textAlign: 'center',
        clear:'both',
    },
    title: {
        textAlign: 'right',
        fontFamily: 'Avenir',
        color: 'rgb(122, 68, 66)',
        fontSize: '56px',
        textShadow: 'rgba(0, 0, 0, 0.403922) 1px -1px 2px',
        margin: '0 40px',
        paddingTop: '35px'
    },
    tagLine: {
        textAlign: 'right',
        fontSize: '20px',
        color: 'rgb(0, 118, 0)',
        fontFamily: 'Verdana',
        textShadow: 'rgba(0, 0, 0, 0.239216) 1px -1px 2px',
        margin: '0 40px'
    },
    top: {
        width: '100%',
        height: '5px',
        backgroundColor: '#637C9A'
    },
    nav: {
        width: '100%',
        height: '50px',
        backgroundColor: '#637C9A'
    }
}

export default Head;
