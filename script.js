 // How to request data using an API using Js and jQuery

 // There are many ways to do this!

 // 1.  Jquery $.ajax() function
// 2. the Browser's fetch() function
// 3. Using the axios http clinet library
//variables 
const URL = "http://www.omdbapi.com/?apikey=a71b148a&t=";

// element references jQuery variables
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rating');
const $form = $('form');
const $input = $('input[type="text"]');


//event listerners 
$form.on('submit',handleGetData); 

// functions

function handleGetData(event){

event.preventDefault()
const userInput =$input.val();


    $.ajax(URL+userInput).then(function(data) {
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

 
