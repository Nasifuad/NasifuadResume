const name_auto = document.getElementById("name");
const about = document.getElementById("about");
const skill = document.getElementById("skill");
const project = document.getElementById("project");
const contact = document.getElementById("contact");
const skills = document.querySelector(".skills");
const role = [
  "Nasif Fuad",
  "A FrontendDeveloper",
  " An UX/UI Designer",
  "A Content Creator",
];
let charIndex = 0;
let roleIndex = 0;
auto();
function auto() {
  name_auto.innerText = role[roleIndex].slice(0, charIndex);
  charIndex++;
  if (charIndex == role[roleIndex].length + 1) {
    roleIndex++;
    charIndex = 0;
  }
  if (roleIndex == role.length) {
    roleIndex = 0;
  }
  setTimeout(auto, 200);
}
skill.addEventListener("click", () => {
  skills.scrollIntoView({ behavior: "smooth" });
});
