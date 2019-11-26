# my-server
This server is a pretty simple server that only serves one purpose: to send email from a client on my [webpage](http://eduardofranco.me/) [(repo)](https://github.com/edfranco/my-react-portfolio) directly to my email.
This server is deployed on heroku and my website can be found [here](http://eduardofranco.me/)

-----------------------------------------------------------------

### Technologies
- Node
- Express
- Nodemailer
- .env

Nodemailer is the npm package that does the bulk of the work of this server. You can read more about it [here](https://nodemailer.com/about/).
You can also add it to your projects' node modules as so:

```
npm install nodemailer
```

Additionally I used .env so that I could post and share my work on github while still keeping my account's credentials discreet.
You can learn more about .env [here](https://www.npmjs.com/package/dotenv) and add it to your projects like this:
```
npm install dotenv
```
