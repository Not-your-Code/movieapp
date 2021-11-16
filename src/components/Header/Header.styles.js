import styled from 'styled-components';
export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  height: 55px;
  user-select: none;
  
`;

export const Content = styled.div`
  display:flex;
  max-width: 180px;
  align-items: center;
  
  justify-content: space-between;
  padding: 20px 0 ;
  margin: 0 auto;
`;

export const LogoImg = styled.img`

width: 200px;
position: absolute;
top: 10px;
left: 20px;
@media screen and (max-width: 500px){
  width: 150px;
}
`;

export const TMDBLogoImg= styled.img`

 width: 100px;
 position: absolute;
 right: 20px;
 top: 10px;
  
 @media screen and (max-width : 500px){
   width: 80px
 }

`;