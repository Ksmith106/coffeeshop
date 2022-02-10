import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get, remove} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.querySelector("#coffeeImage").addEventListener("change", onImageSelected);
document.forms["coffeeForm"].addEventListener("submit", onAddCoffee); 


    function onAddCoffee(e) {
        e.preventDefault();
        uploadNewcoffeeSelection();
    }
  

   function onImageSelected(e) {
    let file = e.target.files[0];
    console.log(file)
    document.querySelector(".display img").src = URL.createObjectURL(file);
    }
    async function uploadNewcoffeeSelection() {
        const coffee = document.querySelector('#coffeeName').value.trim();
        const file = document.querySelector('#coffeeImage').files[0]
        const imageRef = storageRef( storage, `images/${file.name}`);
        const dataRef =  databaseRef( db, 'coffee')
        const uploadResult = await uploadBytes(imageRef, file);
        const urlPath =  await getDownloadURL(imageRef) 
        const storagePath = uploadResult.metadata.fullPath;
        const itemRef = await push(dataRef)

        set(itemRef,{
           key:itemRef.key,
           sku:`jhvr${itemRef.key}`,
           urlPath,
           storagePath,
           coffee,
           price,
           roast
        })
        
    }
 