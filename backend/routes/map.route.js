import express from "express"
const router = express.Router()


import {getAutoSuggestion, getCoordinate, getDistanceTime} from "../controllers/map.controller.js"


router.get("/get-cordinates", getCoordinate)

router.get("/get-distance-time", getDistanceTime)

router.get("/get-suggestion", getAutoSuggestion)

export default router