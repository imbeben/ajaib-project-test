import immutablePersistenceTransform, { reducedStateHydrate } from '../Services/ImmutablePersistenceTransform'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '5',
  storeConfig: {
    transforms: [immutablePersistenceTransform],
    stateReconciler: reducedStateHydrate
  }
}

export default REDUX_PERSIST
