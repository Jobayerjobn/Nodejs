import express from 'express';


export const sendResponse = (res, message, statusCode, succuss,  data= null) => {
    return res.json({
        success: true,
        statusCode: 200,
        message: 'Server is running',
        data: {
            name: 'Jobayer',

        }
    })
}

