const http = require('http')
const AutocompleteURL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

function getAutocompleteQueries(query, callback) {
  http.get(AutocompleteURL + query, function(res){
    let rawData = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => { 
      rawData += chunk
    })
    res.on('end', () => {
      const parsedData = JSON.parse(rawData)
      callback(null, parsedData)
    })
  }).on("error", function(e){
    callback(e.message)
  })
}

module.exports = getAutocompleteQueries
