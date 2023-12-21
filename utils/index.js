const { DateTime } = require('luxon');

module.exports = {
  format_date: (date) => {
    return DateTime.fromJSDate(date).toFormat('ff');
  },
  capitalizeFirstLetter: (str) => {
    // Ensure that the input is a string
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }

    // Capitalize the first letter and convert the rest to lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
};