const projects = [
  {
    name: "Googreads",
    description: "React-based app allowing user to search Google Books and save books to review or purchase later",
    imageSrc: "https://raw.githubusercontent.com/JoelDore/goog-reads/main/client/public/assets/images/screenshot-desktop.png",
    techs: ["Mongoose/MongoDB", "Express", "React", "Google Books API", "react-bootstrap", "Heroku"],
    summary: `Designed and built MERN stack app from scratch, and implemented pagination to display search results more conveniently to the user.`,
    github: "https://github.com/joeldore/goog-reads/",
    deployed: "https://goog-reads.herokuapp.com/"
  },
  {
    name: "Employee Directory",
    description: "React app allowing a manager to access, sort and filter non-sensitive employee information",
    imageSrc: "https://raw.githubusercontent.com/JoelDore/employee-directory/main/public/images/screenshots.png",
    techs: ["React", "Bootstrap", "Random User API", "GitHub Actions", "gh-pages"],
    summary: `Created GitHub workflow to automatically build/redeploy on any push/pull request to main branch.
    Downloadable as Mobile/Desktop Progressive Web App.`,
    github: "https://github.com/JoelDore/employee-directory",
    deployed: "https://joeldore.github.io/employee-directory/"
  },
  {
    name: "GymBuddy",
    description: "Create, view and track daily workout routines to help reach your fitness goals more quickly",
    imageSrc: "https://raw.githubusercontent.com/JoelDore/gym-buddy/main/public/assets/screenshot-stats.png",
    techs: ["Express", "Chart.js", "Mongoose/MongoDB", "Heroku"],
    summary: `Created Mongo database with Mongoose schema, handled routes with Express, refactored frontend code for more intuitive UI and corrected errors in data visualization logic`,
    github: "https://github.com/joeldore/gym-buddy/",
    deployed: "https://jd-gymbuddy.herokuapp.com/"
  },
  {
    name: "JavaScript Quiz",
    description: "Timed quiz on JavaScript fundamentals that stores high scores client-side",
    imageSrc: "https://raw.githubusercontent.com/JoelDore/Code-Quiz/main/Assets/Images/demo.gif",
    techs: ["HTML", "CSS", "JavaScript", "GitHub"],
    summary: `One of my first projects, built with pure CSS and JS.
    Learned and implemented 'Fisher-Yates shuffle' algorithm for better randomized order of questions/answers.`,
    github: "https://github.com/joeldore/Code-Quiz/",
    deployed: "https://joeldore.github.io/Code-Quiz/"
  },
  {
    name: "Recipe-EZ",
    description: "Organize, customize, and rate recipes from the web or your home cookbooks in one convenient location",
    imageSrc: "https://raw.githubusercontent.com/joeldore/Recipe-Organizer/main/public/images/screenshot-desktop.png",
    techs: ["Express", "Sequelize", "Passport.js", "Unsplash API", "Axios", "Heroku"],
    summary: `Uses MVC design pattern to structure public HTML/CSS/JS, Sequelize models, and API routes.
    Deepened understanding/ability to prioritize tasks and produce MVP more quickly.
    Increased familiarity with agile workflow and resolving git conflicts`,
    github: "https://github.com/joeldore/Recipe-Organizer/",
    deployed: "https://recipez417.herokuapp.com/"
  },
  {
    name: "Employee Management System",
    description: "Command line application for viewing/managing departments, roles and employees in your company",
    imageSrc: "https://raw.githubusercontent.com/JoelDore/Employee-Management-System/main/assets/demo.gif",
    techs: ["JavaScript", "Inquirer.js", "MySQL", "CLI"],
    summary: `An easy-to-use command line interface abstracts away MySQL database management so any employer can use with minimal technical experience.`,
    github: "https://github.com/JoelDore/Employee-Management-System#Installation",
    deployed: ""
  },
  {
    name: "Remote Education Resource",
    description: "Website helping parents navigate remote education in the age of COVID-19",
    imageSrc: "https://raw.githubusercontent.com/joeldore/Remote-Ed-Resource/main/Images/demo.png",
    techs: ["HTML", "MD Bootstrap", "jQuery", "Ed Data API", "Youtube API", "GitHub"],
    summary: `Managed git branching and agile workflow on a team of four.
    Identifying useful APIs can be a challenge; learned to do proper research before committing to a concept/design.`,
    github: "https://github.com/joeldore/Remote-Ed-Resource/",
    deployed: "https://joeldore.github.io/Remote-Ed-Resource/"
  },
]

/**
 * headers: { Accept: application/vnd.github.v3+json }
 * https://api.github.com/repos/joeldore/{repo}
 * 
 * RESPONSE OBJECT w/ RELEVANT DATA:

  {
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "name": "Hello-World",
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",
    "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages",
    "language": null,
    "updated_at": "2011-01-26T19:14:43Z",
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT"
    }
  }

 */

export default projects