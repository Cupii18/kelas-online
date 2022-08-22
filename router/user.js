const express = require("express");
const router = express.Router();

const userCTRL = require("../controller/user");
const auth = require("../middleware/auth");

router.get("/user/", auth.isAuth, userCTRL.tampil);
router.get("/user/:id_user", auth.isAuth, userCTRL.cari);
router.post("/user", auth.isAuth, userCTRL.simpan);
router.put("/user/:id_user",  auth.isAuth, userCTRL.edit);
router.delete("/user_/:id_user",  auth.isAuth, userCTRL.hapus);

module.exports = router;
