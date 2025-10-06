import express from "express"
import userController from "./controller/usercontroler.js"
import aunthenticate from "./middleware/middleware.js"
import parkirControler from "./controller/parkirControler.js";

const router = express.Router()

router.get("/user/me", aunthenticate, userController.me)

router.get("/user", userController.read)
router.get("/user/:id", userController.detail)

router.post("/user/regis", userController.register)
router.post("/user/login", userController.login)

router.post("/user", userController.create)

router.put("/user/:id", userController.update)

router.delete("/user/:id", userController.delete)

//parkir
router.post("/parkir/order", aunthenticate, parkirControler.order)
router.get("/parkir/show", aunthenticate, parkirControler.show)
router.put("/parkir/:id", aunthenticate, parkirControler.update)
router.delete("/parkir/:id", aunthenticate, parkirControler.cancel)

export default router