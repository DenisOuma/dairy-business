const dashboard = document.getElementById("data-renderd");
const information = document.getElementById("data-renderd");
function dashboardPage() {
	dashboard.innerHTML = `<div class="dashboard-section">
    <h1>This week Best Breed</h1>
    <div class="card-cows">
        <div class="breed-card">
            <div class="cow-img">
                <img src="./assets/images/Ayrshire.jpg" alt="" />
            </div>
            <div class="container-card">
                <div class="empty-card"></div>
                <div class="text-element">
                    <div class="icons-elements">
                        <span class="material-symbols-rounded">
                            arrow_drop_up
                        </span>
                        <p><span> 40%</span> Litres</p>
                    </div>
                    <p>Ayrshire</p>
                    <h6>Health Status: <span>Healthy</span></h6>
                </div>
            </div>
        </div>
        <div class="breed-card">
            <div class="cow-img">
                <img src="./assets/images/Jersey.jpg" alt="" />
            </div>
            <div class="container-card">
                <div class="empty-card"></div>
                <div class="text-element">
                    <div class="icons-elements">
                        <span class="material-symbols-rounded">
                            arrow_drop_up
                        </span>
                        <p><span> 16%</span> Litres</p>
                    </div>
                    <p>Jersey</p>
                    <h6>Health Status: <span>Healthy</span></h6>
                </div>
            </div>
        </div>
        <div class="breed-card">
            <div class="cow-img">
                <img src="./assets/images/Brown-Swiss.jpg" alt="" />
            </div>
            <div class="container-card">
                <div class="empty-card"></div>
                <div class="text-element">
                    <div class="icons-elements">
                        <span class="material-symbols-rounded">
                            arrow_drop_up
                        </span>
                        <p><span> 30%</span> Litres</p>
                    </div>
                    <p>Brown-Swiss</p>
                    <h6>Health Status: <span>Healthy</span></h6>
                </div>
            </div>
        </div>
    </div>
</div>`;
}

// function totalProduction() {
// 	information.innerHTML = `<strong>Welcome to our company</strong><button onclick="anotheventPage()">click</button><div id="test"></div>`;
// }

function anotheventPage() {
	console.log("Hello");
	const evntlisten = document.getElementById("test");
	evntlisten.innerHTML = `<strong> Hello World 3</strong>`;
	information.appendChild(dashboard);
}
