require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// constants
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const PORT = process.env.PORT || process.env.MY_PORT;


const corsOptions = {
    origin: 'http://eduardofranco.me/',
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

// post route for messages
app.post('/contact', (req, res) => {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: `${GMAIL_USER}`,
            pass: `${GMAIL_PASS}`
        },
    });
    mailOpts = {
        from: req.body.email,
        to: GMAIL_USER,
        subject: req.body.subject,
        text: `${req.body.name} (${req.body.email}) says : ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.json({ error });
            console.log(error)
        } else {
            res.render('contact-success');
            res.status(200).json({ status: 200, message: 'Succes' });
        };
    });
});


app.listen(PORT, console.log(`server is live at port ${PORT}`));
