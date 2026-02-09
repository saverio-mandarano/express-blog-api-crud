// import array che contiene i post
const postsList = require("../data/posts");

//funzioni delle operazioni CRUD, ognuna con logica corrispondente:
function index(req, res) {
  let filteredPostsList = postsList;

  //Se la richiesta contiene un filtro, allora filtro la lista dei post
  if (req.query.category) {
    filteredPostsList = postsList.filter((post) =>
      post.tags.includes(req.query.category),
    );
  }

  res.json({
    total: filteredPostsList.length,
    posts: filteredPostsList,
  });
}

function show(req, res) {
  const post = postsList.find((post) => post.id === parseInt(req.params.id));
  // Faccio il controllo
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
  const id = parseInt(req.params.id);
  const post = postsList.find((post) => post.id === id);

  if (!post) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  // Rimuovo post dalla lista
  postsList.splice(postsList.indexOf(post), 1);
  console.log(`lista aggiornata`);
  console.log(postsList);
  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
