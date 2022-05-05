 // How to request data using an API using Js and jQuery

 // There are many ways to do this!

 // 1.  Jquery $.ajax() function
// 2. the Browser's fetch() function
// 3. Using the axios http clinet library

const URL ="http://www.omdbapi.com/?i=tt3896198&apikey=55fd9917"



$.ajax(URL).then(function(data) {
    console.log('movie data is ready')
    console.log(data)
}, function(error) {
    console.log('something is wrong')
    console.log (error)

})


 
