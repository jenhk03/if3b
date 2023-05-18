const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(400).json({
        status: res.statusCode,
        message: 'Access denied'
    })
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        res.user = verified
        next()
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Invalid token'
        })
    }
}

module.exports = verifyToken