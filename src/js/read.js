import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {coffeeSelection} from './templates/coffeeOptions'


async function pageInit(){
    const coffeeRef = dataRef(db, 'coffee/');
    const coffeeSnapShot = await get(coffeeRef)
    const data = coffeeSnapShot.val();

     Object.values(data).map(coffee=>{
          const card = coffeeSelection(coffee)
          document.body.append(card)
          
     })
}

pageInit()
