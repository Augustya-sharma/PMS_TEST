import {Router} from "express";
import {
    createTemplate,
    getAllTemplates,
    getTemplate,
    updateTemplate,
    addObjective,
    addWeightage,
    addPosition,
    deleteTemplate
} from "../controllers/template/templateController";

const router = Router()

router.post('/template', createTemplate)
router.get('/template', getAllTemplates)
router.get('/template/:id', getTemplate)
router.patch('/template/:id', updateTemplate)
router.delete('/template/:id', deleteTemplate)

router.post('/add-objective/', addObjective)
router.patch('/add-weightage/:id', addWeightage)
router.patch('/position/:id', addPosition)


export default router