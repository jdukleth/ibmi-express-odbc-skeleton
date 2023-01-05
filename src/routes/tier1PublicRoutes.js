import { testController } from '../controllers/test/testController.js'

///////////////////////////////////////////////////////////////////////////////
// CREATING ROUTES
///////////////////////////////////////////////////////////////////////////////
// 1. Ensure you are in the correct file for DATA SECURITY
//      - public: anyone in the world can use the route
//      - customer: users must be logged in as customer to use the route
//      - private: only JDS users with authority can use the route
// 2. Add an object with the following keys to the 'export default' array below
//      - method: the HTTP verb for the REST route.
//                (for example: GET, POST, PUT, PATCH, DELETE)
//      - route: desired path to the API route (don't include domain or port)
//      - actions: an array of controller methods and middleware to call.
//                 they execute in the order supplied
///////////////////////////////////////////////////////////////////////////////

export default [
  {
    method: 'GET',
    route: '/test',
    actions: [testController]
  },
]
