const debounce = (fuc, delay) => {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            fuc.apply(this, args)
        }, delay)
    }
}
export default debounce