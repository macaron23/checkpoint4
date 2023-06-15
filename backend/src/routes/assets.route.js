const router = require("express").Router();

const assetsControllers = require("../controllers/assetsControllers");

router.get("/", assetsControllers.browse);
router.get("/:id", assetsControllers.read);
router.post("/", assetsControllers.add);
router.put("/:id", assetsControllers.edit);
router.delete("/:id", assetsControllers.destroy);

module.exports = router;
