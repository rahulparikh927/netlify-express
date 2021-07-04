import express from 'express'
const app = express()
app.get("/", (req, res) => {
    res.send("Up and running with graphql crash course")
})
app.listen(8080, () => console.log("Running at 8080"))