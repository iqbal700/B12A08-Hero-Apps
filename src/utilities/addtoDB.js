const getStoreBook = () => {

   const storedBookSTR = localStorage.getItem('readList');

   if ( storedBookSTR) {
      const storeBookData = JSON.parse(storedBookSTR);
      return storeBookData;

   } else {

      return [];
   }
}


const addToStoreDB = id => {

    const storeData =  getStoreBook();

    if ( storeData.includes(id)) {
        alert('already exist')

    }  else {
        storeData.push(id);
        const data = JSON.stringify(storeData);
        localStorage.setItem('readList', data)

    }

}

export {addToStoreDB, getStoreBook}