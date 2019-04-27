import { HEROKU_APP_URL } from '../../config/config';

export default store => next => action => {
  if (action.type !== 'DELETE_GIFT_FROM_DB') return next(action)

  next({
    ...action,
    type: action.type + '_REQUEST'
  })

  fetch(`${HEROKU_APP_URL}/delete/${action.data}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
