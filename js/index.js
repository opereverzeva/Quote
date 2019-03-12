// Определение переменных, задание массива цветов
const colorArray = ['#26cced', '#A83876', '#BB893E', '#e884b9', '#f53214', '#cab7ed', '#955689', '#7DD175', '#11306A', '#5766E5', '#E00099', '#777EDF', '#B28BE4', '#49D4AD', '#55BF40', '#A194DB', '#3DADB8', '#234116', '#0F87FF', '#6500E0', '#B1FF33', '#BE85FF', '#639284'];

const fetchData =()=>{
  return $.ajax( "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", {dataType:"json"});
};
$( document ).ready(function() {
   fetchData().then((data)=>{
     console.log(data.quotes);
     let randomQuote = getRandomQuote(data.quotes);
     insertQuote(randomQuote.quote, randomQuote.author);
     applyClick(data.quotes);
});
});

let getRandomQuote = (quotes) =>{
  return quotes[Math.floor(Math.random()*quotes.length)];
};
let insertQuote = (quote, author) =>{
     $("#text").text(quote);
     $("#author").text(author);
   $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
    $('#vk-quote').attr('href', 'https://vk.com/share.php?title=' + encodeURIComponent('"' + quote + '" ' + author));
};
let getRandomColor = (colorArray) =>{
  return colorArray[Math.floor(Math.random()*colorArray.length)];
};

let changeColor =(colorArray)=>{
  let newColor = getRandomColor(colorArray);
  $("body, .button").css('background-color', newColor);
  $("#quote-box").css('color', newColor);
}

let applyClick = (quotes) =>{
  $('#new-quote').on('click', function (even){
    let randomQuote = getRandomQuote(quotes);
    insertQuote(randomQuote.quote, randomQuote.author);
    changeColor(colorArray)
  })
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}