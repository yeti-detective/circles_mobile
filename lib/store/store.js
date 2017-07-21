import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
// import stateSaverMiddleware from './stateSaver'
// import rootSaga from '../sagas'

// const logMiddleware = (store) => (next) => (action) => {
//   // console.log(action.type)
//   return next(action)
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
function configureStore () {
//   const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer)
//   const store = createStore(rootReducer,
//                             composeEnhancers(
//                               applyMiddleware(
//                                 logMiddleware,
//                                 stateSaverMiddleware,
//                                 sagaMiddleware
//                               )
//                             ))
//   sagaMiddleware.run(rootSaga)
  return store
}

// We need to export the store and not the function as we still need to access store outside of the Compoment framework
const store = configureStore()

export default store
