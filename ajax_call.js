let xhr = new XMLHttpRequest();

let submit_button = document.getElementById("submit");
submit_button.onclick = function(){
    let src = document.getElementById("movie_search").value;
    xhr.open('GET', "http://www.omdbapi.com/?t="+src+"&apikey=f8372063");    
    xhr.responseType = 'json';
    xhr.onload = handleAjaxResponse;
    xhr.send();
};

const handleAjaxResponse = function() {
    if (xhr.status === 200) {
        var response = xhr.response;

        let N= document.getElementById("Name");
        let Y= document.getElementById("Year");
        let D = document.getElementById("Director");
        let R = document.getElementById("Rating");

        N.innerHTML="Movie Name :- "+ response. Title;
        Y.innerHTML="Movie Year :- "+ response.Year; 
        D.innerHTML="Movie Director :- "+ response.Director;
        R.innerHTML="Movie Rating :-"+ response.imdbRating;
    } else {
        src.innerHTNL="somthing went wrong";
    }
};















