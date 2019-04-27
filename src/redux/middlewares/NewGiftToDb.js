import { sendNewGiftToDBSuccess } from '../actions';
import { HEROKU_APP_URL } from '../../config/config';

export default store => next => action => {
  if (action.type !== 'NEW_GIFT_TO_DB') return next(action)

  next({
    ...action,
    type: action.type + '_REQUEST'
  })

    fetch(`${HEROKU_APP_URL}/create`, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(action.data)
    })
    .then(res => res.json())
    .then(res => store.dispatch(sendNewGiftToDBSuccess(res)))
    //.then(res => store.dispatch(getAllGifts()))

}
