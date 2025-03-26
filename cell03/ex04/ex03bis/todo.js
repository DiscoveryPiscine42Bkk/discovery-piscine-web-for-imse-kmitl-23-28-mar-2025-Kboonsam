$(document).ready(function () {
  const ft_list = $("#ft_list");

  const loadTodos = () => {
    let todos = getCookies("todos");
    if (todos) {
      todos = JSON.parse(todos);
      todos.forEach((todo) => addTodo(todo));
    }
  };

  const saveTodos = () => {
    let todos = [];
    $("#ft_list div").each(function () {
      todos.push($(this).text());
    });
    document.cookie = `todos=${JSON.stringify(todos)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  };

  // Get cookies by name
  const getCookies = (name) => {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  };

  // Create a new TODO
  $("#newTodo").click(function () {
    let txt = prompt("Please enter a new TODO:");
    if (txt && txt.trim() !== "") {
      addTodo(txt);
      saveTodos();
    }
  });

  // Add a TODO to the list
  const addTodo = (txt) => {
    let node = $("<div>").text(txt).click(function () {
      const check = confirm("Do you want to delete this TODO?");
      if (check) {
        $(this).remove();
        saveTodos();
      }
    });
    ft_list.prepend(node);
  };

  loadTodos();
});

