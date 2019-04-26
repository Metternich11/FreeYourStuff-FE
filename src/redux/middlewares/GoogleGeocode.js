import { getGeocodeSuccess } from "../actions";
import { GOOGLE_API } from '../../config/config';

export default store => next => action => {

  if(action.type !== 'GET_GEOCODE') return next(action)
  next ({
    ...action,
    type: action.type + '_REQUEST'
  })

  let lat = action.data.lat
  let lng = action.data.lng

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API}`)
  .then(res => res.json())
  .then(res => res.results[0].formatted_address)
  .then(res => store.dispatch(getGeocodeSuccess(res)))

  .catch(err => {
    next({
      ...action,
      type: action.type + '_FAILURE'
    })
  })
}
