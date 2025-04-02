const page = document.querySelector("body");

const cardData = [
  {
    image: "../assets/o-o.jpeg",
    title: "БЕЛЫЙ ПАРОХОД",
    subtitle: "Архипова Оксана. Холст,масло,2018г.",
  },
  {
    image: "../assets/608117675.jpg",
    title: "Утро в сосновом лесу",
    subtitle: "ШИШКИН Иван",
  },
  {
    image: "../assets/918069458.jpg",
    title: "ЛЕТО",
    subtitle: "ЛЕВИТАН Исаак",
  },
  {
    image: "../assets/393032836.jpg",
    title: "ЗИМА",
    subtitle: "Саврасов Алексей",
  },
  {
    image: "../assets/348840332.jpg",
    title: "Тихая обитель",
    subtitle: "ЛЕВИТАН Исаак",
  },
];

const template = page.querySelector(".template").content;
const card = page.querySelector("#cards");

function clone(obj) {
  const cloned = template.cloneNode(true);

  cloned.querySelector(".img_card").src = obj.image;
  cloned.querySelector(".zagolovok_card").textContent = obj.title;
  cloned.querySelector(".text_card").textContent = obj.subtitle;


  const deleteButton = cloned.querySelector(".button_delet");
  deleteButton.addEventListener("click", function () {
    deleteButton.closest(".card").remove();
  });


  const likeButton = cloned.querySelector(".button_liked");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("button_like");
  });

  card.appendChild(cloned); 
  page.querySelector(".styled-input").value = "";
  page.querySelector(".styled_input").value = "";
  page.querySelector(".styledinput").value = "";
  return cloned;
}

cardData.forEach((item) => {
  clone(item);
});

function addCard() {
  const searchPicture = page.querySelector(".styled-input").value.trim();
  const searchTitle = page.querySelector(".styled_input").value.trim();
  const searchAuthor = page.querySelector(".styledinput").value.trim();

  if (searchPicture && searchTitle && searchAuthor) {
    const newCard = {
      image: searchPicture,
      title: searchTitle,
      subtitle: searchAuthor,
    };

    clone(newCard); 
  } else {
    alert("Пожалуйста, заполните все поля!");
  }
}

const buttonSend = page.querySelector('#button_addcard');
buttonSend.addEventListener('click', () => {
  addCard();
});