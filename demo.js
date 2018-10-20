const AutoComplete = require('./index.js');

AutoComplete('quer', (err, queries) => {
  if (err) throw err;
  console.log(queries);
});
