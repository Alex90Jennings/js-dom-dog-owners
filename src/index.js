console.log(data);

// WRITE YOUR CODE BELOW!
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
}

function createDogCard(dog) {
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const dogIMG = document.createElement("img");
  section.setAttribute("class", "main__dog-section");

  header.innerText = dog.name;

  dogIMG.width = 256;
  dogIMG.src = dog.image;

  const desc = createDogCardDesc(dog, dog.bio);
  const bottomSection = createDogCardBottomSection(dog);

  section.append(header, dogIMG, desc, bottomSection);
  return section;
}

const createDogCardDesc = (dog, bio) => {
  const div = document.createElement("div");
  div.className = "main__dog-section__desc";

  const header = document.createElement("h3");
  header.innerText = "Bio";

  const text = document.createElement("p");
  text.innerText = bio;

  div.append(header, text);

  return div;
};

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

createDogListItem();
