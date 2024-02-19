const cardsData = [
  {
    name: 'Capstone Project 1',
    description: 'This is my first capstone project, where I was tasked with building a conference page, inspired by the formula 1 Monaco Gran prix. The page is fully responsive and was built using HTML, CSS and JavaScript.',
    descriptionOneModal: 'This is my first capstone project, where I was tasked with building a conference page, which we had to tailor to a topic of our choosing. In my case I chose the formula 1 Monaco Gran prix. It features racer cards, sponsors for the footer and a hamburger menu for the mobile version .The page is fully responsive and was built using HTML, CSS and JavaScript.',
    descriptionTwoModal: '',
    featuredImage: 'images/project-capstonever1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://chimoneg27.github.io/Capstone-One/',
    sourceLink: 'https://github.com/Chimoneg27/Capstone-One',
    imageDesktop: 'images/desktop-images/project-capstonever1-desktop.png',
  },
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
    name: 'Page to Page Library',
    description:
      'A library app built with React.js for the Front-end and Ruby on Rails backend and API. The app allows users to reserve books and also view them.',
    descriptionOneModal:
      'This is a library app built with React.js for the Front-end and Ruby on Rails backend and API. The app allows users to reserve books and also view them. Only the admin can add and delete books. It is fully responsive and works across multiple devices.',
    descriptionTwoModal:
      '',
    featuredImage: 'images/paged.png',
    technologies: ['React', 'ROR', 'Bootstrap'],
    liveVersion: 'https://page-to-page.onrender.com/',
    sourceLink: 'https://github.com/leloufadel/Page-To-page-Library-Frontend',
    imageDesktop: 'images/desktop-images/paged.png',
  },
  {
    name: 'Buggy Budgets',
    description:
      'A budget app built with Ruby on Rails. Allows users to track their expenses.',
    descriptionOneModal:
      'This is a budget app built with Ruby on Rails. Allows users to track their expenses. It is fully responsive and works across multiple devices.',
    descriptionTwoModal:
      '',
    featuredImage: 'images/buggy.png',
    technologies: ['RoR', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://buggy-budget-app.onrender.com/',
    sourceLink: 'https://github.com/Chimoneg27/Rails-Budget-App?tab=readme-ov-file',
    imageDesktop: 'images/desktop-images/buggy.png',
  },
];

function generateCardsAndPopups() {
  const cardsContainer = document.querySelector('.project-cards');
  const popupsContainer = document.getElementById('popups-container');
  // const yogaContainer = document.querySelector('.yoga-post');

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

    // yogaContainer.innerHTML = `
    // <img src="images/airmobile.png" alt="yoga-mobile" class="yoga-one">
    // <img src="images/desktop-images/air.png" alt="yoga-mobile" class="yoga-two">

    // <div class="yoga-info">
    //     <h3>${card.name}</h3>

    //     <p>${card.description}</p>

    //     <ul>
    //     <li>${card.technologies[3]}</li>
    //     <li>${card.technologies[1]}</li>
    //     <li>${card.technologies[2]}</li>
    //     <li>${card.technologies[0]}</li>
    //     </ul>

    //     <button class="open-popup-button" data-index="${index}">See Project</button>
    // </div>
    // `;

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