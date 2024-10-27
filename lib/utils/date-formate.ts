export function dateFormat(inputDate: string, format: string = 'M d, Y'): string {
    if (!inputDate) return '';

    const date = new Date(inputDate);

    const dayNumber = date.getDate().toString().padStart(2, '0'); // '01' to '31'
    const dayName = date.toLocaleString('en-US', { weekday: 'long' }); // 'Monday'
    const monthNumber = (date.getMonth() + 1).toString().padStart(2, '0'); // '01' to '12'
    const monthName = date.toLocaleString('en-US', { month: 'long' }); // 'January'
    const yearFull = date.getFullYear().toString(); // '2023'
    const yearShort = yearFull.slice(-2); // '23'

    // Replace format placeholders with unique tokens
    const tokens = {
        '%d': dayNumber,
        '%D': dayName,
        '%m': monthNumber,
        '%M': monthName,
        '%Y': yearFull,
        '%y': yearShort
    };

    // Replace format placeholders with tokens
    let formattedDate = format
        .replace(/d/g, '%d')
        .replace(/D/g, '%D')
        .replace(/m/g, '%m')
        .replace(/M/g, '%M')
        .replace(/Y/g, '%Y')
        .replace(/y/g, '%y');

    // Replace tokens with actual date values
    for (const [token, value] of Object.entries(tokens)) {
        formattedDate = formattedDate.replace(new RegExp(token, 'g'), value);
    }

    return formattedDate;
}