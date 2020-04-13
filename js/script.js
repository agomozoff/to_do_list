let button = document.querySelector('.btn-add');


button.addEventListener("click", function(){
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
    let btnClose = document.createElement('img');
    btnClose.setAttribute('class', 'btn-close');
    btnClose.setAttribute('src', 'img/close-button.png');
    btnClose.setAttribute('alt', 'close');
    // btnClose.src = 'img/close-button.png';

    divNote.appendChild(headerDiv);
    headerDiv.appendChild(btnClose);
    divNote.appendChild(textDiv);
    

    document.querySelector('#input_title').value = "";
    document.querySelector('#input_text').value = "";

    document.querySelector('.list-wrapper').appendChild(divNote);
});

// let close = document.querySelectorAll('.btn-close');
// console.log(close);
// close.forEach(function(item){
//     this.addEventListener('click', function(){
//         console.log(this);
//     })
// }); 

// btnClose.addEventListener('click', function(){
//     // document.getElementsByClassName('item').remove();
//     console.log(btnClose);
// });