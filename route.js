import express from 'express';
import { sendResponse } from './number.js';

const router = express.Router();

router.get('/users', (res, statusCode, success, data
) => {
    return res.status(statusCode).json({
        succuss,
        statusCode,
        data,

    })
})

export default router;
