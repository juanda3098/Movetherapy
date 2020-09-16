import React , { useState } from 'react'

import Logout from '../../Img/Admin/logout.svg';

import './Header.scss'

function Header(props) {

    const [title] = useState("Panel de control");
    const [admin] = useState("Diana Mesa");
    // const [title, setTitle] = useState("Panel de control");
    // const [admin, setaAmin] = useState("Diana Mesa");

    // const outputEvents = () => {
    //     setTitle();
    //     setaAmin();
    // }

    return(
        <div className="o-headerA-container">
            <h2 className="o-title-headerA">{title}</h2>
            <div className="o-label-headerA">
                <p>{admin}</p>
                <img src={Logout} alt="" className="o-headerA-logout" onClick={props.changeHome} />
            </div>
        </div>
    )
}

export default Header;