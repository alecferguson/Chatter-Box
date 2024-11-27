export const formatPostDate = (createdAt) => {
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);

    const timeDifferenceInSeconds = Math.floor((currentDate - createdAtDate) / 1000);
    const timeDifferenceInMinutes = Math.floor((currentDate - createdAtDate) / 60);
    const timeDifferenceInHours = Math.floor((currentDate - createdAtDate) / 60);
    const timeDifferenceInDays = Math.floor((currentDate - createdAtDate) / 24);  
    
    if (timeDifferenceInDays > 1) {
        return createdAtDate.toLocaleDateString("en-US", {month: "short", day: "numeric "});
    } else if (timeDifferenceInDays === 1) {
        return "1d";
    } else if (timeDifferenceInHours >= 1) {
        return `${timeDifferenceInHours}h`;
    } else if (timeDifferenceInMinutes >= 1) {
        return `${timeDifferenceInMinutes}m`;
    } else {
        return "Just now";
    }
};

export const formatMemberSinceDate = (createdAt) => {
    const date = new Date(createdAt);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decemeber",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `Joined ${month} ${year}`;
};