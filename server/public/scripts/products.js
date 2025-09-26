const renderProducts = async () => {
  const mainContent = document.getElementById('main-content');

  try {
    const response = await fetch('/products'); // make sure this matches your server endpoint
    const data = await response.json();

    // Handle empty or null data
    if (!data || data.length === 0) {
      const message = document.createElement('h2');
      message.textContent = 'No Products Available 😞';
      mainContent.appendChild(message);
      return;
    }

    // Loop through products and create cards
    data.forEach(product => {
      // Card container
      const card = document.createElement('div');
      card.classList.add('card');

      // Top container for image
      const topContainer = document.createElement('div');
      topContainer.classList.add('top-container');
      topContainer.style.backgroundImage = `url(${product.image})`;

      // Bottom container for info
      const bottomContainer = document.createElement('div');
      bottomContainer.classList.add('bottom-container');

      // Product name
      const name = document.createElement('h3');
      name.textContent = product.title || product.name;

      // Product price
      const price = document.createElement('p');
      price.textContent = 'Price: ' + product.price;

      // Product description/audience
      const audience = document.createElement('p');
      audience.textContent = 'Description: ' + product.description;

      // Read More link
      const link = document.createElement('a');
      link.textContent = 'Read More >';
      link.href = `/products/${product.id}`; // make sure this route exists
      link.setAttribute('role', 'button');

      // Append elements to bottom container
      bottomContainer.append(name, price, audience, link);

      // Append top and bottom containers to card
      card.append(topContainer, bottomContainer);

      // Append card to main content
      mainContent.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    const message = document.createElement('h2');
    message.textContent = 'Failed to load products 😞';
    mainContent.appendChild(message);
  }
};

// Call the function
renderProducts();
