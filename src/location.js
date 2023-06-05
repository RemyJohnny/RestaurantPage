export default function renderLocationTAB(pageContainer) {
  const container = document.createElement("div");
  const header = document.createElement("h1");
  const icon = document.createElement("i");
  const headquarter = document.createElement("p");
  const branch1 = document.createElement("p");
  const branch2 = document.createElement("p");
  const headquarterSpan = document.createElement("span");
  const HQ = document.createElement("span");
  const branch1Span = document.createElement("span");
  const B1 = document.createElement("span");
  const branch2Span = document.createElement("span");
  const B2 = document.createElement("span");

  container.setAttribute("id", "location");
  icon.classList.add("fa-solid", "fa-location-dot", "locate");
  headquarterSpan.classList.add("branch");
  branch1Span.classList.add("branch");
  branch2Span.classList.add("branch");
  HQ.classList.add("text");
  B1.classList.add("text");
  B2.classList.add("text");

  header.textContent = "OUR LOCATION  ";
  headquarterSpan.textContent = "HEAD QUARTER -   ";
  HQ.textContent =
    "501 Close, off 3rd Avenue, Banana Island,Lagos, 3rd Avenue, Lagos, 23401, Nigeria";
  branch1Span.textContent = "BRANCH1 -   ";
  B1.textContent = "515 South Street, Midland, Texas,79701, USA";
  branch2Span.textContent = "BRANCH2 -   ";
  B2.textContent =
    "пл. 8 Марта, 696, кв. 179, 035537, Ярославль,Кировская область, Russia";

  pageContainer.appendChild(container);
  container.appendChild(header);
  container.appendChild(headquarter);
  container.appendChild(branch1);
  container.appendChild(branch2);
  header.appendChild(icon);
  headquarter.appendChild(headquarterSpan);
  headquarter.appendChild(HQ);
  branch1.appendChild(branch1Span);
  branch1.appendChild(B1);
  branch2.appendChild(branch2Span);
  branch2.appendChild(B2);

  return container;
}
