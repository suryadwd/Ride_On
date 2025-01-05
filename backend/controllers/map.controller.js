
import { getAddressCordinates, getDistanceTimeData, getAutoSuggestionCompletion} from "../utils/maps.services.js"

export const getCoordinate = async (req, res, next) => {

  const {address} = req.query

  try {
    const coordinate = await getAddressCordinates(address)
    res.status(200).json(coordinate)
  } catch (error) {
    res.status(404).json({message:"Coordinates not found"})
  }

}


export const getDistanceTime = async(req,res,next) => {

  try {

    const {origin, destination} = req.query

    const distanceTime = await getDistanceTimeData(origin, destination)

    res.status(200).json(distanceTime)

  } catch (error) {
    console.error(error)
  }

}

export const getAutoSuggestion = async (req, res, next) => {

  try {
    
    const {input} =req.query

    const suggestion = await getAutoSuggestionCompletion(input)

    return res.status(200).json(suggestion)

  } catch (error) {
    console.error(error)
  }

}




