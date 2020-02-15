import React from "react";

class LeftComponent extends React.Component {
    render() {
     return (
         <div style={styles.leftComponent}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
     )
  }
}

const styles = {
    leftComponent: {
        background: 'white',
        width: '100%',
        backgroundColor: 'white',
        padding: '10px',
        marginBottom: '40px'
    }
 }

export default LeftComponent;
