const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000; // You can change this to any port you prefer
const connectToDB = require("./db/db")
const routes = require("./routes/routes")

//middlewares
app.use(express.json())
app.use(cors())


// database connection
connectToDB()


//routes 
app.use("/" , routes)




app.use((req, res, next) => {
  res.status(404).json({ error: "Requested url not found" })
})

//error handling middleware
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message)
  } else {
    res.status(500).send("There was an error")
  }
})


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

