const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearBtn = document.getElementById("clear-completed");
const toggle = document.getElementById("theme-toggle");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

/* ADD TODO */
input.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    if(input.value.trim() !== ""){
      todos.push({
        id: Date.now(),
        text: input.value,
        completed: false
      });
      input.value = "";
      save();
    }
  }
});

/* RENDER */
function render(){
  list.innerHTML = "";

  todos.forEach(todo => {
    const div = document.createElement("div");
    div.classList.add("todo");

    div.innerHTML = `
      <input type="checkbox" ${todo.completed ? "checked" : ""}>
      <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
      <button>❌</button>
    `;

    // COMPLETE
    div.querySelector("input").onclick = () => {
      todo.completed = !todo.completed;
      save();
    };

    // DELETE
    div.querySelector("button").onclick = () => {
      todos = todos.filter(t => t.id !== todo.id);
      save();
    };

    list.appendChild(div);
  });

  updateCount();
}

/* COUNT */
function updateCount(){
  const count = todos.filter(t => !t.completed).length;
  itemsLeft.textContent = `${count} items left`;
}

/* CLEAR COMPLETED */
clearBtn.onclick = () => {
  todos = todos.filter(t => !t.completed);
  save();
};

/* SAVE */
function save(){
  localStorage.setItem("todos", JSON.stringify(todos));
  render();
}

/* THEME TOGGLE */
if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  toggle.src = "./images/icon-moon.svg";
}

toggle.onclick = () => {
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    toggle.src = "./images/icon-moon.svg";
    localStorage.setItem("theme","light");
  } else {
    toggle.src = "./images/icon-sun.svg";
    localStorage.setItem("theme","dark");
  }
};

/* INITIAL LOAD */
render();