// import array che contiene i post
const postsList = require("../data/posts");

//funzioni delle operazioni CRUD, ognuna con logica corrispondente:
function index(req, res) {
  res.json({
    total: postsList.length,
    posts: postsList,
  });
}

function show(req, res) {
  const post = postsList.find((post) => post.id === parseInt(req.params.id));
  // Facciamo il controllo
  if (!post) {
    //Imposto lo status 404
    res.status(404);

    // Restituisco un JSON con le altre informazioni
    return res.json({
      error: "Not Found",
      message: "post non trovata",
    });
  }
  res.json(post);
}

function store(req, res) {
  res.send("Creazione nuovo post");
}

function update(req, res) {
  res.send("Modifica integrale del post con id: " + req.params.id);
}

function modify(req, res) {
  res.send("Modifica parziale del post con id: " + req.params.id);
}

function destroy(req, res) {
  res.send("Eliminazione del post con id: " + req.params.id);
}

module.exports = { index, show, store, update, modify, destroy };
