import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 20px;

  > div > p { 
    text-align: center;
    font-weight: 700;
    color: #8FA7B2;
    margin: 40px 20px 0 
  }

  @media(min-width: 900px){
    margin-top: 0;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    > div > p { 
      font-size: 1.2em;
    }
    
  }
`

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >small {
    margin-top: 30px;
    color: #8FA7B2;
    font-weight: 600;
  }

  >button {
    margin: 30px;
    width: 50vw;
    max-width: 250px;
    height: 30px;
    border-radius: 10px;
    font-family: 'Nunito';
    background: none;
    border: 1px solid #21C4CE;
    color: #21C4CE;
  }
`

export const InputArea = styled.div`
  width: 80%;
  height: 50px;
  position: relative;
  margin-top:30px;
  max-width: 300px;

  > label {
    position: absolute;
    height: 100%;
    width: 100%;
    padding-top: 20px;
    padding-left: 10px;
    overflow: hidden;
    transition: all .5s;
    border-bottom: 1px solid rgba(0,0,0,.3);
    color: #787878;

    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      width: 100%;
      background-color: #21C4CE;
      border-radius: 10px;
      transform: translateX(-110%);
      transition: all .4s
    }

  }

  > input {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: none;
    border: 0;
    outline: 0;
    padding-left: 20px;
    padding-top: 12px;

    &:invalid {
      color: red
    }

    &:focus ~ label, &:valid ~ label { 
      color: #21C4CE;
      padding-top: 0;
      padding-left: 0;
      &:after{ 
        transform: translateX(0)
      }
    }
  }
`

export const SocialsNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  > h2 {
    color: #24BDD2;
    font-size: 1.1em;
    text-align: left;
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  >h1 {
    color: #24BDD2;
    text-align: center;
    font-size: 1.4em
  }
  
  > div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    
    a {
    
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      width: 40px;
      height: 40px;
    }

    .whatsapp-button { 
      background-color: #00BE9C;
      color:#fff;
      font-size: 1.3em;
    }

    .linkedin-button {
      background-color: #24BDD2;
      color: #fff;
      font-size: 1.3em;
      margin: 10px;
    }
  } 
`