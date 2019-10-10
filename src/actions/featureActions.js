export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = (obj) => {
console.log('test', obj)
    return {
        type: ADD_FEATURE,
        payload: obj    
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = (obj) => {
    return {
        type: REMOVE_FEATURE,
        payload: obj
    }
}