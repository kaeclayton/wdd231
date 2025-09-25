const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// DOM elements
const coursesContainer = document.getElementById('courses-container');
const creditsTotal = document.getElementById('credits');
const filterAll = document.getElementById('filter-all');
const filterWdd = document.getElementById('filter-wdd');
const filterCse = document.getElementById('filter-cse');
const courseDetails = document.getElementById('course-details');

let currentFilter = 'all';

// Function to render courses based on filter
function renderCourses(filter = 'all') {
    let filteredCourses;

    if (filter === 'all') {
        filteredCourses = courses;
    } else if (filter === 'wdd') {
        filteredCourses = courses.filter(course => course.subject === 'WDD');
    } else if (filter === 'cse') {
        filteredCourses = courses.filter(course => course.subject === 'CSE');
    }

    coursesContainer.innerHTML = '';

    // Create and append course cards
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;

        courseCard.innerHTML = `
            <div class="course-header">
                <div class="course-code">${course.subject} ${course.number}</div>
                <div class="course-credits">${course.credits} cr</div>
            </div>
            <div class="course-title">${course.title}</div>
            <div class="course-tech">
                ${course.technology.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
            </div>
            <div class="course-status">${course.completed ? 'Completed' : 'In Progress'}</div>
        `;

        courseCard.addEventListener('click', () => {
            displayCourseDetails(course);
        })

        coursesContainer.appendChild(courseCard);
    });

    // Calculate and display total credits
    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    creditsTotal.textContent = `Total Credits: ${totalCredits}`;
}

// Event listeners for filter buttons
filterAll.addEventListener('click', () => {
    currentFilter = 'all';
    filterAll.classList.add('active');
    filterWdd.classList.remove('active');
    filterCse.classList.remove('active');
    renderCourses('all');
});

filterWdd.addEventListener('click', () => {
    currentFilter = 'wdd';
    filterAll.classList.remove('active');
    filterWdd.classList.add('active');
    filterCse.classList.remove('active');
    renderCourses('wdd');
});

filterCse.addEventListener('click', () => {
    currentFilter = 'cse';
    filterAll.classList.remove('active');
    filterWdd.classList.remove('active');
    filterCse.classList.add('active');
    renderCourses('cse');
});

document.addEventListener('DOMContentLoaded', () => {
    renderCourses(currentFilter);
});

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;
    courseDetails.showModal();

    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}