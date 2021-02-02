import React from 'react';
import $ from 'jquery';

import { Container, FormArea, InputArea, SocialsNetworks } from '../styles/pages/contact';
import { FaWhatsapp, FaLinkedin } from "react-icons/fa"

const Contact: React.FC = () => {

  return (
    <Container>
      <div>
        <p> Preencha o formulário abaixo e aguarde que entro em contato! </p>

        <FormArea>
          <InputArea>
            <input type="name" name="name" id="name" required />
            <label htmlFor="name"> Nome </label>
          </InputArea>
          <InputArea>
            <input type="email" name="email" id="email" required />
            <label htmlFor="email"> Email </label>
          </InputArea>
          <InputArea>
            <input type="text" name="title" id="title" required />
            <label htmlFor="title"> Assunto </label>
          </InputArea>
          <InputArea>
            <input type="text" name="body" id="body" required />
            <label htmlFor="body"> Mensagem </label>
          </InputArea>

          <small> * Todos os campos são obrigatórios. </small>

          <button type='submit'> Enviar </button>
        </FormArea>
        
      </div>

      <SocialsNetworks>
        <h2> Ou envie-me uma mensagem em minhas redes sociais =)</h2>
        <div>
          <a className='whatsapp-button' target="_blank" href='https://api.whatsapp.com/send?phone=5511992405312&text=Ol%C3%A1,%20Andrei.%20Vi%20seu%20site%20e%20gostaria%20de%20bater%20um%20papo%20contigo!'> <FaWhatsapp /> </a>
          <a className='linkedin-button' target="_blank" href='https://www.linkedin.com/in/andrei-amaral-327493191/'> <FaLinkedin /> </a>
        </div>


        <h1> Obrigado por ter chegado até aqui!!</h1>
      </SocialsNetworks>

    </Container>
  );
}

export default Contact;