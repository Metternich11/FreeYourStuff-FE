import { getAllGiftsSuccess } from "../actions";
import { HEROKU_APP_URL } from '../../config/config';

export default store => next => action => {
  if (action.type !== 'GET_ALL_GIFTS') return next(action)

  next({
    ...action,
    type: action.type + '_REQUEST'
  })
  console.log("fetching")
  fetch(`${HEROKU_APP_URL}/getStuff`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      store.dispatch(getAllGiftsSuccess(data))
    })
    .catch(err => {
      next({
        ...action,
        type: action.type + '_FAILURE'
      })
    })

}
