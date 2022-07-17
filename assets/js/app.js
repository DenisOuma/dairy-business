const dashboard = document.getElementById("data-renderd");
const information = document.getElementById("data-renderd");
function dashboardPage() {
	dashboard.innerHTML = "<strong> Hello World 2</strong>";
}

function InformationPage() {
	information.innerHTML = `<strong>Welcome to our company</strong><button onclick="anotheventPage()">click</button><div id="test"></div>`;
}

function anotheventPage() {
	console.log("Hello");
	const evntlisten = document.getElementById("test");
	evntlisten.innerHTML = `<strong> Hello World 3</strong>`;
	information.appendChild(dashboard);
}
