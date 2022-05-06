 // How to request data using an API using Js and jQuery

 // There are many ways to do this!

 // 1.  Jquery $.ajax() function
// 2. the Browser's fetch() function
// 3. Using the axios http clinet library
//variables 
const URL = "http://www.omdbapi.com/?apikey=a71b148a&t=Die+Hard";

// element references 
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rating');


//event listerners 


// functions

function handleGetData(){

    $.ajax(URL).then(function(data) {
        console.log('movie data is ready')
         console.log(data)
        $title.text(data.Title)
        $year.text(data.Year)
        $rating.text(data.Rated)
        $('main').append(`<img src="${data.Poster}"/>`)
    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    })

}

 
