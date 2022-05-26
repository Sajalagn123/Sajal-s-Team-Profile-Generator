# Sajal's-Team-Profile-Generator

## Description
I was tasked with creating a team profile generator by using node.js. The generator generates a profile consisting of a manager, interns, and engineers. Along with this, it also includes their information, like their name, email, and ID number. Each employee type has a specific attribute. Managers have an office number, interns, have a school or university, and engineers have a link to their GitHub.

## Installation 
To install my project, I created a repository for it on Github. After that I cloned the repository onto my desktop. I then copied the folders from my class repository and pasted them into my folder. From there, I opened the assignments into a serperate folder.

## Usage
Users will be able to generate a profile for their professional team dynamically.

## License
None

## Contributions
I worked on this project alone

## Tests
Run the command:
```
node index.js
```
## Demo
Here is a gif showcasing the Team Profile generator in action:




https://user-images.githubusercontent.com/98942793/170413926-a895baca-5276-457f-8401-8bfb6e006a53.mp4





## Example
Here is the HTML file generated in the demonstration video:
```
 <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body>
    <h1 class="text-center mb-4">TEAM PROFILE</h1>
    <div class="container-fluid" style="display:flex; justify-content: space-evenly">
        
    <div class="card" style="width: 18rem;">
    <img src="https://media.istockphoto.com/photos/confident-african-male-leader-telling-diverse-colleagues-about-new-picture-id1257268399?k=20&m=1257268399&s=612x612&w=0&h=cMYKMPkODDGwrfu4wtuSPfl6RfFYi8olgNNQxeIyMXs=" width="100%" class="card-img-top" alt="Manager">
    <div class="card-body text-bg-dark p-3">
        <h5 class="card-title">Sajal Agnihotri</h5>
        <h6 class="card-title">Manager</h6>
        <p class="card-text">ID: 1</p>
        <p class="card-text">Email: <a href="mailto:Sajalagn2@gmail.com">Sajalagn2@gmail.com</a></p>
        <p class="card-text">GitHub: 123</p>
    </div>
</div>

    <div class="card" style="width: 18rem;">
    <img src="https://media.istockphoto.com/photos/portrait-of-handsome-engineer-with-clipboard-in-hand-picture-id992034474?k=20&m=992034474&s=612x612&w=0&h=zZwIYpo39bmSZ6AAzokb4wvZAZOLk_Rg3qN8sn6mqj4=" width="100%" class="card-img-top" alt="Engineer">
    <div class="card-body text-bg-warning p-3">
        <h4 class="card-title">Sajal Agnihotri</h4>
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">ID: 2</p>
        <p class="card-text">Email: <a href="mailto:Sajalagn2@gmail.com">Sajalagn2@gmail.com</a></p>
        <p class="card-text">GitHub: <a target="_blank" href="https://github.com/Sajalagn123">Sajalagn123</a></p>
    </div>
</div>

    <div class="card" style="width: 18rem;">
    <img src="https://dotfoodscareers.com/wp-content/uploads/2019/07/interns_altBlog.jpg" width="100%" class="card-img-top" alt="Intern">
    <div class="card-body">
        <h5 class="card-title">Sajal Agnihotri</h5>
        <h6 class="card-title">Intern</h6>
        <p class="card-text">ID: 3</p>
        <p class="card-text">Email: <a href="mailto:Sajalagn2@gmail.com">Sajalagn2@gmail.com</a></p>
        <p class="card-text">School: UCI</p>
    </div>
</div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
</body>

</html>
```
## Questions
To reach out with any questions, contact me at Sajalagn2@gmail.com
