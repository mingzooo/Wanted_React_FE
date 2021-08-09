
export const setFilter = jobFilters => {
    return {
        type: "SET",
        payload: jobFilters
    };
};

export const addFilter = jobFilters => {
    return {
        type: "ADD",
        payload: jobFilters
    };
};

export const deleteFilter = jobFilters => {
    return {
        type: "DELETE",
        payload: jobFilters
    };
};

export const setJobLoading = bool => {
    return {
        type: "SET_JOBFETCH_STATE",
        payload: bool
    };
};

export const setUrlLoading = bool => {
    return {
        type: "SET_URL_UPDATE_STATE",
        payload: bool
    };
};

// 로그인  action
export const changeLogin = check => {
    return {
        type: "login_check",
        payload: check
    }
}

// 로그인 종류에 따른 action
export const kindLogin = kind => {
    return {
        type: "login_kind",
        payload: kind
    }
}

// modal창 들어갔나 나오게할 action
export const changeModal = onoff => {
    return {
        type: "modal_onoff",
        payload: onoff
    }
}

// profile창 updown하게 할 action
export const changeProfile = updown => {
    return {
        type: "profile_updown",
        payload: updown
    }
}