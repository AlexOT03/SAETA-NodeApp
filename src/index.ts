import express from "express";
import 'dotenv/config'


const app = express();

app.use(express.json());

//Example route
//app.use('/api', productsRouter)

//Error Returns
app.use((req, res, next) => {
    res.send({error:next})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + 3000)
})
