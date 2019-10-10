export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = (obj) => {
console.log('test', obj)
    return {
        type: ADD_FEATURE,
        payload: obj           
        
    }
}