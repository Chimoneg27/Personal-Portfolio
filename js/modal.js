const cardsData = [
  {
    name: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    descriptionOneModal:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    descriptionTwoModal:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/pop up mobile.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://chimoneg27.github.io/Personal-Portfolio/',
    sourceLink: 'https://github.com/example/card1',
    imageDesktop: 'images/desktop-images/pop up desktop.png',
  },
  {
    name: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    descriptionOneModal:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    descriptionTwoModal:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/pop up mobile.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://chimoneg27.github.io/Personal-Portfolio/',
    sourceLink: 'https://github.com/example/card2',
    imageDesktop: 'images/desktop-images/pop up desktop.png',
  },
  {
    name: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    descriptionOneModal:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    descriptionTwoModal:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/pop up mobile.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://chimoneg27.github.io/Personal-Portfolio/',
    sourceLink: 'https://github.com/example/card2',
    imageDesktop: 'images/desktop-images/pop up desktop.png',
  },
  {
    name: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    descriptionOneModal:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    descriptionTwoModal:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/pop up mobile.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://chimoneg27.github.io/Personal-Portfolio/',
    sourceLink: 'https://github.com/example/card2',
    imageDesktop: 'images/desktop-images/pop up desktop.png',
  },
  {
    name: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    descriptionOneModal:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    descriptionTwoModal:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/pop up mobile.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://chimoneg27.github.io/Personal-Portfolio/',
    sourceLink: 'https://github.com/example/card2',
    imageDesktop: 'images/desktop-images/pop up desktop.png',
  },
  {
    name: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    descriptionOneModal:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    descriptionTwoModal:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/pop up mobile.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://chimoneg27.github.io/Personal-Portfolio/',
    sourceLink: 'https://github.com/example/card2',
    imageDesktop: 'images/desktop-images/pop up desktop.png',
  },
];

function generateCardsAndPopups() {
  const cardsContainer = document.querySelector('.project-cards');
  const popupsContainer = document.getElementById('popups-container');

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
  
        <button class="open-popup-button" data-index="${index}">Open Popup</button>
      `;

    cardsContainer.appendChild(cardElement);

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
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>Ruby on Rails</li>
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
              <button>See source <img src="images/desktop-images/Icon -GitHub.svg" alt="github-icon"></button>
            </div>
          </div>
        </div>
      </div>
    `;

    popupsContainer.appendChild(popupElement);
  });
}

const openPopupButtons = document.getElementsByClassName('open-popup-button');
Array.from(openPopupButtons).forEach(button => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-index');
    const popup = popupsContainer.children[index];
    popup.style.display = 'flex';
  });
});

const closePopupButtons = document.getElementsByClassName('close-popup-button');
Array.from(closePopupButtons).forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    popup.style.display = 'none';
  });
});
