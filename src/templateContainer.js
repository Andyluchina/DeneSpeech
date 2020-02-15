import React from "react";
import Template1 from "./template1.js";
import Template2 from "./template2.js";

class templateContainer extends React.Component {

   render() {
    return (
        <div style = {styles.templateContainer} >
            <Template1/>
        </div>
    )
 }

}

const styles = {
    templateContainer: {
        background: 'white'
    }
}

export default templateContainer;
