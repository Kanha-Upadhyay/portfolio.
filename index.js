// import express from "express";
// const app = express();
// const port = 3000;
// app.use(express.static("public"));


// //email

// function sendMail(){
//   var params={
//     name: document.getElementById("name").Value,
//     email: document.getElementById("email").Value,
//     message: document.getElementById("message").Value,
//   };


// const serviceId="service_jldnzrp";
// const templateId="template_uf2ouiq";

// emailjs.send(serviceId,templateId,params).then(
//   res=>{
//     document.getElementById("name").value="";
//     document.getElementById("email").value="";
//     document.getElementById("message").value="";
//     console.log(res);
//     alert("your message sent successfully");

//   }
// )
// .catch((err)=>console.log(err));
// }
// //email






// app.set('view engine', 'ejs'); // Set EJS as the view engine
// app.use(express.urlencoded({ extended: true }));






// app.get("/",(req,res)=>{
//   res.render("index.ejs");
// });

// app.get("/contact",(req,res)=>{
//   res.render("contact.ejs");
// });

// app.get("/about",(req,res)=>{
//   res.render("about.ejs");
// });





// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });






import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "kanha.graphics07@gmail.com", // Replace with your Gmail email address
    pass: "Kuldeep21041475", // Replace with your Gmail password or app-specific password
  },
  debug: true, // Enable debugging
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.post("/submit", (req, res) => {
  const { name, email, text } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: ["kanhaupadhyay0716@gmail.com", email],
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nComment: ${text}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send("An error occurred. Please try again later.");
    } else {
      console.log("Email sent:", info.response);
      res.send("Thank you for your submission!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



