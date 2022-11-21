const students = document.querySelector('.students');
document.addEventListener('DOMContentLoaded', function(){

    //access nav menu
    const menu = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menu, {edge: 'left'});

    //access add student form
    const form = document.querySelectorAll('.side-form');
    M.Sidenav.init(form, {edge: 'right'});
});

const renderStudent = (data, ID) => {

    const html = `
            <div class="card-panel student white row" data-id=${ID}>
                    <img src="images/student.png" alt="Student 1">
                    <div class="student-details">

                        
                        <div class="property-name">${data.property}</div>
                        <div class="student-id">${data.id}</div>
                        <div class="student-name">${data.name}</div>
                        

                    </div>
                    
                </div>
    `;

    students.innerHTML += html;
};

const removeStudent = (ID) => {
    const student = document.querySelector(`.student[data-id=${ID}]`);
    student.remove();
}
