import express from 'express';
import { body } from "express-validator";
import multer from "../middlewares/multer-config.js";
import { DeleteProduits, addOnceProduits, getAllProduct, getProduitsById, putOnce } from '../controllers/Produit.js';


const router = express.Router();


router.route('/')
.get(getAllProduct);

router.route('/')
.post(
    multer("image"),
    addOnceProduits);


router.route('/:id')
.get(getProduitsById)
.delete(DeleteProduits)
.put(
    multer("image"),
    putOnce)



export default router;

