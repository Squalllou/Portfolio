import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sanitizeInput = (value) =>
    value.replace(/<script.*?>.*?<\/script>/gi, '').replace(/<\/?[^>]+(>|$)/g, '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(formData.email)) { alert("Email invalide"); return; }
    console.log('Formulaire soumis :', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>N'hésitez pas à me <span className="special-word">contacter</span></h2>
      <p>Je me ferai un plaisir de vous répondre</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className="visually-hidden">Nom</label>
        <input
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Votre nom" 
          required 
        />
        <label htmlFor="email" className="visually-hidden">Email</label>
        <input 
          id="email"
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Votre adresse Email" 
          required 
        />
        <label htmlFor="message" className="visually-hidden">Message</label>
        <textarea 
          id="message"
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          rows="5" 
          placeholder="Votre message" 
          required 
        ></textarea>

        <button type="submit">Envoyer</button>
        {submitted && <p className="success-msg">Message envoyé !</p>}
      </form>
    </section>
  );
}

export default Contact;