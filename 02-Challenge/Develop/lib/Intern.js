const Employee = require("./Employee");

class Intern extends Employee {
  // TODO - Write Intern class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, school){
    super(name, id, email, 'Intern');
    this.school = school
  }

  getRole(){
    return "Intern"
  }

  getSchool(){
    return this.school
  }

  makeHTML(){
    return `
    <div class="card" style="width: 18rem;">
    <img src="https://dotfoodscareers.com/wp-content/uploads/2019/07/interns_altBlog.jpg" width="100%" class="card-img-top" alt="Intern">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-title">${this.role}</h6>
        <p class="card-text">ID: ${this.id}</p>
        <p class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a></p>
        <p class="card-text">School: ${this.school}</p>
    </div>
</div>`
  }
}

module.exports = Intern;
