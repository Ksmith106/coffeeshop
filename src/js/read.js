import {ref as dataRef, roastRef, priceRef, imageRef ,get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {coffeeSelection} from './templates/coffeeOptions'

async function pageInit(){
    const coffeeRef = dataRef(db, 'coffee/');
    const roastedRef = roastRef(storage, `images/${file.coffeeName}`);
    const valueRef = priceRef(storage, `images/${file.coffeeName}`);
    const pictureRef = imageRef( storage, `images/${file.coffeeName}`);
    const coffeeSnapShot = await get(coffeeRef, roastedRef, valueRef, pictureRef)
    const data = coffeeSnapShot.val();

Object.values(data).map(coffee=>{
     const card = coffeeSelection(coffee)
     document.body.append(card)
          
     })
}

pageInit()