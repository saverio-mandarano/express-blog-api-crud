// import Express
const express = require("express");
// creo variabile router il cui valore sarà un'istanza di express.Router()
const router = express.Router();

//import funzioni del postsController
const postsController = require("../controllers/postsController");
//destrutturazione funzioni dall'oggetto postsController:
const { index, show, store, update, modify, destroy } = postsController;

// index: lista dei post
router.get("/", index);

// show: dettagli singolo post
router.get("/:id", show);

// store: creazione nuovo post
router.post("/", store);

// update: modifica integrale del post
router.put("/:id", update);

// modify: modifica parziale del post
router.patch("/:id", modify);

// destroy: cancellazione del post
router.delete("/:id", destroy);

// esporto l'istanza di router
module.exports = router;
