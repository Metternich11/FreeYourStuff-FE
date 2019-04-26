import { updateGiftInDBSuccess } from '../actions';
import { HEROKU_APP_URL } from '../../config/config';

export default store => next => action => {
  if (action.type !== 'UPDATE_GIFT_IN_DB') return next(action)


  next({
    ...action,
    type: action.type + '_REQUEST'
  })

  fetch(`${HEROKU_APP_URL}/${action.data.id}`, {
    method: 'PUT',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(action.data)
  })
  .then(() => store.dispatch(updateGiftInDBSuccess()))
}
