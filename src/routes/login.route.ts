import { Router } from "express";
import { verityBodyMiddleare } from '../middlewares';
import { loginCreateSchema } from '../schemas';
import { loginController } from '../controller';

const loginRoute: Router = Router();

loginRoute.post("", verityBodyMiddleare(loginCreateSchema), loginController);

export { loginRoute }
