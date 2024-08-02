import express from 'express';
import { createOrder, getAllOrders, getOrdersByClientId, updateOrderStatus } from '../controllers/Order.js'; // Assurez-vous que le chemin est correct
import upload from '../middlewares/multerPdf.js';
import multer from 'multer';

const router = express.Router();

router.post('/orders', upload.array('pdf', 10), createOrder);

router.route('/allOrders')
.get(getAllOrders);

router.get('/orders/client/:clientId', getOrdersByClientId);

router.put('/order/status/:id', updateOrderStatus);


export default router;
