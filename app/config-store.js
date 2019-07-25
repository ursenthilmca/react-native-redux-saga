import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./root-reducer";
import rootWatchers from "./root-saga";


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    store.runSaga = sagaMiddleware.run(rootWatchers)
    return store
}