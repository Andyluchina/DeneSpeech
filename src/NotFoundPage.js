import React from 'react';
import pageNotFound from './page-not-found.png';

class NotFoundPage extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <img src={pageNotFound}/>
                <h1>Page Not Found</h1>
            </div>
        )
    }
}
export default NotFoundPage;
