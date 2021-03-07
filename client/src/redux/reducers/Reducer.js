const initialState = {
    link: "",
    h1:[],
    h2:[],
    h3:[],
    h4:[],
    SELENIUM:""
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case "SEND_LINK":
            return {...state, link: action.link}
        case "GET_H":
            return {...state,
                h1:action.h1,
                h2:action.h2,
                h3:action.h3,
                h4:action.h4,
            }
        default:
            return state
    }
}
export default Reducer