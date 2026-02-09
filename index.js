const express = require("express");
const app = express();
const port = 3000;

//attivazione della cartella public per uso file statici
app.use(express.static("public"));

// rotta home APP
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
