const jwt = require('jsonwebtoken');

const auth = async (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token) {
        return res.status(403).json('A token no found.');
    }

    try {
        const decoded = jwt.verify(token,process.env.TOKEN_KEY);
        
        req.user = decoded;

    } catch (error) {

        return res.status(201).json(error);
    }

    return next();

}

module.exports = auth