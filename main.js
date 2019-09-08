
axios.interceptors.response.use(function(response) {
  let config = response.config
  console.log(config)
  response.data = {
    'name': "frank"
  }

  return response
})



axios.get('/books/1').then(response => {
  console.log(response)
})

$("#addOne").on("click", function() {
  var oldNumber = $("#number").text()
  var newNumber = oldNumber - 0 + 1
  $("#number").text(newNumber)
})

$("#minusOne").on("click", function() {
  var oldNumber = $("#number").text()
  var newNumber = oldNumber - 0 - 1
  $("#number").text(newNumber)
})

$("#reset").on("click", function() {
  $("#number").text(0)
})
