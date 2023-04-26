import  express  from "express";
import maleController from "../controllers/maleController.js";
import incomeController from "../controllers/incomeController.js";
import carController from "../controllers/carController.js";
import citiController from "../controllers/citiController.js";
import homeController from "../controllers/homeController.js";
import quoteController from "../controllers/quoteController.js";

const router = express.Router();

router.get("/",homeController)
router.get("/male",maleController)

router.get("/income",incomeController)

router.get("/quote",quoteController)

router.get("/car",carController)

router.get("/city",citiController)

export default router