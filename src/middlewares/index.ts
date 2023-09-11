import { handleErrors } from "./handdleError.middleare";
import { verityBodyMiddleare } from "./verifyBody.middleware";
import { verifyEmailMiddleare } from "./verifyEmail.middleware";
import { verifyIdMiddleare } from "./verifyId.middleware";
import { verifyTokenMiddleware } from "./verifyToken.middleware";
import { verifyPermissionMiddleare } from "./verifyPermission.middleware";
import { verifyNameCategoryMiddleware } from "./verifyNameCategory.middleware";
import { verifyIdCategoryMiddleare } from "./verifyIdCategory.middleware";
import { verifyAddress } from "./verifyAddress.middleware";
import { verifySchendulesMiddleare } from "./verifySchendules.middleware";
import { verifySchendulesUserMiddleare } from "./verifySchenduleUser.middleware";
import { verifyScheduleIdUser } from "./verifyScheduleId.middleware";
import { isAdminOrWoner } from "./isAdminOrWoner.middleware";

export {
  handleErrors,
  verityBodyMiddleare,
  verifyEmailMiddleare,
  verifyIdMiddleare,
  verifyTokenMiddleware,
  verifyPermissionMiddleare,
  verifyNameCategoryMiddleware,
  verifyIdCategoryMiddleare,
  verifyAddress,
  verifySchendulesMiddleare,
  verifySchendulesUserMiddleare,
  verifyScheduleIdUser,
  isAdminOrWoner,
};
