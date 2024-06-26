function displayPoem(response) {
  
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "cf4b8d4et700d15264c45doca5caf311";
    let prompt = `Generate a poem about ${instructionsInput.value}`;
    let context = "You are a romantic poem expert and you love to write short poems. Your mission is to generate a-4 line poem in basic HTML and separate each line with <br />. Make sure you follow the user instruction. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem")
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div = "generating">  📌Generating a poem about ${instructionsInput.value}📌 </div>`;

   

    axios.get(apiUrl).then(displayPoem);
    

   
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);