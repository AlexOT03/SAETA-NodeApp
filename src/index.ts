import express from "express";
import 'dotenv/config'
import Data from "./routes/index"


const app = express();

app.use(express.json());

//Example route
app.use('/Api', Data )

//Error Returns
app.use((req, res, next) => {
    res.send({error:next})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + 3000)
})
