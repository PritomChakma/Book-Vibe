const getStoredReadList =()=>{
const storeReadListStr = localStorage.getItem("read-list")
if(storeReadListStr){
    const sotreList = JSON.stringify(storeReadListStr)
    return sotreList
}
else{
    return []
}
}

const addToStoredReadList =(id)=>{
    const storeList = getStoredReadList()
    if(storeList.includes(id)){
        console.log(id, "Already Exist");
    }
    else{
        storeList.push(id)
         const storeListStr = JSON.stringify(storeList)
         localStorage.setItem("read-list", storeListStr)
    }
}
export {addToStoredReadList}