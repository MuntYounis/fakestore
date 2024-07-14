const getProduct =async ()=>{
    const params = new URLSearchParams(window.location.search);
    const id=params.get('id');
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;

}

const displayProduct = async () =>{
    const data = await getProduct();
    const results = `
        <h2>${data.title}</h2>
        <img src = '${data.image}'>
        <p>${data.description}</p>
        <h3>${data.category}</h3>
        <h3>${data.price}</h3>
    `;
    document.querySelector(".products").innerHTML = results;
}

displayProduct();