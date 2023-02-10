Cocoen.parse(document.body);

function searchForMovie(){
    console.log("searchForMovie entered");

    // https://api.themoviedb.org/3/search/movie?api_key=70ebc6e7be374a754b682839b6ddd4e2&language=en-US&query=pushpa&page=1

    let baseUrl = "https://api.themoviedb.org/3/";
    let endpoint = "search/movie";
    let apikey = "70ebc6e7be374a754b682839b6ddd4e2";
    let otherthings = "&language=en-US&query=pathan&page=1";
    let fullURL = baseUrl + endpoint + "?api_key=" + apikey + otherthings;

    console.log(fullURL);

    fetch(fullURL)
        .then((response)=> response.json())
        .then((data)=>{
            console.log("receiving stuff");
            console.log(data);
            updateMovieInfo(data);
        })
        .catch((error)=>{
            console.log(error);
        });


    console.log("searchForMovie leaving");

}
searchForMovie();



function movieDetails(){
console.log("movieDetails entered");
//full url
// https://api.themoviedb.org/3/movie/864692?api_key=70ebc6e7be374a754b682839b6ddd4e2&language=en-US

let baseUrl = "https://api.themoviedb.org/3/";
let endpoint = "movie/";
let id = "864692";
let apikey = "70ebc6e7be374a754b682839b6ddd4e2";
let otherDetails = "&language=en-US";
let fullURL = baseUrl+ endpoint+ id +"?api_key="+ apikey + otherDetails;

console.log(fullURL);

fetch(fullURL)
    .then((response)=>response.json())
    .then((data)=>{
        console.log("receiving details");
        console.log(data);
        updateMovieInfo2(data);
    })

console.log("movieDetails leaving");
}

movieDetails();


function movieImages(){
    console.log("movieImages entered");
    //full url
    // https://api.themoviedb.org/3/movie/864692/images?api_key=70ebc6e7be374a754b682839b6ddd4e2
    
    let baseUrl = "https://api.themoviedb.org/3/";
    let endpoint = "movie/";
    let id = "864692";
    let apikey = "70ebc6e7be374a754b682839b6ddd4e2";
    let otherDetails = "/images";
    let fullURL = baseUrl+ endpoint+ id + otherDetails +"?api_key="+ apikey;
    
    console.log(fullURL);
    
    fetch(fullURL)
        .then((response)=>response.json())
        .then((data)=>{
            console.log("receiving details");
            console.log(data);
            updateMovieInfo3(data);
        })
    
    console.log("movieImages leaving");
}

movieImages();

function updateMovieInfo(data){
    console.log("Entering updateMovieInfo");
    //show data is comming

    console.log(data);

    //update movie details
    
    let resultArray = data.results
    let movieItem = data.results[2];


    console.log(movieItem);

    //get element id movietitle

    let movietitle = document.getElementById("movietitle");
    let movieimage = document.getElementById("movieimage");
    let movieoverview = document.getElementById("movieoverview");

    //update text content

    movietitle.textContent = movieItem.original_title;
    movieoverview.textContent = movieItem.overview;

    let imageURLBase = "https://www.themoviedb.org/t/p/original/";
    let imageURL = movieItem.poster_path;
    let finalImageURL = imageURLBase + imageURL ;

    console.log(finalImageURL);

    movieimage.src = finalImageURL;
    console.log("leaving updateMovieInfo");
}

//this will update main movie details.
function updateMovieInfo2(data){
    console.log("entering updatemovieinfo2");
    console.log(data);

    // let movieItem = data;
    // let tagline = movieItem.tagline;

    let movietagline = document.getElementById("movietagline");
    movietagline.textContent = data.tagline;
    
    let moviereleasedate = document.getElementById("releasedate");
    moviereleasedate.textContent = data.release_date;

    let moviebudget = document.getElementById("budget");
    moviebudget.textContent = data.budget;

    let moviecollection = document.getElementById("revenue");
    moviecollection.textContent = data.revenue;

    console.log("leaving updatemovieinfo2");

}

//function will update the images
function updateMovieInfo3(data){
    console.log("entering updateMovieInfo3");
    console.log(data);

    let movieItem = data.backdrops;

    let baseURL = "https://www.themoviedb.org/t/p/original";

    let imgURL1 = movieItem[0].file_path;
    let imgURL2 = movieItem[1].file_path;

    let finalURl1 = baseURL + imgURL1 ;
    console.log(finalURl1); 
    let finalURl2 = baseURL + imgURL2 ;
    console.log(finalURl2); 

    
    let firstimage = document.getElementById("firstimage");
    let secondimage = document.getElementById("secondimage");

    firstimage.src = finalURl1;
    secondimage.src = finalURl2;

    console.log("leaving updateMovieInfo3");
}