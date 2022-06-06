import {Router} from "express";
import {
    updateAppraisalCalender,
    getAllAppraisalCalender,
    createAppraisalCalender,
    getAppraisalCalenderById,
    deleteAppraisalCalender,
    startAppraisal
} from "../controllers/appraisalCalenderController";

const router = Router()

router.patch('/start/:id', startAppraisal)
router.get('/', getAllAppraisalCalender)
router.get('/:id', getAppraisalCalenderById)
router.post('/', createAppraisalCalender)
router.patch('/:id', updateAppraisalCalender)
router.delete('/:id', deleteAppraisalCalender)



export default router
