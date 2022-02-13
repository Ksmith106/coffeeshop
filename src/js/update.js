import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, set, get, } from 'firebase/database'
import { db, storage} from "./libs/firebase/firebaseConfig";

const coffeeForm = document.forms['coffeeForm']

async function pageInit(){
  const key = sessionStorage.getItem('key');
  const coffeeRef = databaseRef(db, `coffe/${key}`)
  const coffeeSnapShot = await get(coffeeRef)

  if(coffeeSnapShot.exists()){
  setFieldValues(coffeeSnapShot.val())
  }

  coffeeForm.addEventListener('submit', onUpdateCoffee)
}

function onUpdateCoffee(e){
  e.preventDefault();
  const coffee = e.target.elements['coffeeName'].value.trim()
  const price = e.target.elements['priceTotal'].value.trim()
  const roast = e.target.elements['roastType'].value.trim()
  
  updateCoffeeData()
}

function setFieldValues(coffee, urlPath){
    coffeeForm.elements['coffeeName'].value = coffee
    document.querySelector('#uploadImage img').src = urlPath
}

function updateCoffeeData(){
  const coffee = coffeeForm.elements['coffeeName'].value.trim()
  const price = e.target.elements['priceTotal'].value.trim()
  const roast = e.target.elements['roastType'].value.trim()
  const file = e.target.elements['coffeeImage'].files
    if(file.length !==0){
      const imageRef= storeageRef(storage, "path")
    }
  const key = sessionStorage.getItem('key');
  const dataRef = databaseRef(db, `coffee/${key}`)
  set(dataRef,{

  })
}

pageInit()