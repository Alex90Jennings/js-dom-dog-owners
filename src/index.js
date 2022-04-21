console.log(data);

function createDogListItem() {
  const dogListUL = document.querySelector(".dogs-list");
  const main = document.querySelector(".main");

  for (let i = 0; i < data.length; i++) {
    const currentDog = data[i];
    const dogButton = document.createElement("li");

    dogButton.setAttribute("class", "dogs-list__button");
    dogButton.innerText = currentDog.name;
    dogListUL.append(dogButton);

    dogButton.addEventListener("click", function (event) {
      event.preventDefault();
      const dogSection = document.querySelector(".main__dog-section");
      dogSection.remove();
      main.append(createDogCard(currentDog));
    });
  }
  renderMainForm();
}

function createDogCard(dog) {
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const dogIMG = document.createElement("img");
  section.setAttribute("class", "main__dog-section");

  header.innerText = dog.name;

  dogIMG.width = 256;
  dogIMG.src = dog.image;

  const desc = createDogCardDesc(dog.bio);
  const bottomSection = createDogCardBottomSection(dog);

  section.append(header, dogIMG, desc, bottomSection);
  return section;
}

function createDogCardDesc(bio) {
  const div = document.createElement("div");
  div.className = "main__dog-section__desc";

  const header = document.createElement("h3");
  header.innerText = "Bio";

  const text = document.createElement("p");
  text.innerText = bio;

  div.append(header, text);

  return div;
}

function createDogCardBottomSection() {
  const button = document.createElement("button");
  const text = document.createElement("p");
  const div = document.createElement("div");
  div.className = "main__dog-section__btn";

  //click event?
  for (let i = 0; i < data.length; i++) {
    const currentDog = data[i];
    if (currentDog.isGoodDog === true) {
      button.innerText = "Good Dog";
      text.innerText = "Is Naughty? No!";
    } else {
      text.innerText = "Is Naughty? No!";
      button.innerText = "Bad Dog";
    }

    div.append(text, button);
    return div;
  }
}

function renderMainForm() {
  const addDogButton = document.querySelector(".dogs-list__button--add");
  const main = document.querySelector(".main");

  addDogButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dogSection = document.querySelector(".main__dog-section");
    dogSection.remove();
    const mainTwo = createSection();
    main.append(mainTwo);
    const form = createForm();
    const h2 = document.createElement("h2");
    h2.innerText = "Add a new Dog";
    mainTwo.append(h2, form);
  });
}

function createForm() {
  const form = document.createElement("form");
  const dogListUL = document.querySelector(".dogs-list");

  const nameInput = createInput("name");
  const imgInput = createInput("image", "url");
  const bioInput = createInput("bio", "textarea");
  const submitInput = createInput("submit", "submit", "Let's add a dog!");

  const nameLabel = createLabel("name", "Dog's name");
  const imgLabel = createLabel("image", "Dog's picture");
  const bioLabel = createLabel("bio", "Dog's bio");

  form.className = "form";
  submitInput.className = "form__button";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const dogName = e.target[0].value;
    const dogPicture = e.target[1].value;
    const dogBio = e.target[2].value;

    data.unshift({
      name: dogName,
      image: dogPicture,
      bio: dogBio,
      isGoodDog: true,
    });
    while (dogListUL.childNodes.length > 2) {
      dogListUL.removeChild(dogListUL.lastChild);
    }
    createDogListItem();
  });

  form.append(
    nameLabel,
    nameInput,
    imgLabel,
    imgInput,
    bioLabel,
    bioInput,
    submitInput
  );
  return form;
}

function createInput(idName, type = "text", value) {
  let input = null;

  if (type === "textarea") {
    input = document.createElement("textarea");
    input.setAttribute("rows", "5");
  } else {
    input = document.createElement("input");
    input.setAttribute("type", type);
  }

  input.setAttribute("id", idName);
  input.setAttribute("name", idName);

  if (value) input.setAttribute("value", value);

  return input;
}

function createSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
}

function createLabel(forAttr, text) {
  const label = document.createElement("label");
  label.attributes.for = forAttr;
  label.innerText = text;

  return label;
}

createDogListItem();
