const express = require("express");
const router = express.Router();

const v_kelas_mentorCTRL = require("../controller/kelas_materi");
const auth = require("../middleware/auth");

router.get("/v_kelas_mentor/", auth.isAuth, v_kelas_mentorCTRL.tampil);

module.exports = router;