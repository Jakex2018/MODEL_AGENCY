import React from "react";
import { useState } from "react";
import validator from "validator";
const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState({});

  const handleReset = (e) => {
    setNombre("");
    setEmail("");
    setPhone("");
    setInstagram("");
    setMensaje("");
    setErrors("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formulario");
    try {
      const newErrors = {};
      if (!nombre) {
        newErrors.nombre = "the name is required";
      }
      if (!email) {
        newErrors.email = "the email is required";
      }
      if (!phone) {
        newErrors.phone = "the phone is required";
      }
      if (!instagram) {
        newErrors.instagram = "instagram user is required";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      if(!validator.isEmail(email) || !validator.isFQDN(email.split('@')[1])){
        setErrors({
          ...errors,
          email:'Please, enter a valid email'
        })
        return
      }
      if(!validator.isMobilePhone(phone, 'any')){
        setErrors({
          ...errors,
          phone:'Please, enter a valid number phone'
        })
        return
      }
      if(!validator.isLength(mensaje, {max:200})){
        setErrors({
          ...errors,
          phone:''
        })
        return
      }

      const response = await fetch("https://model-agency-rouge.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          phone,
          instagram,
          mensaje,
        }),
      });
      ///const data =await response.json()
      if (response.ok) {
        alert("¡Registro Exitoso!");
        handleReset();
        window.location.href= '/';
      } else {
        alert("Error al enviar formulario");
      }
    } catch (error) {
      alert("Error en el servidor");
    }
  };
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} >
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          {errors.nombre && (
            <span className="error-message">{errors.nombre}</span>
          )}
          <label htmlFor="nombre">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
          <label htmlFor="nombre">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ingresa tu numero de telefono"
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
          <label htmlFor="nombre">Instagram:</label>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="Ingresa tu  usuario de instagram"
          />
          {errors.instagram && (
            <span className="error-message">{errors.instagram}</span>
          )}
          <label htmlFor="nombre">Mensaje (Opcional):</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          >
            Message
          </textarea>
          <button className="secondary-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
