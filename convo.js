window.addEventListener('DOMContentLoaded', function() {
    var inputsArray = []; // Declare an empty array to store user inputs
  
    var submitButton = document.getElementById('enterbutton');
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Retrieve the user input from the input box
      var userInput = document.getElementById('starter').value;
  
      // Store the input in the array
      inputsArray.push(userInput);
  
      // Optional: Display the stored inputs in the scrollable box
      var scrollableBox = document.getElementById('scrollableBox');
      scrollableBox.innerHTML += userInput + '<br>';
  
      // Clear the input box after storing the value
      document.getElementById('starter').value = '';
  
    });
  
    var randomButton = document.getElementById('randomButton');
    randomButton.addEventListener('click', function() {
      // Get a random input from the stored inputs
      var randomInput = inputsArray[Math.floor(Math.random() * inputsArray.length)];
  
      // Display the random input in the random div
      var randomDiv = document.getElementById('randomDiv');
      randomDiv.textContent = randomInput;
    });

    
  
  });
  window.addEventListener('DOMContentLoaded', function() {
    var storedInputs = JSON.parse(localStorage.getItem('userInputs'));
  
    if (storedInputs && storedInputs.length > 0) {
      var scrollableBox = document.getElementById('scrollableBox');
  
      storedInputs.forEach(function(input) {
        scrollableBox.innerHTML += input + '<br>';
      });
    }
  });
  