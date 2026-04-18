import express from 'express';



export const getUser  = (req, res) => {
    res.status(201).json({massage: 'Server is running'});

}
