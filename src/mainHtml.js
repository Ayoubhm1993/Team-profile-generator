module.exports = (employeeHtml) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>   
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header class='header'>
          <div class='header-img'>
              <div class='header-title'>
                  <h1>My Work Team</h1>
              </div>
          </div>
      </header>
      <main>
          <section class='node-container'>
              ${generateHtml(employeeHtml)}
          </section>
      </main>
  </body>
  </html>
  `;
  }

const generateHtml = (employees) => {
  console.log('employees:', employees);

  const managerCard = (manager) => {
      return `
      <div class="card-container">
          <div class="employee-name manager-name">
              <h2>${manager.getName()}</h2>
              <h5>${manager.getRole()}</h5>
          </div>
          <div class="card-content">
              <div class="emp-id">
                  <span>ID:${manager.getId()}</span>
              </div>
              <div class="card-content">
                  <span>Email:<a class='emp-emial-text' href='mailto:${manager.getEmail()}'> ${manager.getEmail()}</a></span>
              </div>
              <div class="card-content">
                  <span>Office Number: ${manager.officeNumber}</span>
              </div>
          </div>
      </div>
  `;
};


const engineerCard = (engineer) => {
  return `
  <div class="card-container">
          <div class="employee-name engineer-name">
              <h2>${engineer.getName()}</h2>
              <h5>${engineer.getRole()}</h5>
          </div>
          <div class="card-content">
              <div class="emp-id">
                  <span>ID:${engineer.getId()}</span>
              </div>
              <div class="card-content">
                  <span>Email:<a class='emp-emial-text' href='mailto:${engineer.getEmail()}'> ${engineer.getEmail()}</a></span>
              </div>
              <div class="card-content">
                      <span>GitHub:<a href='https://github.com/${engineer.getGithub()}' target='_blank' class="github"> ${engineer.getGithub()}</a></span>
              </div>
          </div>
      </div>
  `;
};

const internCard = (intern) => {
  return `
  <div class="card-container">
      <div class="employee-name intern-name">
          <h2>${intern.getName()}</h2>
          <h5>${intern.getRole()}</h5>
      </div>
      <div class="card-content">
          <div class="emp-id">
              <span>ID:${intern.getId()}</span>
          </div>
          <div class="card-content">
              <span>Email:<a class='emp-emial-text' href='mailto:${intern.getEmail()}'> ${intern.getEmail()}</a></span>
          </div>
          <div class="card-content">
              <span>School: ${intern.getSchool()}</span>
          </div>
      </div>
  </div>
  `;
};

const myTeam = [];
myTeam.push(employees.filter(employee => employee.getRole() === 'Manager').map(manager => managerCard(manager)).join(''));
myTeam.push(employees.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerCard(engineer)).join(''));
myTeam.push(employees.filter(employee => employee.getRole() === 'Intern').map(intern => internCard(intern)).join(''));

return myTeam.join('');

};