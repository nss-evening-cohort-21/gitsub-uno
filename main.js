console.log("does this work?");
// data structures
const user=[
  { name: 'Crystal Burnett',
    socials: [
      {
      smName: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      smName: 'LinkedIn',
      url: 'https://linkedin'
    },
    ]
}
];

const repos = [
  {
    id: 1,
    name: "Tester",
    description: "",
    type: ""
  },
];

const packages = [
  {
    id: 1,
    name: "",
    registry: "",
  },
];

 const projects =[
    {
    id: 1,
    name: "Calculator",
    description:"A non-functioning calculator built with CSS",
    lastUpdated:"10/05/2022",
    },
    {
      id: 2,
      name:"Pet Adoption",
      description: "A pet adoption form that allows you to filter, add, and adopt pets",
      lastUpdated: "10/12/2022",
    },
    {
      id: 3,
      name:"Sorting Hat",
      description: "A simple quiz that randomly sorts users into a Hogearts house and expels them",
      lastUpdated: "10/12/2022",
    },
    {
        id: 4,
        name:"Leap Frog Game",
        description: "Simple game of leapfrog made using elements from Bootstrap ",
        lastUpdated: "10/19/2022",
    },
    {
        id: 5,
        name:"CSS Diner",
        description: "A project that somehow ties what we've learned with CSS and a diner together",
        lastUpdated: "10/26/2022",
     },
  ];

const overview = [
  {
    id: 1,
    repoName: "",
    favorite: true,
  },
];

// Render to Dom Function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// Creates Cards for the Projects page
const projectsOnDom = (array)=> {
  let domString="";
  for (const member of array) {
    domString+=
    `<div class="card-header">
        <h3>
        ${member.name}  
        </h3>
    <div class="card-body">
         ${member.description} 
        
        <p class="card-text"> Last Updated:${member.lastUpdated}</p>
        </div>
  
    </div>
    `;
    }
  
    renderToDom("#root", domString);
  }
  

  const startApp = () => {
    projectsOnDom(projects);
    
  }
  
  
  startApp();
