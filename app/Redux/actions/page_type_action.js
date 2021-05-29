const set_page_type = (type) => {
    return {
        type: "set_page_type",
        data: type
    }
}
const set_bonus = (bonus) => {
    return {
        type: "set_bonus",
        data: bonus
    }
}
const set_verifications = (bonus) => {
    return {
        type: "set_verifications",
        data: bonus
    }
}
const set_init = () => {
    return {
        type: "set_init"
    }
}
export { set_init, set_page_type, set_verifications, set_bonus };