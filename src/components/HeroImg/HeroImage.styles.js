import styled from 'styled-components'

export const Wrapper = styled.div`
  background: linear-gradient(to bottom , rgba(0,0,0,0)  41% , rgba(0,0,0,0.65) 100%), url(${({imgae}) => imgae}) , var(--darkGrey);
  background-size: 100% , cover;
  background-position: center;
  height: 600px; 
  position: realtive;
  animation: Hero 1s;

  @keyframes Hero {
      from{
          opacity : 0 ;
      }
      to {
          opacity: 1;
      }
  }
`

export const Content = styled.div`
  padding: 20px ;
  max-width: var(--max-width);
  margin: 0 auto;

`

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1{
      font-size: var(--fontSuperBig);
      cursor: pointer;
     
      width: 650px;
      
     
      @media screen and ( max-width : 720px){
          font-size: var(--fontBig);
      }
  }
  h1::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #CCCBD1;
    transition: width .3s;
}

h1:hover::after {
    width: 100%;
    //transition: width .3s;
}
  p{

    font-size: var(--fontMed);

    @media screen and (max-width : 720px){
        font-size: var (--fontSmall);
    }
  }
`