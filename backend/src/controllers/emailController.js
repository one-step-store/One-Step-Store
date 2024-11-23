const sendEmail = require('../utils/email');
const result = require('../utils/result');

exports.sendEmail = async (req, res) => {
    try {
        const { to, subject, html } = req.body;

        if (!to || !subject || !html) {
            return res.status(400).json(result(1, 'failed', { message: 'Missing required fields: to, subject, html' }));
        }

        const response = await sendEmail({ to, subject, html });

        if (response.success) {
            res.status(200).json(result(0, 'success', { message: response.message }));
        } else {
            res.status(500).json(result(1, 'failed', { message: response.message }));
        }
    } catch (error) {
        res.status(500).json(result(1, 'failed', { message: error.message }));
    }
};
