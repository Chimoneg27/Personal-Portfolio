const cardsData = [
  {
    name: 'Pokemon Gallery',
    description:
      'This is a gallery displaying Kento region pokemon. The user can click on each pokemon to see more details about them. The website was built using HTML, CSS and JavaScript.',
    descriptionOneModal:
      'For this is my first capstone group project where we were taked with building a website that interacts with an API of our choosing. In my case I chose the pokemon API. The website displays the first 151 pokemon from the Kento region. The user can click on each pokemon to see more details about them.',
    descriptionTwoModal:
      '',
    featuredImage: 'images/copygallery.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://chimoneg27.github.io/Pokemon-Gallery',
    sourceLink: 'https://github.com/Chimoneg27/Pokemon-Gallery',
    imageDesktop: 'images/desktop-images/copygallery.png',
  },
  {
    name: 'Math Magician',
    description:
      'This is my first single page app built with react. It is a simple calculator that performs basic arithmetic operations. The app was built using HTML, CSS and React.',
    descriptionOneModal:
      'This single page app is built with React, through the create react app features a working calculator, a home page with a random quote generator that returns a random math quote. This is my first single page app built with react.  It is fully responsive and works across multiple devices. It is built with React and CSS.',
    descriptionTwoModal:
      '',
    featuredImage: 'images/math.png',
    technologies: ['HTML', 'React', 'CSS'],
    liveVersion: 'https://math-magician-site.onrender.com/',
    sourceLink: 'https://github.com/Chimoneg27/math-magician-2',
    imageDesktop: 'images/desktop-images/math.png',
  },
  {
    name: 'Book Store',
    description:
      'A book store app built with react-redux toolkit. The app features a home page with a list of books and a category filter. The app was built using HTML, CSS and React-Redux toolkit',
    descriptionOneModal:
      'This is a book store app built with react-redux toolkit. The app features a home page with a list of books and a category filter. The app was built using HTML, CSS and React-Redux toolkit. The user can add and remove books from the store. It is fully responsive and works across multiple devices.',
    descriptionTwoModal:
      '',
    featuredImage: 'images/bookstore.png',
    technologies: ['Redux', 'React', 'CSS'],
    liveVersion: 'https://bookstore-v8gf.onrender.com/',
    sourceLink: 'https://github.com/Chimoneg27/Bookstore-React',
    imageDesktop: 'images/desktop-images/bookstore.png',
  },
  {
    name: 'Space Travelers Hub',
    description:
      'A single page app built with react-redux toolkit. The app features a home page with a list of rockets and a list of missions.',
    descriptionOneModal:
      'This is a single page app built with react-redux toolkit and CSS. The app features a home page with a list of rockets and a list of missions. The user can reserve a rocket and cancel the reservation. The user can also join a mission and cancel the reservation. It is fully responsive and works across multiple devices.',
    descriptionTwoModal:
      '',
    featuredImage: 'images/spaceTraveler.png',
    technologies: ['React', 'Redux', 'CSS'],
    liveVersion: 'https://space-travelers-hub-bvt6.onrender.com/',
    sourceLink: 'https://github.com/Chimoneg27/Travelers-Space-Hub',
    imageDesktop: 'images/desktop-images/spaceTraveler.png',
  },
  {
    name: 'In The Air',
    description: 'An app used to check the quality of air in a given city. The app interacts with the openweather API to fetch air pollution data. The app was built using React, CSS and the redux-toolkit.',
    descriptionOneModal: 'This app makes use of the openweather API to fetch air pollution data. The user can search for a city and the app will return the air quality index for that city. The app was built using React, CSS and the redux-toolkit. It is fully responsive and works across multiple devices.',
    descriptionTwoModal: '',
    featuredImage: 'images/airmobile.png',
    technologies: ['Redux', 'Bootstrap', 'React', 'CSS'],
    liveVersion: 'https://in-the-air.onrender.com/',
    sourceLink: 'https://github.com/Chimoneg27/in-the-air',
    imageDesktop: 'images/desktop-images/air.png',
  },
];

function generateCardsAndPopups() {
  const cardsContainer = document.querySelector('.project-cards');
  const popupsContainer = document.getElementById('popups-container');
  const yogaContainer = document.querySelector('.yoga-post');

  cardsData.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'cards';

    cardElement.innerHTML = `
        <h4>${card.name}</h4>
        <p>${card.description}</p>
  
        <ul>
          <li>${card.technologies[0]}</li>
          <li>${card.technologies[1]}</li>
          <li>${card.technologies[2]}</li>
        </ul>
  
        <button class="open-popup-button" data-index="${index}">See Project</button>
      `;

    cardsContainer.appendChild(cardElement);

    yogaContainer.innerHTML = `
    <img src="images/airmobile.png" alt="yoga-mobile" class="yoga-one">
    <img src="images/desktop-images/air.png" alt="yoga-mobile" class="yoga-two">

    <div class="yoga-info">
        <h3>${card.name}</h3>

        <p>${card.description}</p>

        <ul>
        <li>${card.technologies[3]}</li>
        <li>${card.technologies[1]}</li>
        <li>${card.technologies[2]}</li>
        <li>${card.technologies[0]}</li>
        </ul>

        <button class="open-popup-button" data-index="${index}">See Project</button>
    </div>
    `;

    const popupElement = document.createElement('div');
    popupElement.className = 'popup';

    popupElement.innerHTML = `
      <div class="popup-content">
        <div class="modal-header">
          <div class="modal-title">
            <h2>${card.name}</h2>
            <h4 class="close-popup-button">&times;</h4>
          </div>
          <ul>
            <li>${card.technologies[0]}</li>
            <li>${card.technologies[1]}</li>
            <li>${card.technologies[2]}</li>
          </ul>
        </div>
        <div class="modal-desc">
          <img src="${card.featuredImage}" alt="Card Image" class="modal-img-one">
          <img src="${card.imageDesktop}" alt="Card Image" class="modal-img-two">
          <div class="modal-text">
            <p class="popup-content-1">
              ${card.descriptionOneModal}
            </p>
            <p class="popup-content-1">
              ${card.descriptionTwoModal}
            </p>
            <div class="button-container">
              <button><a href="${card.liveVersion}">See live</a><img src="images/desktop-images/popup.svg" alt="live-icon"></button>
              <button><a href="${card.sourceLink}">See source</a> <img src="images/desktop-images/Icon-GitHub.svg" alt="github-icon"></button>
            </div>
          </div>
        </div>
      </div>
    `;

    popupsContainer.appendChild(popupElement);
  });

  const openPopupButtons = document.getElementsByClassName('open-popup-button');
  Array.from(openPopupButtons).forEach((button) => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      const popup = popupsContainer.children[index];
      popup.style.display = 'flex';
    });
  });

  const closePopupButtons = document.getElementsByClassName('close-popup-button');
  Array.from(closePopupButtons).forEach((button) => {
    button.addEventListener('click', () => {
      const popup = button.closest('.popup');
      popup.style.display = 'none';
    });
  });
}

generateCardsAndPopups();