var allQuotes = [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "Don’t wait. The time will never be just right.", author: "Napoleon Hill"},
    {quote: "Be yourself; everyone else is already taken", author: "Oscar Wilde"},
    {quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett"},
    {quote: "Pursue what catches your heart, not what catches your eyes.", author: "Roy T. Bennett"},
   
];

var remainingQuotes = [...allQuotes]; 

function generateUniqueQuote() {
    if (remainingQuotes.length === 0) {
        remainingQuotes = [...allQuotes]; 
    }

    var randomIndex = Math.floor(Math.random() * remainingQuotes.length - 0 );
    var quoteObject = remainingQuotes[randomIndex];

    
    remainingQuotes.splice(randomIndex, 1);

    
     document.getElementById("quoteDisplay").innerHTML = quoteObject.quote;
    document.getElementById("authorDisplay").innerHTML = quoteObject.author;

}
