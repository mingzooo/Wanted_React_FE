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