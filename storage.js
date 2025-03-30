// {
//     name: 'Teste';
//     cards: [
//         {name: 'Lavar a louça', description: 'Lavar a louça as 15h'}
//     ]
// }


function addListToStorage(name) {
    let lists = [];
    
    try {
        lists = JSON.parse(GetLists())  || []
    } catch (error) {
        console.error('Erro ao carregar listas do localStorage', error);
        lists = []
    }

    if(lists.some(list => list.name === name)) {
        console.warn('Lista já existe');
        return false;
    }

    const newList = {
        name,
        description: ''
    }
    

    lists.push(newList);
    
    localStorage.setItem('lists',JSON.stringify(lists))

    return true

}


function GetLists() {
    return localStorage.getItem('lists');
}

function StorageCard() {

}


export {addListToStorage, GetLists, StorageCard}