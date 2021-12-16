
import React from 'react'
import {Link} from 'react-router-dom';

import Helmet from "../../components/Helmet/Helmet";
import './notfound.scss';
const NotFound = () => {

    return(
        <Helmet  title="Not Found">

        <div className="component">
        <div className="not__found">
            <img src={require('../../assets/img/notFound/404-error-page-img-1.png').default} alt="" />
            <p>He wassailers a grief happy heart delphis for their massy scene. He uses however isle.</p>
            
            <Link to='/'>
            <button>Back to home</button>
            </Link>
        </div>
        </div>
        </Helmet>
    )

}

export default NotFound;