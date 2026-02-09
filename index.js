const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/posts");

//attivazione della cartella public per uso file statici
app.use(express.static("public"));

// rotta home APP
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// collego le rotte definite in postsRouter alla path "/posts"
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
