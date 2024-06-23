const express= require('express');
const app= express();

// app.get('/', (req, res) =>{
//     res.send("Hello");
// })

//  Get a list of jokes
app.get('/api/jokes', (req, res) =>{
    const jokes= [
        {
          "type": "programming",
          "setup": "Why did the programmer quit his job?",
          "punchline": "Because he didn't get arrays.",
          "id": 18
        },
        {
          "type": "programming",
          "setup": "Why do C# and Java developers keep breaking their keyboards?",
          "punchline": "Because they use a strongly typed language.",
          "id": 74
        },
        {
          "type": "programming",
          "setup": "What's the best part about TCP jokes?",
          "punchline": "I get to keep telling them until you get them.",
          "id": 369
        },
        {
          "type": "programming",
          "setup": "What goes after USA?",
          "punchline": "USB.",
          "id": 390
        },
        {
          "type": "programming",
          "setup": "Which song would an exception sing?",
          "punchline": "Can't catch me - Avicii",
          "id": 33
        },
        {
          "type": "programming",
          "setup": "How do you check if a webpage is HTML5?",
          "punchline": "Try it out on Internet Explorer",
          "id": 56
        },
        {
          "type": "programming",
          "setup": "What’s the object-oriented way to become wealthy?",
          "punchline": "Inheritance.",
          "id": 378
        },
        {
          "type": "programming",
          "setup": "A male developer often gets called as a Dev, then what would you call a female developer?",
          "punchline": "Devi.",
          "id": 396
        },
        {
          "type": "programming",
          "setup": "Why do Java programmers wear glasses?",
          "punchline": "Because they don't C#.",
          "id": 35
        },
        {
          "type": "programming",
          "setup": "3 SQL statements walk into a NoSQL bar. Soon, they walk out",
          "punchline": "They couldn't find a table.",
          "id": 376
        }
      ];
    res.send(jokes);
})


const port= process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("Server is running");
})