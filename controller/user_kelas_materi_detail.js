const {
    user_kelas_materi_detail
} = require("../model");

module.exports = {
    async tampil(req, res, next) {
        try {
            await user_kelas_materi_detail.findAll().then(result => {
                if (result.length > 0) {
                    return res.status(200).json({
                        success: 1,
                        data: result
                    });
                } else {
                    return res.status(400).json({
                        success: 0,
                        message: "tidak ditemukan...",
                    });
                }
            }).catch(error => {
                return res.status(400).json({
                    success: 0,
                    message: error.message
                });
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        }
    },
    async cari(req, res, next) {
        try {
            await user_kelas_materi_detail.findOne({
                where: {
                    id_user_kelas_materi_detail: req.params.id_user_kelas_materi_detail,
                }
            }).then(result => {
                if (result != null) {
                    return res.status(200).json({
                        success: 1,
                        data: result
                    });
                } else {
                    return res.status(400).json({
                        success: 0,
                        message: "tidak ditemukan...",
                    });
                }
            }).catch(error => {
                return res.status(400).json({
                    success: 0,
                    message: error.message
                });
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        }
    },
    async simpan(req, res, next) {
        try {
            const {
                id_kelas_materi,
                id_kelas_materi_detail,
                id_user,
                histori,
                created_at,
                updated_at,
            } = req.body;
            await user_kelas_materi_detail.create({
                id_kelas_materi,
                id_kelas_materi_detail,
                id_user,
                histori,
                created_at,
                updated_at,
            }).then(result => {
                return res.status(201).json({
                    success: 1,
                    message: 'Berhasil Tersimpan',
                    data: result,
                });
            }).catch(error => {
                return res.status(400).json({
                    success: 0,
                    message: error.message
                });
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            })
        }
    },
    async edit(req, res, next) {
        try {
            const {
                id_kelas_materi,
                id_kelas_materi_detail,
                id_user,
                histori,
                created_at,
                updated_at,
            } = req.body;
            await user_kelas_materi_detail.update({
                id_kelas_materi,
                id_kelas_materi_detail,
                id_user,
                histori,
                created_at,
                updated_at,
            }, {
                where: {
                    id_user_kelas_materi_detail: req.params.id_user_kelas_materi_detail
                }
            }).then(result => {
                if (result == 1) {
                    return res.status(201).json({
                        success: 1,
                        message: 'Telah diperbarui',
                    })
                } else {
                    return res.status(400).json({
                        success: 0,
                        message: 'Tidak ada perbaruan data',
                    })
                }
            }).catch(error => {
                return res.status(400).json({
                    success: 0,
                    message: error.message
                });
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            })
        }
    },
    async hapus(req, res, next) {
        try {
            await user_kelas_materi_detail.destroy({
                where: {
                    id_user_kelas_materi_detail: req.params.id_user_kelas_materi_detail
                }
            });
            return res.status(200).json({
                success: 1,
                message: "Data Telah dihapus",
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        }
    }
}