/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#App");

const formatPrice = (price) => {
  const newPRICE = new window.Intl.NumberFormat("es", {
    style: "currency", 
    currency: "dom"
  }).format(price);
  return newPRICE;
};

window
  .fetch(`${baseUrl}/api/avo`)
  .then((respuesta) => respuesta.json())
  .then((responseJson) => {
    responseJson.data.forEach((item) => {
      const todosLosItems = [];

      const img = document.createElement("img");
      img.src = `${baseUrl}${item.image}`;
      img.className = "img";

      const titulo = document.createElement("h2");
      titulo.textContent = item.name;
      titulo.className = "title";

      const precio = document.createElement("p");
      precio.className = "price";
      precio.textContent = formatPrice(item.price);

      const Info = document.createElement("div");
      Info.append(titulo, precio);
      Info.id = "info";

      const contenedor = document.createElement("div");

      const contIMG = document.createElement("div") 
      contIMG.append(img)
      contIMG.id = "contIMG"
      contenedor.append(contIMG, Info);
      contenedor.className = "app";

      todosLosItems.push(contenedor);
      appNode.append(...todosLosItems);
    });
  });