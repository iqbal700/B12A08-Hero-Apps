
 import { ToastContainer, toast } from 'react-toastify';
const getStoreApp = () => {

   const storedBookSTR = localStorage.getItem('readList');

   if ( storedBookSTR) {
      const storeBookData = JSON.parse(storedBookSTR);
      return storeBookData;

   } else {

      return [];
   }
}


const addToStoreDB = id => {

    const storeData =  getStoreApp();

    if ( storeData.includes(id)) {
          toast("App already Exist!")

    }  else {
        storeData.push(id);
        const data = JSON.stringify(storeData);
        localStorage.setItem('readList', data)
         toast("Yahooo! Installed apps")

    }

}

export {addToStoreDB, getStoreApp}