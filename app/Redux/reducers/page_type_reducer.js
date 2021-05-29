const initialState = {
    page_type: "home",
    bonus: 0,
    verifications: []
};
const page_type_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_page_type": {
            return { ...state, page_type: action.data };
        }
        case "set_bonus": {
            return { ...state, bonus: action.data };
        }
        case "set_verifications": {
            return { ...state, verifications: action.data };
        }
        case "set_init": {
            return initialState
        }
        default: {
            return state;
        }
    }
}
export default page_type_reducer;