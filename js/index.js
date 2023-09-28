//Project description
const projects = document.querySelectorAll('.project-item');
projects.forEach((project) => project.addEventListener('click', (e) => {
 project.classList.toggle('active');
}))


//Projects mobile slider

const projectsList = document.querySelector('.projects-list');
let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
 isDragging = true;
 projectsList.classList.add('dragging');
 startX = e.pageX;
 startScrollLeft = projectsList.scrollLeft;
}
const dragging = (e) => {
 if (!isDragging) return;
 projectsList.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = (e) => {
 isDragging = false;
 projectsList.classList.remove('dragging');
}
projectsList.addEventListener('mousedown', dragStart);
projectsList.addEventListener('mousemove', dragging);

document.addEventListener('mouseup', dragStop);



//AOS

AOS.init();