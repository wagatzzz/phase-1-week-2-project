// Your code here
fetch("http://localhost:3000/characters")
.then(res => res.json())
.then(function(data){
    const animalCharacters = data;
    const animalName = document.getElementById("character-bar");
    
    

    for(const character of animalCharacters){
        let animalNameAppend = document.createElement("span");
        animalNameAppend.textContent = character.name;
        animalNameAppend.setAttribute("data-character", JSON.stringify(character)); // Store the data in the attribute
        animalNameAppend.onclick = displayCharacterName;
        animalName.appendChild(animalNameAppend);

    }


});

function displayCharacterName(event) {
    const characterData = JSON.parse(event.target.getAttribute("data-character"));
    const detailedInfo = document.getElementById("detailed-info");
  detailedInfo.innerHTML = `
    <p>Name: ${characterData.name}</p>
    <img src="${characterData.image}" alt="${characterData.name}">
    <h4>Total Votes<span id="vote-count">${characterData.votes}</span></h4>
    <div id ="form"></div>
  `;
  
  
}
function submitVotes(event){
  event.preventDefault();
  
  let commentContent = parseInt(document.getElementById("votes").value);
  let votesValue = document.getElementById("vote-count");
  let whatsalreadythere = parseInt(votesValue.textContent);
  
  votesValue.textContent = whatsalreadythere + commentContent;
}
function resetCount(){
  let count = document.getElementById("vote-count");
  count.textContent=("0");
}
