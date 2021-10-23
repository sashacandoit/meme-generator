const memeForm = document.querySelector('#meme-form');
const deleteButtons = document.getElementsByClassName("delete");
const imageURL = document.querySelector('#img-url');
const topTextInput = document.querySelector('#top-text');
const bottomTextInput = document.querySelector('#bottom-text');
const memeResults = document.querySelector('#results');

memeResults.addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
        e.target.parentElement.remove();
    }
});

function addMeme () {
    const newMeme = document.createElement('div');
    newMeme.classList.add('meme-result');
    // memeDiv.style.backgroundImage = "url(imageURL.value)"
    
    const topTextBox = document.createElement('span');
    topTextBox.innerText = topTextInput.value;
    topTextBox.classList.add('first-line')
    
    const bottomTextBox = document.createElement('span');
    bottomTextBox.innerText = bottomTextInput.value;
    bottomTextBox.classList.add('second-line')
    
    const deleteBtn = document.createElement('div');
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add('delete');

    memeResults.appendChild(newMeme);
    newMeme.appendChild(topTextBox);
    newMeme.appendChild(bottomTextBox);
    newMeme.appendChild(deleteBtn);


}

memeForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addMeme();
})