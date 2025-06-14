const productContainer = document.getElementById("productContainer");

async function fetchProducts1() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    console.log(`Error ${res.status} : ${res.statusText}`);
  }

  const data = await res.json();
  console.log(data);
  
  data.map((Element, index) => {
    const product  = document.createElement('div');
    
    product.key = index;

    product.innerHTML = `
            <div class="row border m-2 rounded">
                <div class="col-3">
                    <img src=${Element.image} alt=${Element.title} class="w-75 m-3 border rounded">
                </div>
                <div class="col-9 d-grid my-3">
                    <span class="fs-3 fw-bold">${Element.title}</span>
                    <span class="fs-5">${Element.category}</span>
                    <span>
                        <span class="fs-5 fw-bold">Ratings: </span>
                        <span>${Element.rating.rate}/5</span>
                    </span>
                    
                    <span class="fs-4 text-success">₹ ${(Element.price)*85}</span>
                    <button type="button" class="btn btn-primary addToCartButton">Add to Cart</button>
                </div>
            </div>`;

            productContainer.appendChild(product);
  });
}


async function fetchproducts2(){
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      console.log(`Error ${res.status} : ${res.statusText}`);
    }
  
    const data = await res.json();
    console.log(data);
    
    const row  = document.createElement('div');
    row.classList.add("row","p-2");

    data.map((Element, index) => {
      const product  = document.createElement('div');
      product.classList.add("col-4")
      product.key = index;
  
      product.innerHTML = `
              <div class="container d-grid text-center border p-2 rounded shadow m-2">
                <span
              ><img
                src=${Element.image} alt=${Element.title}
                class="m-3 border rounded img2"
            /></span>
            <span class="fs-3 fw-bold"
              >${Element.title}</span
            >
            <span class="fs-5">${Element.category}</span>
            <span>
              <span class="fs-5 fw-bold">Ratings: </span>
              <span>${Element.rating.rate}/5</span>
            </span>

            <span class="fs-4 text-success">₹ ${(Element.price)*85}</span>
            <span
              ><button
                type="button"
                class="btn btn-primary addToCartButton2"
              >
                Add to Cart
              </button></span
            >
            </div>`;
  
              row.appendChild(product);
    });

    productContainer.appendChild(row);
}




`https://api.openweathermap.org/data/2.5/weather?lat=23.2584857&lon=77.401989&appid=1cefe43006e662107c8d0454bde6852c
`
"lat": 23.2584857,
"lon": 77.401989,


`http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=1cefe43006e662107c8d0454bde6852c
`