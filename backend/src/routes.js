const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.post("/sessions", SessionController.create); //Listar

routes.post("/ongs", OngController.create); //Cadastro
routes.get("/ongs", OngController.index); //Listar

routes.get('/profile', ProfileController.index);

routes.post("/insidents", IncidentController.create); //Cadastro
routes.get("/insidents", IncidentController.index); //listar
routes.delete("/insidents/:id", IncidentController.delete); //deletar

module.exports = routes;

// Métodos HTTP:
// GET: Buscar uma informação no back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informaçao no back-end
// DELETE: Deletar uma informação no back-end

// TIPO DE PARAMETROS
// Query: parametros nomeados vindo na roda após o "?nome=teste" (filtros, paginação)
// const params = request.query;
// params: utilizado para identificar recursos /:id (alterar , deletar)
// const params = request.params;
// Request body: utilizado para enviar algo (cadastro)
// const params: request.body;
