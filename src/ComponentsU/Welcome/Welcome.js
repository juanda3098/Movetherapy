import React from 'react';

import Header from '../Header/Header';

import Logo from '../../Img/Admin/Logo2.png'

import './Welcome.scss';

function Welcome() {
    return (
      <div>
        <Header />
        <div className="o-admin-body">
          <div className="o-body-welcome">
            <img src={Logo} alt="" className="o-img-welcome" />
            <h1 className="o-title-welcome">Rehabilitación física con amor</h1>
            <h2 className="o-title-welcome" style={{marginTop: '2rem'}}>Bienvenido</h2>
            <h4>Juan David Posso Rengifo</h4>
          </div>
        </div>
      </div>
    );
}

export default Welcome