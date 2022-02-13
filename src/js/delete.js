import {ref as databaseRef, set, get, } from 'firebase/database'
import {db} from "./libs/firebase/firebaseConfig";

function pageInit(){
    const key = sessionStorage.getItem('key')
    console.log("Delete Page")
    const path = `coffee/${key}`
    const coffeeRemoveRef = ref()

  }
  
  Object.values(data).map(coffee=>{
    const card = CoffeeOptions(coffee)
    document.body.append(card)

    })

  pageInit()