// VARIABLES
const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill",
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        person: "Sam Levenson",
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        person: "Albert Einstein",
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        person: "Ralph Waldo Emerson",
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        person: "Confucius",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon",
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky",
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        person: "Lao Tzu",
    },
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        person: "Walt Disney",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        person: "Steve Jobs",
    },
    {
        quote: "What the mind of man can conceive and believe, it can achieve.",
        person: "Napoleon Hill",
    },
];

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
