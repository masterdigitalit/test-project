function showQuote() {
	let el = 1;
	const quote = {
		1: document.querySelectorAll(".quote")[0],
		2: document.querySelectorAll(".quote")[1],
		3: document.querySelectorAll(".quote")[2],
	};
	const point = {
		1: document.querySelectorAll(".points span")[0],
		2: document.querySelectorAll(".points span")[1],
		3: document.querySelectorAll(".points span")[2],
	};

	const timer = setInterval(showNew, 15000);
	function showNew() {
		quote[el].style.display = "none";
		point[el].classList.remove("active");

		if (el === 3) {
			el = 1;
		} else {
			el += 1;
		}
		point[el].classList.add("active");
		quote[el].style.display = "flex";
	}
}
window.addEventListener("load", (event) => {
	showQuote();
});

let PageEl = "main";
function setQuestionPage(Page) {
	const buttons = {
		main: document.querySelectorAll("button#main")[0],
		payments: document.querySelectorAll("button#payments")[0],
		security: document.querySelectorAll("button#security")[0],
	};
	const lists = {
		main: document.querySelectorAll(".list#main")[0],
		payments: document.querySelectorAll(".list#payments")[0],
		security: document.querySelectorAll(".list#security")[0],
	};

	buttons[PageEl].classList.remove("active");
	lists[PageEl].classList.remove("active");
	PageEl = Page;
	buttons[PageEl].classList.add("active");
	lists[PageEl].classList.add("active");
}

let defaultBarShow = false;
function showBar() {
	console.log(document.querySelectorAll(".bar_panel"));
	if (defaultBarShow) {
		document.querySelectorAll(".bar_panel")[0].classList.remove("active");
		defaultBarShow = false;
		return;
	} else {
		document.querySelectorAll(".bar_panel")[0].classList.add("active");
		defaultBarShow = true;
		return;
	}
}
