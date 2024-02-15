const jokeEl = document.getElementById('jokes');
const btn = document.getElementById('joke-btn');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
    xhr.onreadystatechange = function(){
     if(this.readyState === 4){
        if(this.status === 200){
            // console.log(JSON.parse(this.responseText).value)
             jokeEl.innerHTML =JSON.parse(this.responseText).value;
        }else{
            jokeEl.innerHTML ='Something Went Wrong (404)'
        }

     }
    }  
    xhr.send()
}
btn.addEventListener('click',generateJoke)
document.addEventListener('DOMContentLoaded',generateJoke)  