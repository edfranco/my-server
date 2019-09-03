require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const PORT = process.env.PORT || process.env.MYPORT;
const app = express();



app.use(bodyParser.urlencoded({ extended: false }))
// post route for messages
app.post('/contact', (req, res) => {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        }
    });
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: GMAIL_USER,
        subject: req.body.subject,
        text: `${req.body.name} (${req.body.email}) says : ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.render('contact-failure');
        } else {
            res.render('contact-success');
        };
    });
});


app.listen(4000, `server is live at port ${PORT}`);