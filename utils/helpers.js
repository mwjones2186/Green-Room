const Handlebars = require('handlebars');

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
  trimString: function(passedString) {
    var theString = passedString.substring(0,150);
    return new Handlebars.SafeString(theString);
  },
};
