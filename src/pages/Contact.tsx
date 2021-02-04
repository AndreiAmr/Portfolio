import React, { FormEvent, useState } from 'react';
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import emailjs, { init } from "emailjs-com";



import { Container, Form, FormContainer, SocialNetworks } from '../styles/pages/contact';
import dataContent from "../data/pages";
import EmailIcon from "../images/emailIcon.svg";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [message, setMessage] = useState<string>();

  init("user_pBCnrjW9bWoLlE0iqAoup");

  async function handleSendEmail(e: FormEvent) {
    emailjs.send("portifolio_email_id", "template_4s219vx", {
      from_name: name,
      message: message,
      from_email: email,
    }) 
  }


  return (
    <Container>
      <h1>Formulário para email</h1>

      <FormContainer>
        <img src={EmailIcon} alt="Email Icone" className="email-icon" />

        <Form action='/'>
          <input type="text" placeholder='Nome' required minLength={3} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder='Email' required onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder="Assunto" required onChange={e => setTitle(e.target.value)} />
          <textarea id="" cols={20} rows={10} placeholder="Mensagem" required minLength={20} onChange={e => setMessage(e.target.value)} ></textarea>

          <button type='submit' onClick={handleSendEmail}> Enviar</button>
        </Form>

      </FormContainer>
      <h1> Redes Sociais </h1>
      <SocialNetworks>

        <a className='linkedin-button' href="https://www.linkedin.com/in/andrei-amaral-327493191/" >
          <FaLinkedin />
          Linkedin
        </a>
        <a className='whatsapp-button' target="_blank" href='https://api.whatsapp.com/send?phone=5511992405312&text=Ol%C3%A1,%20Andrei.%20Vi%20seu%20site%20e%20gostaria%20de%20bater%20um%20papo%20contigo!'> <FaWhatsapp /> WhatsApp </a>
      </SocialNetworks>

    </Container>
  );
}

export default Contact;