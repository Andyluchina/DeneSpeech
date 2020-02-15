import React from "react";
import LeftContainer from "./leftContainer.js";
import RightContainer from "./rightContainer.js";

class Template2 extends React.Component {

   render() {
    return (
        <div style = {styles.template2} >
            <LeftContainer/>
            <RightContainer/>
        </div>
    )
 }
}

const styles = {
    template2: {
        background: '#F2F2F2',
        margin: '0'
    }
}
export default Template2;
