import { ADD_FEATURE} from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const featuresReducer = (state = initialState, action) => {
      console.log(action, state)
      switch(action.type) {
          case ADD_FEATURE:
            console.log(action.payload)
            //   const features = state.car.features
              const newFeature = state.store.find(item => item.id === action.payload.id )
              const newStore = state.store.filter(item => {
                    return item.id !== action.payload.id
                })
              return {
                  ...state,
                  additionalPrice: state.additionalPrice += action.payload.price,
                  car: {...state.car, 
                    features:[...state.car.features, newFeature],
                     },
                  store: [...newStore] 

              }
          case REMOVE_FEATURE:
              const deleteFeature = state.car.features.remove(item => item.id === action.payload.id )
              const newStore = state.car.features.filter(item => {
                    return item.id !== state.store.id
                })
              return {
                  ...state,
                  additionalPrice: state.additionalPrice += action.payload.price,
                  car: {...state.car, 
                    features:[...state.car.features, deleteFeature],
                     },
                  store: [...newStore]
                    }
          default:
              return state
      }
  }