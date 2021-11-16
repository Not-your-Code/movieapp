import React from 'react';

import RMDBlogo from '../../images/react-movie-logo.svg';
import TMDBlogo from '../../images/tmdb_logo.svg';

import {Wrapper , Content , LogoImg , TMDBLogoImg} from  './Header.styles'

 
  const Header = ()=> (
  
    <Wrapper>
      <Content>
       <LogoImg src={RMDBlogo}/>
       <TMDBLogoImg src= {TMDBlogo}/>
      </Content>      
   </Wrapper>

  );

  export default Header;

