import express from "express"
const router = express.Router()
import { protectedRouteForCap } from "../middleware/protectedRouteforCap.js"

import {getAutoSuggestion, getCoordinate, getDistanceTime} from "../controllers/map.controller.js"


router.get("/get-cordinates",protectedRouteForCap,getCoordinate)

router.get("/get-distance-time",protectedRouteForCap, getDistanceTime)

router.get("/get-suggestion",protectedRouteForCap, getAutoSuggestion)

export default router