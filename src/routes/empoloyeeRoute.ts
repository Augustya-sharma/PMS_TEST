import {Router} from "express";
import {
    createEmployee,
    getAllEmployees,
    addTemplateToEmployee,
    addRating,
    appraisal,
    getEmployeeById,
    appraisalStatusFilter,
    updateEmployee,
    acceptReviewer,
    acceptNormalizer,
    acceptAppraisalEmployee,
    rejectedReviewerValues,

    rejectedNormalizerValues,

    reviewerRejection,
    normalizerRejection,
    acceptReviewerRejectedAppraiser,
    acceptNormalizerRejectedAppraiser

} from "../controllers/employee/employeeController";

const router = Router()

router.patch('/reject-normalizer-values/:id',rejectedNormalizerValues )
 router.patch('/accept-reviewer', acceptReviewer)
router.patch('/accept-normalizer', acceptNormalizer)
router.patch('/reject-reviewer-values/:id',rejectedReviewerValues )
router.patch('/appraiser-accept-reviewer/:id', acceptReviewerRejectedAppraiser)
router.patch('/appraiser-accept-normalizer/:id', acceptNormalizerRejectedAppraiser)

router.get('/filter/:status', getAllEmployees)

router.get('/:id', getEmployeeById)
// router.get('/filter/:status', appraisalStatusFilter)
router.post('/', createEmployee)
router.patch('/template/:id', addTemplateToEmployee)
router.get('/rating', addRating)
router.patch('/appraisal/:id', appraisal)
router.patch('/reviewer-rejection/:id', reviewerRejection)
router.patch('/normalizer-rejection/:id', normalizerRejection )
router.patch('/:id', updateEmployee)



router.patch('/accept-appraisal/:id', acceptAppraisalEmployee)



export default router
