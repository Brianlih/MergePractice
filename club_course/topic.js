var topic = [
    "Kinkaku-ji",
    "Seattle",
    "Shibuya",
    "Kyoto",
    "Saitama",
    "Los Angeles"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2, 23);
