import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get, remove} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.forms["coffeeForm"].addEventListener("submit", onAddCoffee);
document.querySelector("#coffeeImage").addEventListener("change", onImageSelected);

    function onAddCoffee(e) {
        e.preventDefault();
        uploadNewCoffeeSelection();
    }
   function onImageSelected(e) {
    let file = e.target.files[0];
    console.log(file)
    document.querySelector(".display img").src = URL.createObjectURL(file);
    }
    async function uploadNewCoffeeSelection() {
        const coffee = document.querySelector('#coffeeName').value.trim();
        const price = document.querySelector('#priceTotal');
        const roast = document.querySelector('#roastType');
        const file = document.querySelector('#coffeeImage').files[0]

        const imageRef = storageRef( storage, `images/${file.coffeeName}`);
        const priceRef = storageRef( storage, `images${file.priceTotal}`);
        const roastRef = storageRef( storage, `images${file.roastType}`);
        const dataRef =  databaseRef( db, 'coffee')

        const uploadResult = await uploadBytes(imageRef, roastRef, priceRef, file);

        const urlPath =  await getDownloadURL(imageRef) 

        const storagePath = uploadResult.metadata.fullPath;

        const itemRef = await push(dataRef)

    set(itemRef,{
        key:itemRef.key,
        sku:`jheo${itemRef.key}`,
        urlPath,
        storagePath,
        coffee,
        price,
        roast
        })
    }