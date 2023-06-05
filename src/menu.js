export default function renderMenuTAB(pageContainer) {
  const menu = document.createElement("div");
  const header = document.createElement("h2");
  const lists = document.createElement("ul");
  const seeMoreBtn = document.createElement("button");
  const btnIcon = document.createElement("i");
  let list = [];
  let itemsName = [];
  let itemsPrice = [];
  for (let i = 0; i < 9; i++) {
    list[i] = document.createElement("li");
    itemsName[i] = document.createElement("span");
    itemsPrice[i] = document.createElement("span");

    itemsName[i].classList.add("name");
    itemsPrice[i].classList.add("price");

    lists.appendChild(list[i]);
    list[i].appendChild(itemsName[i]);
    list[i].appendChild(itemsPrice[i]);
  }

  menu.setAttribute("id", "menu");
  list[0].classList.add("title");
  btnIcon.classList.add("fa", "fa-arrow-right");

  header.textContent = "OUR MENU";
  itemsName[0].textContent = "COFFEE";
  itemsPrice[0].textContent = "PRICE";
  itemsName[1].textContent = "Double Espresso";
  itemsPrice[1].textContent = "$9.99";
  itemsName[2].textContent = "Americano";
  itemsPrice[2].textContent = "$10.99";
  itemsName[3].textContent = "Iced Americano";
  itemsPrice[3].textContent = "$11.99";
  itemsName[4].textContent = "Cappuccino";
  itemsPrice[4].textContent = "$12.99";
  itemsName[5].textContent = "Flat White";
  itemsPrice[5].textContent = "$11.99";
  itemsName[6].textContent = "Latte";
  itemsPrice[6].textContent = "$12.99";
  itemsName[7].textContent = "Caffe Macchiato";
  itemsPrice[7].textContent = "$9.89";
  itemsName[8].textContent = "Caffe Mocha";
  itemsPrice[8].textContent = "$12.99";
  seeMoreBtn.textContent = "see More";

  /*pageContainer.appendChild(menu);
  pageContainer.insertBefore(Header, menu);
  pageContainer.insertBefore(menu, footer);*/

  pageContainer.appendChild(menu);

  menu.appendChild(header);
  menu.appendChild(lists);
  menu.appendChild(seeMoreBtn);
  seeMoreBtn.appendChild(btnIcon);

  console.log(menu);
  return menu;
}
