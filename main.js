const getProducts = async() =>{
    const {data} =await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    return data;
}

const displayProducts = async() =>{
    const data= await getProducts();
    console.log(data);
    const result = data.map((product)=>{
        return `
            <div class='product'>
                <h2>${product.title}</h2>
                <h3>${product.category}</h3>
                <p>${product.description}</p>
                <a href='details.html?id=${product.id}'>Extra Details</a>
            </div>
        `;
    }).join(' ')
    document.querySelector('.products').innerHTML = result;

}
displayProducts();
