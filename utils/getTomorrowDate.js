const getTomorrowDate = () => {
  const today = new Date();
  let tomorrow = new Date();

  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
};

module.exports = { getTomorrowDate };