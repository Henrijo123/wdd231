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

const allLink = document.querySelector("#all");
const cseLink = document.querySelector("#cse");
const wddLink = document.querySelector("#wdd");
const credits = document.querySelector("#credits");
const courseDetails = document.querySelector('#course-details');
const courseDiv = document.querySelector('#filter')

const courseTemplates = (course) => {
    courseDiv.addEventListener('click', () => {
        displayCourseDetails(course);
    });
    if (course.completed == true) {
        return `<figure>
                    <h3>✔ ${course.subject} ${course.number}</h3>
                </figure>`
    } else {
        return `<figure>
                    <h3>${course.subject} ${course.number}</h3>
                </figure>`
    }
};

function displayCourses(filteredCourses) {
    const html = filteredCourses.map(courseTemplates);
    document.querySelector("#filter").innerHTML = html.join("");
};

function calculateCredits(filteredCourses) {
    const numbers = filteredCourses.map(credit => credit.credits);
    const totalCredits = numbers.reduce((acumulator, value) => acumulator + value, 0);
    credits.innerHTML = `<span>The total credits for course listed below is ${totalCredits}</span>`;
};

allLink.addEventListener('click', () => {
    displayCourses(courses);
    calculateCredits(courses)
});

cseLink.addEventListener('click', () => {
    displayCourses(courses.filter(course => course.subject.includes("CSE")));
    calculateCredits(courses.filter(course => course.subject.includes("CSE")));
});

wddLink.addEventListener('click', () => {
    displayCourses(courses.filter(course => course.subject.includes("WDD")));
    calculateCredits(courses.filter(course => course.subject.includes("WDD")));
});

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h4>${course.subject} ${course.number}</h4>
    <h5>${course.title}</h5>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

displayCourseDetails(courses);
displayCourses(courses);
calculateCredits(courses);