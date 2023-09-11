import { Router } from "express";
import { isAdminOrWoner, verifyScheduleIdUser, verifySchendulesMiddleare, verifySchendulesUserMiddleare, verifyTokenMiddleware, verityBodyMiddleare } from "../middlewares";
import { createScheduleSchema } from "../schemas";
import { ReadSchenduleControler, createScheduleControler } from "../controller";

const schendulesRoute: Router = Router();

schendulesRoute.post(
  "",
  verifyTokenMiddleware,
  verityBodyMiddleare(createScheduleSchema),
  verifySchendulesMiddleare,
  verifySchendulesUserMiddleare,
  verifyScheduleIdUser,
  createScheduleControler
);

schendulesRoute.get(
  "/realEstate/:id",
  verifyTokenMiddleware,
  isAdminOrWoner,
  ReadSchenduleControler
);

export { schendulesRoute };
