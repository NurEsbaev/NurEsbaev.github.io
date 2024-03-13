// const array = [1, 2, 3, 4, 5, 6];
// const array = new Array(1, 2, 3, 4, 5, 6);
// array[0] = "hi";
// array[array.length] = "hill";
// console.log(array);

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// const notes = [
//   "JavaSript is not hard for you!",
//   "JavaScript maybe hard for you!",
// ];

// function render() {
//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNote(note));
//   }
// }

// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }

//   listElement.insertAdjacentHTML("beforeend");
//   inputElement.value = "";
//   getNote(inputElement.value);
// };

// function getNote(title) {
//   return `<li
//           class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>${title}</span>
//           <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//           </span>
//         </li>`;
// }

// const person = {
//   firstName: "Vlaid",
//   lastName: "minin",
//   yaer: 1993,
//   hasGirlfriend: false,
//   languages: ["ru", "en", "de"],
//   getFullName: function () {
//     console.log(this.firstName + "" + this.lastName);
//   },
// };

const notes = [
  {
    title: "JavaSript is not hard for you!",
    completed: false,
  },

  {
    title: "JavaSript is not hard for you!",
    completed: true,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length == 0) {
    listElement.innerHTML = "<p>Net element</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNote(notes[i], i));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type == "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type == "remove") {
      notes.splice(index, 1);
    }

    render();
  }
};

function getNote(note, index) {
  return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class = "${
            note.completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? "warning" : "success"
            }" data-index='${index}' data-type='toggle'>&check;</span>
            <span class="btn btn-small btn-danger" data-type='remove' data-index='${index}'>&times;</span>
          </span>
        </li>`;
}
