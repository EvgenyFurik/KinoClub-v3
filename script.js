const searchInput=document.getElementById("search");
const filmsCards=document.querySelectorAll('.film');
searchInput.addEventListener('input', function(){
    const searchText=searchInput.value.toLowerCase();
    console.log('Пользователь ввел:', searchInput.value);

    for(let i=0; i<filmsCards.length; i++){
        const card = filmsCards[i];
        const title = card.querySelector('h2');
        const filmName= title.textContent.toLowerCase();

        if (filmName.includes(searchText)){
            card.style.display=''
        }
        else{
            card.style.display='none'
        }
    }
});
