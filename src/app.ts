import "dotenv/config";
import * as express from 'express';
const port = 4000;

const app = express();


app.get('/github', (req, res) => {

    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)

   
})

app.get('/signin/callback', (req, res) => {
    const { code } = req.query;

    res.send(code);
})


app.listen(port, () => console.log(`Server is running on port ${ port }`));