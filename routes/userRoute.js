import express from "express";
const router = express.Router();
import userController from "../controllers/userController";

router.post( "/createUser", userController.create);

router.put( "" )

router.get( "" )

module.exports = router;