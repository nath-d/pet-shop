const express = require("express");
const router = require("./routes/Route");
const app = express();

app.use(express.json({limit: "50mb"}))
app.use('/', router)



app.listen(7000, () => {
    console.log("Server running on port: 7000")
});


