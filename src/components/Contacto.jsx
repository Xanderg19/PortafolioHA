import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { Outlet } from 'react-router-dom';
import '../style/style.css'
const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const formRef = useRef();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    // Configura Email.js para enviar el correo electrónico
        emailjs
          .send(
            'service_4fjmv6a',
            'template_hj5c09w',
            {
              nombre: formData.name,
              email: formData.email,
              message: formData.message,
            },
            "7b9JjO7Qa3zM-o9PF"
          )
          .then(
            (response) => {
              console.log('Mensaje enviado con éxito:', response);
            },
            formRef.current.reset(),
            setFormData({
              name: '',
              email: '',
              message: '',
            }),

            (error) => {
              console.error('Error al enviar el mensaje:', error);
            }
          );
      };
  return (
    <section id='contacto' className='fondo' > 
    <div className='form'>
        <h2 className='form-title'>Contacto</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className='form-container'>
                <div className='form-group'>
                    <input className='form-input' type="text" id='name' name='name' placeholder=' ' value={formData.name} onChange={handleChange} required />
                    <label htmlFor='name' className='form-label'  >Nombre:</label>
                    <span className='form-line'></span>
                </div>
              
                <div className='form-group'>
                <input  className='form-input' id="email" name='email' type="email" placeholder=' ' required value={formData.email} onChange={handleChange} />
                <label htmlFor='email'  className='form-label' >Email:</label>
                    <span className='form-line'></span>
                </div>

                <div className="form-group">
                    <textarea id='mensaje' className='form-input' placeholder=' ' name="message" rows="10"  value={formData.message} onChange={handleChange} required>
                    </textarea>
                    <label htmlFor='message' className='form-label'>Mensaje:</label>
                    <span className='form-line'></span>
                </div>

                <input className='form-submit' type="submit" value="Enviar" />
            </div>
          
        

          
        </form>

        <section>
            <Outlet/>
        </section>
    </div>
     </section>
  )
}

export default Contacto
  