/* Global Variables */
var savedIdeas = [];
var savedIdeasGrid = document.querySelector(".ideas");
var newIdeaForm = document.querySelector(".entryForm");
var formInputTitle = document.querySelector("#entryForm__input--title");
var formInputBody = document.querySelector("#entryForm__input--body");
var formSaveButton = document.querySelector(".entryForm__input--button");
var filterButton = document.querySelector(".filter__button");
var searchForm = document.querySelector(".searchForm");
var searchInput = document.getElementById("search__input");

/* Check for local storage, if none, set storedIdeas as empty. */
if (localStorage.getItem("storedIdeas") === null) {
  localStorage.setItem("storedIdeas", JSON.stringify(""));
} else {
  var savedIdeas = JSON.parse(localStorage.getItem("storedIdeas"));
}

/* Create new Idea instance from form and add to dom */
function saveNewIdea(event) {
  var newIdeaTitle = formInputTitle.value;
  var newIdeaBody = formInputBody.value;

  let newIdea = new Idea(newIdeaTitle, newIdeaBody);
  addIdeaToGrid(newIdea);
  saveToStorage(newIdea);

  formInputTitle.value = "";
  formInputBody.value = "";
  formSaveButton.disabled = true;
}

/* Save Idea instance to data model */
function saveToStorage(idea) {
  savedIdeas.push(idea);
  localStorage.setItem("storedIdeas", JSON.stringify(savedIdeas));
}

/* Add a new idea to the DOM */
function addIdeaToGrid(idea) {
  var newIdeaHTML = "";
  newIdeaHTML += `
  <article id="${idea.id}" class="idea ${
    idea.star === true ? "is-favorite" : ""
  }">
    <header class="idea__header">
      <i class="idea__star"></i>
      <i class="idea__delete"></i>
    </header>
    <div class="idea__body">
      <h2 class="idea__title">${idea.title}</h2>
      <p class="idea__bodycopy">${idea.body} </p>
    </div>
    <footer class="idea__footer">
      <i class="idea__comment"></i>
    </footer>
  </article>
`;
  savedIdeasGrid.innerHTML += newIdeaHTML;
}

/* Render ideas saved in array */
function renderSavedIdeas() {
  var savedIdeasHTML = "";
  savedIdeas.forEach(function (idea) {
    savedIdeasHTML += `
      <article id="${idea.id}" class="idea ${
      idea.star === true ? "is-favorite" : ""
    }">
        <header class="idea__header">
          <i class="idea__star"></i>
          <i class="idea__delete"></i>
        </header>
        <div class="idea__body">
          <h2 class="idea__title">${idea.title}</h2>
          <p class="idea__bodycopy">${idea.body} </p>
        </div>
        <footer class="idea__footer">
          <i class="idea__comment"></i>
        </footer>
      </article>
    `;
  });
  savedIdeasGrid.innerHTML = savedIdeasHTML;
}

/* Delete idea from DOM and data model */
function deleteIdea(event) {
  var parent = event.target.closest(".idea");
  var indexToDelete = savedIdeas.findIndex((idea) => idea.id === parent.id);
  savedIdeas.splice(indexToDelete, 1);
  localStorage.setItem("storedIdeas", JSON.stringify(savedIdeas));
  parent.remove();
}

/* Toggle starred status in DOM and save to data model */
function toggleFavorite(event) {
  var parent = event.target.closest(".idea");
  var indexToUpdate = savedIdeas.findIndex((idea) => idea.id === parent.id);
  var ideaToUpdate = savedIdeas[indexToUpdate];
  if (ideaToUpdate.star === true) {
    ideaToUpdate.star = false;
    parent.classList.remove("is-favorite");
  } else {
    ideaToUpdate.star = true;
    parent.classList.add("is-favorite");
  }
  localStorage.setItem("storedIdeas", JSON.stringify(savedIdeas));
}

/* Check to see if both form fields have values for validation */
function checkInputValues() {
  if (formInputBody.value && formInputTitle.value) {
    formSaveButton.disabled = false;
  } else {
    formSaveButton.disabled = true;
  }
}

/* Filter displayed ideas and toggle button with Show All when filter activated*/
function filterStarredIdeas() {
  var ideasInGrid = document.querySelectorAll(".idea");
  ideasInGrid.forEach(function (idea) {
    if (idea.classList.contains("is-favorite")) {
      idea.style.display = "block";
    } else {
      idea.style.display = "none";
    }
  });
  filterButton.innerText = "Show All Ideas";
  filterButton.removeEventListener("click", filterStarredIdeas);
  filterButton.addEventListener("click", showAllIdeas);
}

/* Set all ideas to display and toggle Filter button */
function showAllIdeas() {
  var ideasInGrid = document.querySelectorAll(".idea");
  ideasInGrid.forEach(function (idea) {
    idea.style.display = "block";
  });
  filterButton.innerText = "Show Starred Ideas";
  filterButton.removeEventListener("click", showAllIdeas);
  filterButton.addEventListener("click", filterStarredIdeas);
}

/* Filter ideas based on search value - not case-sensitive */

function searchForText(searchString) {
  var ideasInGrid = document.querySelectorAll(".idea");
  for (var idea of ideasInGrid) {
    var searchString = searchString.toLowerCase();
    var titleString = idea
      .querySelector(".idea__title")
      .innerText.toLowerCase();
    var bodyString = idea.querySelector(".idea__body").innerText.toLowerCase();
    if (
      titleString.includes(searchString) ||
      bodyString.includes(searchString)
    ) {
      idea.style.display = "block";
    } else {
      idea.style.display = "none";
    }
  }
}

/* Listen for show starred ideas click */
filterButton.addEventListener("click", filterStarredIdeas);

/* Check to see if both titel and body inputs have value */
newIdeaForm.addEventListener("keyup", function (event) {
  checkInputValues();
});

/* Listener for search ideas field */
searchInput.addEventListener("keyup", function (event) {
  searchForText(searchInput.value);
});

/* Prevent search form from reloading the page */
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

/* Listener for delete button */
savedIdeasGrid.addEventListener("click", function (event) {
  if (event.target.className === "idea__delete") {
    deleteIdea(event);
  }
});

/* Listener for favorite button */
savedIdeasGrid.addEventListener("click", function (event) {
  if (event.target.className === "idea__star") {
    toggleFavorite(event);
  }
});

/* When save button on form is clicked, run saveNewIdea */
formSaveButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveNewIdea();
});

/* Render stuff on page load */
window.onload = function () {
  renderSavedIdeas();
};
