import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderUserBlock from '../HeaderUserBlock/HeaderUserBlock';

function Header(): JSX.Element {
  return (
    <header className='page-header film-card__head'>
      <HeaderLogo />
      <HeaderUserBlock />
    </header>
  );
}

export default Header;
