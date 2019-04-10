const sectionEl = document.querySelector(".article__header");
sectionEl.textContent = "Welcome to Ricky's Blog";

const sectionEl2 = document.querySelectorAll(".article__header");
// console.log(sectionEl2)
sectionEl2[0].classList.add("important");
sectionEl2[1].classList.add("important");


sectionEl3 = document.querySelector(".dashed");
sectionEl3.classList = ("");

sectionEl4 = document.querySelector(".article__footer");
sectionEl4.classList.add("goldenrod")