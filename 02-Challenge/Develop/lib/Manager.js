const Employee = require("./Employee");

class Manager extends Employee {
  // TODO - Write Manager class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, officeNumber){
    super(name, id, email, 'Manager');
    this.officeNumber = officeNumber
  }

  getRole(){
    return "Manager"
  }

  getOfficeNumber(){
    return this.officeNumber
  }

  makeHTML(){
    return `
    <div class="card" style="width: 18rem;">
    <img src="https://media.istockphoto.com/photos/confident-african-male-leader-telling-diverse-colleagues-about-new-picture-id1257268399?k=20&m=1257268399&s=612x612&w=0&h=cMYKMPkODDGwrfu4wtuSPfl6RfFYi8olgNNQxeIyMXs=" width="100%" class="card-img-top" alt="Manager">
    <div class="card-body text-bg-dark p-3">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-title">${this.role}</h6>
        <p class="card-text">ID: ${this.id}</p>
        <p class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a></p>
        <p class="card-text">GitHub: ${this.officeNumber}</p>
    </div>
</div>`
  }
}

module.exports = Manager;
