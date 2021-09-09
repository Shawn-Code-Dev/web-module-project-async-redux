import {FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from './../actions/index'

const initialState = {
    monster: {
        id:1,
        type: "small",
        species: "herbivore",
        elements: [],
        name: "Aptonoth",
        description: "Docile herbivores that graze in packs. Their meat is considered a delicacy and is rich in nutrients. If one member of the herd is attacked, the rest will flee immediately.",
        ailments: [],
        locations: [{id:1, zoneCount: 17, name: "Ancient Forest"}],
        resistances: [],
        weaknesses: [{element: "fire", stars: 1, condition: null},{element: "water", stars: 1, condition: null},{element: "thunder", stars: 1, condition: null},{element: "ice", stars: 1, condition: null}]
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_START):
            return({
                ...state,
                monster: {},
                isFetching: true,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                monster: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_FAIL):
            return({
                ...state,
                monster: {},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}