export const relativeDay = (date) => {
    const now = new Date();
    const date_formatted = !(date instanceof Date) ? new Date(date) : date;

    if (now.getDate() - date_formatted.getDate() === 0) {
        return 'Today';
    } else if (now.getDate() - date_formatted.getDate() === 1) {
        return 'Yesterday';
    } else {
        return date;
    }
};