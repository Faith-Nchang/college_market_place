document.addEventListener('DOMContentLoaded', async () => {
  const main = document.querySelector('main') || document.createElement('main');
  if (!main.parentNode) document.body.appendChild(main);

  // Get productId from URL
  const match = window.location.pathname.match(/\/products\/(\d+)/);
  const productId = match ? match[1] : null;

  if (!productId) {
    window.location.href = '/products/404';
    return;
  }

  try {
    const response = await fetch(`/products/${productId}/data`);

    if (!response.ok) {
      window.location.href = '/products/404';
      return;
    }

    const product = await response.json();

    main.innerHTML = `
      <h1>${product.title || product.name}</h1>
      <img src="${product.image}" alt="${product.title || product.name}" class="product-image">
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> ${product.description}</p>
    `;
  } catch (err) {
    window.location.href = '/products/404';
  }
});
