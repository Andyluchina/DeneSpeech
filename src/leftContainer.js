import React from "react";
import LeftComponent from "./leftComponent.js";

class LeftContainer extends React.Component {

   render() {
    return (
        <div style={styles.leftContainer}>
            <LeftComponent/>
            <LeftComponent/>
            <LeftComponent/>
            <LeftComponent/>
         </div>
    )
 }
}

const styles = {
    leftContainer: {
        background: '#F2F2F2',
        width: '25%',
        backgroundColor: '#F2F2F2',
        float:'left'
    }
}


export default LeftContainer;
