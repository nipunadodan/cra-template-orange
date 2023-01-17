export const isoLocalDate = (date) => {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        date.getDate().toString().padStart(2, '0')
    );
};