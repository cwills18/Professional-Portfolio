function expandProjects() {
	const projectsToAdd = document
		.getElementById("softwareProjects")
		.getElementsByClassName(
			"projects__project-grid__item--hidden"
		);
	for (let i = 0; i < projectsToAdd.length; i++) {
		let targetElement = projectsToAdd[i];
		targetElement.style.display = "flex";
	}
	const expandHTML = document
		.getElementById("softwareProjects")
		.getElementsByClassName("projects__expand");
	let expandButton = expandHTML[0];
	expandButton.style.display = "none";
	const collapseHTML = document
		.getElementById("softwareProjects")
		.getElementsByClassName("projects__collapse");
	let collapseButton = collapseHTML[0];
	collapseButton.style.display = "flex";
}

function collapseProjects() {
	const projectsToRemove = document.getElementsByClassName(
		"projects__project-grid__item--hidden"
	);
	for (let i = 0; i < projectsToRemove.length; i++) {
		let targetElement = projectsToRemove[i];
		targetElement.style.display = "none";
	}
	const collapseHTML = document
		.getElementById("softwareProjects")
		.getElementsByClassName("projects__collapse");
	let collapseButton = collapseHTML[0];
	collapseButton.style.display = "none";
	const expandHTML = document
		.getElementById("softwareProjects")
		.getElementsByClassName("projects__expand");
	let expandButton = expandHTML[0];
	expandButton.style.display = "flex";
}
