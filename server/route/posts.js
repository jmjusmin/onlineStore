import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('This work!');
});

export default router;