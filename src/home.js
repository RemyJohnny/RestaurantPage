export default function renderHomeTAB(pageContainer) {
  const hero = document.createElement("div");
  hero.classList.add("hero", "active");
  hero.innerHTML = `
<div class="text">
  DISCOVER THE REAL TASTE OF COFFEE WITH ACTIVEME COFFEE SHOP
</div>
          <ol>
  <h2>9 Unique Benefits of Coffee</h2>
  <li>Boosts energy levels</li>
  <li>May be linked to a lower risk of type 2 diabetes</li>
  <li>Could support brain health</li>
  <li>May promote weight management</li>
  <li>Linked to a lower risk of depression</li>
  <li>Could protect against liver conditions</li>
  <li>Supports heart health</li>
  <li>Could increase longevity</li>
  <li>May enhance athletic performance</li>
</ol>
<div class="subtext">
  We are the best coffee maker in the town and always ready to serve
  you with absolutely the best quality coffee, fresh ingredient and
  heartfelt services
</div>`;
  pageContainer.appendChild(hero);
  return hero;
}
