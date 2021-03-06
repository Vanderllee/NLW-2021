import "dotenv/config";
import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import { Server } from 'socket.io';
import { router } from './routes';

const app = express();
app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {origin: "*"}
})

io.on("connection", socket => {
    console.log(`Usuário conectado no socket ${socket.id}`);
})

app.use(express.json());

app.use(router);





app.get('/github', (req, res) => {

    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)

   
})

app.get('/signin/callback', (req, res) => {
    const { code } = req.query;

    res.send(code);
})


export { serverHttp, io };