import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 20px;

  > h1 {
    font-size: 22px;
    margin:20px;
    color: #21EFFC;
  }



  @media(min-width: 900px){
    margin-top: 0;
    width: 70%;    

    >h1 { 
      margin: 30px 5%;
    }
    
    
  }

  
  
`

export const FormContainer = styled.div`
  margin: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  
  >img{ 
    display: none;
  }

  @media(min-width: 900px){
    border: 1px solid #21EFFC;
    background-color: #21EFFC10;

    >img { 
      display: block;
      margin-bottom: 60px
    }
  }


`



export const Form = styled.form`
  display: flex;
  /* flex-grow: 1; */
  flex-direction: column;

  >input { 
    height: 40px;
    width: 80vw;
    max-width: 300px;
    border-radius: 7px;
    margin: 5px auto;
    border: 1px solid #DBDBDB;
    padding-left: 20px;
    outline: none;
    font-size: 16px;
    background-image: linear-gradient(35deg, #21EFFC80, #fff  );
    background-position: 0 100px ;
    background-repeat: no-repeat; 

    transition: all .3s ease-in-out;
    
    &:valid {
      border-color: #21EFFC;
      background-position: 0 0 ;

    }
  }

  > textarea {
    position: relative;
    width: 80vw;
    max-width: 300px;
    resize: none;
    margin: 5px auto;
    border: 1px solid #DBDBDB;
    border-radius: 10px;
    padding: 20px;
    height:100px;
    outline: none;
    font-weight: 700;
    background-image: linear-gradient(35deg, #21EFFC, #21EFFC40  );
    background-position: 0 100px ;
    background-repeat: no-repeat; 

    transition: all .3s ease-in-out;
    
    &:valid {
      border-color: #21EFFC;
      background-position: 0 0 ;

    }
  }


  > button { 
    height: 30px;
    width: 100px;
    margin: 20px auto;
    border-radius: 5px;
    background: none;
    color: #21EFFC;
    font-weight: 600;
    font-size: 18px;
    border: 2px solid #21EFFC;

  }
`


export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;

    > a { 
      text-decoration: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      padding: 0px 5px;
      border-radius: 7px; 
      color: #fff;
      background-repeat: no-repeat;
    svg { 
      font-size: 26px;
      margin: 5px;       
    }    
  }

  .linkedin-button {
    border: 1px solid #0591CB;
    background-image: linear-gradient(-35deg, #0591CB, #0591CB09);

    > svg {
      color: #0591CB
    }
  }

  .whatsapp-button { 
    border: 1px solid #4ACA59;
    background-image: linear-gradient(-35deg, #4ACA59, #4ACA5909);
    
    > svg {
      color: #4ACA59
    }      
  }

  @media(min-width: 900px) {
    justify-content: flex-start;
    padding-left: 12%;

    > a,.whatsapp-button, .linkedin-button {
      background-position: 0 60px;
      color: #8FA7B2; 
      transition: all .5s;
      &:hover {
        background-position: 0 0;
        color: white;
        
      }
      
    }

    
  }
  
`