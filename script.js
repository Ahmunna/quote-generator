var  i =0;

// array of quotes
var quotes = [
    
     "Be yourself; everyone else is already taken." ,
     "So many books, so little time. ",
     "A room without books is like a body without a soul. ",
     "Don't cry because it's over, smile because it happened. ",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "A friend is someone who knows all about you and still loves you.",
    "Always forgive your enemies; nothing annoys them so much.",
    "We accept the love we think we deserve",
    "It does not do to dwell on dreams and forget to live.",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.",
    "Tell it like it is, in a way they want to hear it.",
    "I warn you against believing that advertising is a science.",
    "All the world is made of faith, and trust, and pixie dust.",
    "If my life is going to mean anything, I have to live it myself.",
    "Life is a book and there are a thousand pages I have not yet read",
    "The flower that blooms in adversity is the rarest and most beautiful of all.",
    "Life can only be understood backwards; but it must be lived forwards.",
    "The most important thing is to enjoy your life to be happy it's all that matters.",
    "I don't know the question, but sex is definitely the answer",
    "You can have it all. Just not all at once",
    "You endure what is unbearable, and you bear it. That is all.",
    "I like flaws. I think they make things interesting."
];

// array of authors

 var authors = [
    
      "Oscar Wilde",
     "Frank Zappa",
     "Marcus Tullius Cicero",
    " Dr. Seuss",
     "Mahatma Gandhi",
     "Robert Frost",
     "Mark Twain",
     "Elbert Hubbard",
   " Oscar Wilde",
    " Stephen Chbosky",
     "J.K. Rowling",
      "Mark Twain",
    "Leo Burnett",
      "Wihan Meerholz",
     "Bill Bernbach",
     "J.M. Barrie",
     "Rick Riordan",
     "Cassandra Clare",
     "Walt Disney Company",
     " Søren Kierkegaard",
     "Audrey Hepburn",
     "Woody Allen",
     "Oprah Winfrey",
     "Cassandra Clare",
     "Sarah Dessen"
    ];

//title animation function 
function animation()
{
    var myvar = setTimeout(animation,100);
    var message = "Quote Generator";
    document.getElementById("title").innerHTML = message.substring(0,i);
    i++;
    if(i >=message.length+1)
    clearTimeout(myvar);
}


//FadeIn animation 

function fadeinAndScale()
{
     document.getElementById("quote_container").classList.add("fadeIn"); 
     document.getElementById("author_container").classList.add("fadeIn");
    
}

//changing the quote 
function load()
{
    var choice = Math.floor(Math.random() * (quotes.length-1)) + 1;
     document.getElementById("quote_container").innerHTML = quotes[choice];
    document.getElementById("author_container").innerHTML = authors[choice];
    
}

// when loading the page
function init()
{
        fadeinAndScale();
        animation();
    
}











