import express from "express";
import 'dotenv/config'
import Data from "./routes/index"
import cors from "cors"


const app = express();
app.use(cors())
app.use(express.json());

//Example route
app.use('/Api', Data )

//Error Returns
app.use((req, res, next) => {
    res.send({error:next})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})
