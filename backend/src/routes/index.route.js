const router = require("express").Router();

const assetsRoutes = require("./assets.route");

router.use("/assets", assetsRoutes);

module.exports = router;
