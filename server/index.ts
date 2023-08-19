import Express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router'
dotenv.config();

console.log(process.env.NEXTAUTH_URL)

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(router)


const PORT = 3005;
app.listen(PORT,() => {
	console.log(`listning to port ${PORT}`)
})

