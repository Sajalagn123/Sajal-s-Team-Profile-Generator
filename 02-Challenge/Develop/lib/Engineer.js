const Employee = require("./Employee");

class Engineer extends Employee {
  // TODO - Write Engineer class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, gitHub){
    super(name, id, email, 'Engineer');
    this.gitHub = gitHub
  }

  getRole(){
    return "Engineer"
  }

  getGitHub(){
    return this.gitHub
  }

  makeHTML(){
    return `
    <div class="card" style="width: 18rem;">
    <img src="https://media.istockphoto.com/photos/portrait-of-handsome-engineer-with-clipboard-in-hand-picture-id992034474?k=20&m=992034474&s=612x612&w=0&h=zZwIYpo39bmSZ6AAzokb4wvZAZOLk_Rg3qN8sn6mqj4=" width="100%" class="card-img-top" alt="Engineer">
    <div class="card-body text-bg-warning p-3">
        <h4 class="card-title">${this.name}</h4>
        <h5 class="card-title">${this.role}</h5>
        <p class="card-text">ID: ${this.id}</p>
        <p class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a></p>
        <p class="card-text">GitHub: <a target="_blank" href="https://github.com/${this.gitHub}">${this.gitHub}</a></p>
    </div>
</div>`
  }
}



module.exports = Engineer;
