const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
app.use(cors({
  origin:"https://model-agency-frontend.vercel.app"
}));
app.use(express.json());
//ruta recibir correos
app.post("/contact", async(req, res) => {
  const { nombre, email, phone, instagram, mensaje } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
        user:'pusugu01@gmail.com',
        pass:'iuitagylgrfhvcrv'
      },
    })
    const mailOptions = {
      from:email,
      replyTo:email,
      to:'pusugu01@gmail.com',
      subject:'ISIS AGENCY Nuevo mensaje de contacto',
      html:`
        <p><strong>Nombre:</strong>${nombre}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Telefono:</strong>${phone}</p>
        <p><strong>Instagram:</strong>${instagram}</p>
        <p><strong>Mensaje:</strong>${mensaje}</p>
      `
    }
    await transporter.sendMail(mailOptions)
    res.json("correo enviado")
  } catch (error) {
    console.log(error);
    res.json("error en el servidor")
  }
});
app.listen(2000, () => {
  console.log("Servidor iniciado en el Puerto 2000");
});
