export const formatDate = (date) => {
    return date.toISOString().slice(0,10);
}


export const getDateDayeAgo = (days) => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);
}