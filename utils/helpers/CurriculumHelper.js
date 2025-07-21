export function getCourseEndStatus(date) {
    if (date) {
        const futureDate = new Date(date);
        const today = new Date();
        if (futureDate > today) {
            return true
        } else {
            return false
        }
    }

    return true;
}

export function calculateCoursePrice(discountPercent, price) {
    let discount = 0
    discount = ((price * discountPercent) / 100)
    return (price - discount).toFixed(2)
}