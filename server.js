const express = require("express");
const app = express();
const connectDB = require("./config/db");
const jwt = require('jsonwebtoken');
const { check,validationResult } = require("express-validator")

app.use(express.json({ extended : false }));

connectDB(); 

const PORT = process.env.PORT || 5000;
 
app.get("/",(req,res) => {
    res.status(200).json({ msg:"this is axiom social app" })
});


app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts")); 
app.use("/api/users", require("./routes/users"));

app.listen(PORT, () => {
    console.log(`server has been started \http://localhost:${PORT}`);
});
