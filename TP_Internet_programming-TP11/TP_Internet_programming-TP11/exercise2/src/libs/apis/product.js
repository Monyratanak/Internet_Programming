var productsApi = {
    async getAllProduct(cateforyId, itemId) {
        if(cateforyId == ""){
            const res = await fetch('http://localhost:3001/product/all',{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    origin: 'http://localhost:8080'
                }
            })
            const result = res.json();
            return result
        }else{
            const res = await fetch(`http://localhost:3001/product/all/${cateforyId}/${itemId}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    origin: 'http://localhost:8080'
                }
            })
            const result = res.json();
            return result
        }
    }
}

export default productsApi;