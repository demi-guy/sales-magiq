const jwt = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (user) => {
        const payload = {
            name: user.name,
            email: user.email
        };

        const options = { expiresIn: '1h' };

        return jwt.sign(payload, process.env.JWT_SECRET, options);
    },
    verifyAccessToken: (token) => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return { success: true, data: decoded };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    generateRefreshToken: (user) => {
        const payload = {
            id: user.id,
            email: user.email
        };

        const options = { expiresIn: '7d' };

        return jwt.sign(payload, process.env.REFRESH_SECRET, options);
    },
    verifyRefreshToken: (token) => {
        try {
            const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
            return { success: true, data: decoded };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}