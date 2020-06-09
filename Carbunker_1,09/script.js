const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/cars', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(car => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = "Brand: " + car.brand;

      const img = document.createElement('img');
      img.src = car.imageUrl;
      img.height = 450;
      img.weight = 450;

      const p = document.createElement('p');
      car.description = car.description.substring(0, 300);
      p.textContent ="Description: " +`${car.description}...`;

      const pSeller = document.createElement('p');
      pSeller.textContent ="Seller: " + car.seller;

      const pPrice = document.createElement('p');
      pPrice.textContent = "Price: "+ car.price;


      container.appendChild(card);
      card.appendChild(img);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(pSeller);
      card.appendChild(pPrice);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Error!`;
    app.appendChild(errorMessage);
  }
}
request.send();