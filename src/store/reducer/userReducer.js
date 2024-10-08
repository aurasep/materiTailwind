import { SET_USER } from "../action/userAction";

const nilaiDefault = {
    user: "ADMIN"
};

const userReducer = (state = nilaiDefault, action) => {
    switch (action.type) {
    case SET_USER:
        return {
        ...state,
        lang: action.payload,
    };
    default:
        return state;
    }
};

export default userReducer;