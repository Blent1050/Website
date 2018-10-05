

init();

function init() {  
	toggleLI();
	deleteElement();
	toggleInput();
	addToDo();
}

//Adds a todo if enter is pressed in the textfield.
function addToDo() {
	$("input[type='text']").keypress(function (event) {
		if (event.which === 13) {
			//grabbing new todo text from input
			var todoText = $(this).val();
			$(this).val("");
			//create a new li and add to ul
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		}
	});
}
//Toggles the input for new todos.
function toggleInput() {
	$("#toggle-form").click(function () {
		$("input[type='text']").fadeToggle();
	});
}

//Click on X to delete Todo
function deleteElement() {
	$("ul").on("click", "span", function (event) {
		$(this).parent().fadeOut(500, function () {
			$(this).remove();
		});
		event.stopPropagation();
	});
}
// Check Off Specific Todos By Clicking
function toggleLI() {
	$("ul").on("click", "li", function () {
		$(this).toggleClass("completed");
	});
}
