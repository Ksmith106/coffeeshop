

function Coffee({key, urlPath, name, price, roast}) {
    const template = `
    <aside class="coffee">
    
    <figure>
    <img src="${urlPath}" width="160" alt="coffee">
    <figcaption>
    <h2>${name}</h2>
    </figcaption>
    <figcaption>
    <h2>${price}</h2>
    </figcaption>    
    <figcaption>
    <h2>${roast}</h2>
    </figcaption> 
    </figure>
    
    <footer>
    <button id="edit" data-key="${key}">edit</button>
    <button id="delete" data-key="${key}">delete</button>
    </footer>
    
    </aside>
    `
    const element = document.createRange().createContextualFragment(template).children(0)
    addButtonControls(element)
    return element
    }

    function addButtonControls(coffee){
        coffee.querySelector('#edit').addEventListener('click', onEditcoffee)
        coffee.querySelector('#delete').addEventListener('click', onRemovecoffee)
        }
        
        function onEditcoffee(e){
        const key = e.target.dataset.key;
        sessionStorage.setItem('key', key)
        window.location.assign('update.html')
        }
        
        function onRemovecoffee(e){
        const key = e.target.dataset.key;
        sessionStorage.setItem('key', key)
        window.location.assign('delete.html')
        }
        
export {Coffee}