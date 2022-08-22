const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
router.use(require("./kelas"));
router.use(require("./auth"));
router.use(require("./kelas_materi"));
router.use(require("./kelas_mentor"));
router.use(require("./kelas_materi_detail"));
router.use(require("./user_kelas_materi_detail"));
router.use(require("./user"));
router.use(require("./user_kelas"));
router.use(require("./v_kelas_materi"));
router.use(require("./v_kelas_mentor"));

module.exports = router;
