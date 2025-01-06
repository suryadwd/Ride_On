import axios from 'axios';
import { Captain } from '../models/cap.model.js';


export const getAddressCordinates = async (address) =>  {
  const apiKey = process.env.GOOGLE_MAP_API
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
          const location = response.data.results[ 0 ].geometry.location;
          return {
              ltd: location.lat,
              lng: location.lng
          };
      } else {
          throw new Error('Unable to fetch coordinates');
      }
  } catch (error) {
      console.error(error);
      throw error;
  }
}


export const getDistanceTimeData = async (origin, destination) => {

    if(!origin || !destination) 
        return res.status(404).json({message:"Origin and destination are require"})

    const apiKey = process.env.GOOGLE_MAP_API

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {


        const response = await axios.get(url);
        if (response.data.status === 'OK') {

            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }


}


export const getAutoSuggestionCompletion = async (input) => {
    if(!input) return res.status(404).json({message:"input is require"})

    const apiKey = process.env.GOOGLE_MAP_API

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }

}


export const getCaptainNearby = async (ltd, lng, radius) => {

    const captains = await Captain.find({
        location:{
            $geoWithin:{
                $centerSpere:[[ltd, lng], radius/3963.2]
            }
        }
    })

    return captains

}
