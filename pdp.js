(() => {
  const params=new URLSearchParams(location.search),id=Number(params.get('id'));
  const product=products.find(p=>p.id===id);
  const $=s=>document.querySelector(s);
  if(!product){$('#pdpRoot').innerHTML='<div class="pdp-not-found"><h1>Product not found</h1><p>Please return to the shop and choose a product.</p><a class="button primary" href="index.html#categories">Browse products</a></div>';return;}
  const price=()=>country==='uk'?countries.uk.symbol+product.p.toFixed(2):countries[country].symbol+' — price to be confirmed';
  document.title=`${product.n} | Nanna's Kitchen`;
  $('#crumbProduct').textContent=product.n;$('#pdpCategory').textContent=product.c;$('#pdpName').textContent=product.n;$('#pdpPrice').textContent=price();$('#pdpDescription').textContent=product.description;$('#pdpMetaCategory').textContent=product.c;$('#pdpStore').textContent=countries[country].name;$('#pdpImage').src=product.img;$('#pdpImage').alt=product.n;
  $('#country').addEventListener('change',()=>{$('#pdpPrice').textContent=price();$('#pdpStore').textContent=countries[country].name});
  $('#qtyMinus').onclick=()=>{$('#pdpQty').value=Math.max(1,Number($('#pdpQty').value||1)-1)};
  $('#qtyPlus').onclick=()=>{$('#pdpQty').value=Math.max(1,Number($('#pdpQty').value||1)+1)};
  $('#pdpAdd').onclick=()=>{const qty=Math.max(1,parseInt($('#pdpQty').value,10)||1),found=cart.find(x=>x.i===product.id);found?found.q+=qty:cart.push({i:product.id,q:qty});saveCart();renderCart();$('#cartOverlay').classList.add('show')};
  const related=products.filter(p=>p.c===product.c&&p.id!==product.id).slice(0,4);
  $('#relatedProducts').innerHTML=related.map(p=>`<article class="product-card is-visible"><a class="product-image" href="product.html?id=${p.id}"><img loading="lazy" src="${p.img}" alt="${p.n}"><span class="natural-badge">✦ 100% Natural*</span></a><div class="product-info"><span class="product-cat">${p.c}</span><h3><a href="product.html?id=${p.id}">${p.n}</a></h3><div class="price-line"><span class="price">${country==='uk'?'£'+p.p.toFixed(2):countries[country].symbol+' — price to be confirmed'}</span></div><a class="details-link" href="product.html?id=${p.id}">View product details ↗</a></div></article>`).join('');
})();
