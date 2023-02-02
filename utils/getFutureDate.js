const getFutureDate = (numDays) => {
  const today = new Date();
  let tomorrow = new Date();

  tomorrow.setDate(today.getDate() + numDays);
  return tomorrow;
};

module.exports = { getFutureDate };