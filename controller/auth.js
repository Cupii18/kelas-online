const jwt = require('jsonwebtoken');

module.exports = {
    async kode(req, res, next) {
        const token = jwt.sign({nama : "Brilliant Putri Tegar"}, "aku kamu selamanya", {algorithm: "HS256"});
      
        return res.status(200).json({
            success: 1,
            data: {token :token}
        });    
    },
    
}