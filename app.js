// ¡Buena suerte!

const quoteOfTheDay = document.querySelector('.card__quote');
const newAdvice = document.querySelector('.card__dice');
const adviceNumber = document.querySelector('#advice-id');


newAdvice.addEventListener('click', async function () {
    // We obtain(fetch) the api from where we want to get the data.
    const response = await fetch('https://api.adviceslip.com/advice');
    console.log('object response: ', response);
    // Transform the JSON to something that JS can understand such as an array or a object -> IN THIS CASE ITS OBJECT
    const data = await response.json();
    console.log('object data: ', data);
    // We use "data.slip.advice" because the API is returnin a property called "SLIP" that contains the advice and the id.
    quoteOfTheDay.textContent = data.slip.advice;
    adviceNumber.textContent = data.slip.id;
});

