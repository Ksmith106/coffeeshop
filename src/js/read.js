import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {coffeeSelection} from './templates/coffeeOptions'


async function pageInit(){
    const coffeeRef = dataRef(db, 'coffee');
    const coffeeSnapShot = await get(coffeeRef)
    const data = coffeeSnapShot.val();
    // ES Modules For The Render Function
    // API Data Data Structure
    // {{}, {}, {}, {}}
    // Arrays of Objects...
    // Object.keys(obj)   Object.enteries(obj) Object.values(obj)
    // object['prop']
     Object.values(data).map(coffee=>{
          const card = coffeeSelection(coffee)
          document.body.append(card)
          
     })
}

pageInit()
