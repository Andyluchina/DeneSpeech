import React from "react";

class Page extends React.Component {

   render() {
    return (
       <div style={styles.page}>
            <h1>hii</h1>
       </div>
    )
 }
}

const styles = {
    page: {
        display: "inline-block",
        backgroundColor: "red",
        height: "100%",
        position: 'absolute',
        left: '10%',
        right: '10%'
    }
}
export default Page;
