# Nanna's Kitchen — category-first website preview

A responsive static website preview inspired by the simple, category-led shopping flow of Kings Premium Pickles UK. This is a GitHub Pages prototype, not a production WordPress/WooCommerce store.

## Homepage shopping flow
- The homepage shows the hero, story and **seven product categories**. It does not show the full product catalogue.
- Click a category card to reveal only products belonging to that category.
- Product listings show up to **12 products at a time**. Use **Load more products** to reveal the next set where a category contains more than 12 items.
- Click a product image, name or View details link to open its dedicated `product.html?id=PRODUCT_ID` product detail page.
- Product detail pages include product information, price, quantity selection, add-to-basket and related products.

## WhatsApp integration
A floating green WhatsApp contact button appears at the bottom-right of the homepage and product detail page. The cart's **Order via WhatsApp** button builds an order message with country, customer details, products, quantities and subtotal.

To activate WhatsApp with the business account, open `script.js` and set `WHATSAPP_NUMBER` near the top. Enter the number with country code and digits only, without `+`, spaces or dashes. Example format only: `447700900123`. The actual Nanna's Kitchen business number was not included in the supplied brief, so the number is intentionally blank rather than inventing a contact.

## Preview on GitHub
1. Create a GitHub repository.
2. Upload all files from this folder to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Open the GitHub Pages URL.

## Files
- `index.html` — homepage and category cards
- `product.html` — product detail page
- `style.css` — layout, responsive styles and animations
- `script.js` — product catalogue, category filtering, cart and WhatsApp integration
- `pdp.js` — product detail page behaviour

## Content and production notes
- UK prices are taken from the supplied Nanna's Kitchen PDF. India, USA and Canada prices are placeholders until supplied; no automatic currency conversion is used.
- Pack sizes/weights, final product photography, delivery charges, stock and policy details must be confirmed before launch.
- Product photos in this prototype are representative category images, not verified product photos.
- This prototype does not connect to WordPress, WooCommerce, inventory, online payment or a live order database. The production version should use WooCommerce so products and prices can be managed from WordPress admin.


### Homepage featured products update
The homepage now displays a curated selection of eight products from different categories instead of showing the full catalogue. The category cards still open their own filtered product collections. Each featured product links to its individual product detail page and can be added to the cart. Edit `featuredProductIds` in `script.js` to change which products appear on the homepage. Product IDs correspond to the order in the `rawProducts` list.


## Account and product updates
- `account.html` and `account.js` provide a front-end login/register preview and basic account dashboard. This is not secure production authentication; connect WooCommerce customer accounts in WordPress before launch.
- Product cards and PDP now include an animated “100% Natural*” design label. Verify every product claim and ingredients before publishing it.
- PDP purchase controls use responsive grid layout to prevent price, quantity and Add to Basket overlap.
