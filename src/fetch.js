export const getTodos = (functn, errorFunctn) => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => response.json())
        .then(todo => functn(todo))
        .catch((error) => console.error('Error:', error));
}


