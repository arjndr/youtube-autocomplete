# youtube-autocomplete
Get autocomplete search queries for YouTube without API keys!

## Usage
1. Install module using `npm i youtube-autocomplete`

2. Require the module
  ```js
  const AutoComplete = require('youtube-autocomplete');
  ```

3. `AutoComplete(query, callback)` - *function*
    - `query` - *String* : Search query for which you want suggestions
    - `callback(err, queries)` - *function* : Callback function
        
        - `err` - *Error* : Error message if an error occurs, `null` if successful
        - `queries` - *Object* : Suggestion queries in JSON format

4. Example code:
  ```js
  const AutoComplete = require('youtube-autocomplete');

  AutoComplete('quer', (err, queries) => {
    if (err) throw err;
    console.log(queries);
  });
  ```

## License

[MIT](http://opensource.org/licenses/MIT) Copyright &copy; 2018 Akash Rajendra