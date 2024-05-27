const initialState = {
    navStatus: "default",
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "NAV_STATUS":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default reducers;
