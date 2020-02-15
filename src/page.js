import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import TemplateContainer from "./templateContainer.js";

class Page extends React.Component {

   render() {
    return (
    <div style={styles.container}>
       <div style={styles.page}>
            <Header/>
            <TemplateContainer/>
            <Footer/>
       </div>
     </div>
    )
 }
}

const styles = {
    container: {
        backgroundColor: "#F2F2F2",
        display: "inline-block",
        width:'100%',
        height:'100%',
        padding:'1% 20%',
        clear:'both'
    },
    page: {
        backgroundColor: "#F2F2F2",
        height: "100%",
        clear:'both'
    }
}
export default Page;
