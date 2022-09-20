//import express
const express = require("express")
const app = express()

require("./configs/mongoose.config")

//configure express to allow post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("././routes/location.routes")(app)

app.listen( 8000, () => console.log(`Listening on port: 8000`) );