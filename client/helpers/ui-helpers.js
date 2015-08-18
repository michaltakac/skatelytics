UI.registerHelper('equals', function(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
});

UI.registerHelper('notEquals', function(a, b) {
  if (a !== b) {
    return true;
  } else {
    return false;
  }
});

UI.registerHelper('fullDate', function(time) {
  return moment(time).format('Do MMMM YYYY');
});