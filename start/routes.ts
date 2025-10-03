/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TimeController from '#controllers/times_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/dateTime',[TimeController, 'nowDate'])