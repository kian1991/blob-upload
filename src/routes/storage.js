import express from 'express';
import multer from 'multer';
import * as StorageController from '../controller/storage-controller.js';

export const router = express.Router();
const upload = multer({ dest: 'uploads/' });
router.post('/upload', upload.single('file'), StorageController.processUpload);
router.get('/download/:fileName', StorageController.processDownload);
