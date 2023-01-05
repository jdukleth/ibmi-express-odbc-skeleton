import publicRoutes from '../routes/tier1PublicRoutes.js'
import customerRoutes from '../routes/tier2CustomerRoutes.js'
import customerApiRoutes from '../routes/tier3CustomerApiRoutes.js'
import privateRoutes from '../routes/tier4PrivateRoutes.js'
import { decodeUriParams } from '../middleware/decodeUriParams.js'
import { sendBody } from '../middleware/sendBody.js'
import { tier2CustomerAuthentication } from '../middleware/tier2CustomerAuthentication.js'
import { tier3CustomerApiAuthentication } from '../middleware/tier3CustomerApiAuthentication.js'
import { tier4PrivateAuthentication } from '../middleware/tier4PrivateAuthentication.js'

export const initializeRoutes = (router) => {
  publicRoutes.forEach(({ method, route, actions }) => {
    router[method.toLowerCase()](route, decodeUriParams, ...actions, sendBody)
  })

  customerRoutes.forEach(({ method, route, actions }) => {
    actions = [tier2CustomerAuthentication, ...actions]
    router[method.toLowerCase()](route, decodeUriParams, ...actions, sendBody)
  })

  customerApiRoutes.forEach(({ method, route, actions }) => {
    actions = [tier3CustomerApiAuthentication, ...actions]
    router[method.toLowerCase()](route, decodeUriParams, ...actions, sendBody)
  })

  privateRoutes.forEach(({ method, route, actions }) => {
    actions = [tier4PrivateAuthentication, ...actions]
    router[method.toLowerCase()](route, decodeUriParams, ...actions, sendBody)
  })

  return router
}
