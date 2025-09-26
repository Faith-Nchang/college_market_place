const header = document.querySelector('header');

// Header container
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// Landing page title and description (only for landing page)
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
	const landingTitle = document.createElement('h1');
	landingTitle.className = 'landing-title';
	landingTitle.textContent = 'Welcome to College Market Place';

	const landingDesc = document.createElement('p');
	landingDesc.className = 'landing-desc';
	landingDesc.textContent = 'Buy and sell items with fellow students. Find books, bikes, appliances, and more—all in one trusted campus community.';

	// Insert before the header container
	header.appendChild(landingTitle);
	header.appendChild(landingDesc);
}

// Left side
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';
// const headerLogo = document.createElement('img');
// headerLogo.src = '/logo.png';
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'College Market Place';
// headerLeft.append(headerLogo, headerTitle);

// Right side
const headerRight = document.createElement('div');
headerRight.className = 'header-right';
const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.className = 'home-button';
homeButton.addEventListener('click', () => window.location.href = '/');
headerRight.appendChild(homeButton);

// Append all
headerContainer.append(headerLeft, headerRight);
header.appendChild(headerContainer);
