const express = require("express")

const controller = require("../controllers/estabelecimentosControllers")

const router = express.Router();

router.get("/all", controller.allEstabelecimentos)
router.get("/:id", controller.estabelecimentosById)