export default function renderAboutTAB(pageContainer) {
  const aboutSection = document.createElement("div");
  const imgDiv = document.createElement("div");
  const aboutText = document.createElement("div");
  const img = document.createElement("img");
  const header = document.createElement("h2");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const learnMoreBtn = document.createElement("button");
  const btnIcon = document.createElement("i");

  aboutSection.setAttribute("id", "aboutSection");
  imgDiv.classList.add("img");
  aboutText.classList.add("aboutText");
  btnIcon.classList.add("fa", "fa-arrow-right");
  img.src = "./image/cofeeShop.jpg";
  img.setAttribute("alt", "photo of our coffee shop");

  header.textContent = "ABOUT ACTIVEME COFFEE";
  p1.textContent =
    " ActiveMe coffee is founded by different individuals with same passion of bringing great tasting coffee and delicious food. We believe that everyone deserves a hearty brunch and decent coffee to enjoy every day.";
  p2.textContent = ` Using only the freshest ingredients and locally roasted coffee
  beans. We envision bringing together foreign and local flavours
  without compromising taste and quality.Our semi casual dining
  concept allows our team to be in contact with our patrons with the
  intentions of bringing the best experience possible there is.`;
  learnMoreBtn.textContent = "learn more";

  pageContainer.appendChild(aboutSection);
  aboutSection.appendChild(imgDiv);
  aboutSection.appendChild(aboutText);
  imgDiv.appendChild(img);
  aboutText.appendChild(header);
  aboutText.appendChild(p1);
  aboutText.appendChild(p2);
  aboutText.appendChild(learnMoreBtn);
  learnMoreBtn.appendChild(btnIcon);
  return aboutSection;
}
