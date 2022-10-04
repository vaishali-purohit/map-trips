export const getDaysDifference = (startDate: Date, endDate: Date) => {
  const differenceInTime = startDate.getTime() - endDate.getTime();

  if (differenceInTime <= 0) {
    return 0;
  }

  // To calculate the no. of days between two dates
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
};
