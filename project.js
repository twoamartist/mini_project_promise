// alert('error')
const quoteContainer=document.getElementById('quote-container');
console.log(quoteContainer)
const quoteText=document.querySelector('.quote-text');
console.log(quoteText)
const authorText=document.querySelector('.author');
console.log(authorText)
const newQuote=document.getElementById('new-quote')
console.log(newQuote)
const loader=document.getElementById('loader')
const btnContainer=document.querySelector('#new-quote')
const tweetQuoteBtn = document.getElementById('tweet-quote');
let apiQuotes=[];
function getNewQuote(){
    showLoader();
    const randomQuote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    quoteText.textContent=randomQuote.text;
    authorText.textContent=randomQuote.author;
    stopLoader();
}
function showLoader(){
    quoteContainer.hidden=true;
    loader.hidden=false;
    
}
function stopLoader(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}

function getQuote(){
    showLoader();
    const apiUrl="https://type.fit/api/quotes";
    setTimeout(()=>{
        fetch(apiUrl)
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            apiQuotes=data;
            console.log("my api working is done ");
            getNewQuote();
        })
        .catch((err)=>{
            console.log(err);
        })
    },1000)

}
getQuote();
console.log(getNewQuote);
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}`
    window.open(twitterUrl, "_blank")
}


btnContainer.addEventListener('click', getNewQuote)
tweetQuoteBtn.addEventListener('click', tweetQuote)