import { Router } from "express";

import createContactController from "../controllers/contact";
import createFile from "../controllers/file";
import createList from "../controllers/list";

const router = Router();

router.post("/contact/upload", createContactController);
router.post("/file/upload", createFile);
router.post("/list/create", createList)

export default router;
