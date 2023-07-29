// customMiddleware.js
function workingHoursMiddleware(req, res, next) {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const hour = now.getHours(); // 0 to 23

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    // It's a working day and within working hours
    next();
  } else {
    res.send('Sorry, the web application is only available during working hours (Monday to Friday, 9 to 17).');
  }
}

module.exports = workingHoursMiddleware;
