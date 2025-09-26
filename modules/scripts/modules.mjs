import byuiCourse from "./course.mjs";
import { setSectionSelection } from "./section.mjs";
import { setTitle, renderSections } from "./output.mjs";

document.addEventListener("DOMContentLoaded", function () {
    setTitle(byuiCourse);
    setSectionSelection();
    renderSections(byuiCourse.sections);
});

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, true);
    renderSections(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});

