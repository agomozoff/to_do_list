let button = document.querySelector('.btn-add');

button.addEventListener('click', function(){
    document.querySelector('.list-false-title').style.display = 'none';

    let headerNote = document.querySelector('#input_title').value;
    let textNote = document.querySelector('#input_text').value;
    
    let divNote = document.createElement('div');
    divNote.classList.add('item');
    let headerDiv = document.createElement('h3');
    headerDiv.classList.add('list-true-title')
    headerDiv.textContent = headerNote;
    let textDiv = document.createElement('p');
    textDiv.textContent = textNote;

    divNote.appendChild(headerDiv);
    divNote.appendChild(textDiv);

    document.querySelector('.list-wrapper').appendChild(divNote);
})