function setSectionSelection() {
    const sectionSelect = document.querySelector("#sectionNumber");
    sectionSelect.innerHTML = '<option value="0" disabled selected>--</option>';
    byuiCourse.sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}  
export function setSectionSelection() {}  