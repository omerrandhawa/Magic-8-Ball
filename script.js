document.getElementById('generateBtn').addEventListener('click', function() {
    
    
    const index = Math.floor(Math.random() * (5));
    const responses = ["no","maybe","maybe so","most likely","yes","most probably"]

    document.getElementById('result').innerHTML = 'Your answer is ' + responses[index] +" Please enter a different question";
});
