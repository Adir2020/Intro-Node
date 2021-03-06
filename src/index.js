const express = require("express");
const { uuid } = require("uuidv4");

 const app = express();
 
 app.use(express.json());



 const projects = [];

 app.get("/projects", (request, response) => {
   

 return response.json(projects);

 });


 app.post("/projects", (request, response) =>{
   const { title, owner} = request.body;

   const project = { id:uuid(), title, owner };

   projects.push(project);

   return response.json(project);
  
 });


 app.put("/projects/:id", (request, response) => {
   const { id } = request.params;
   const { title, owner} = request.body;

   const projectIndex = projects.findIndex((project) => project.id == id);

   if(projectIndex < 0) {
     return response.status(400).json({ error: "Project not found" });
   }

   const project = { 
     id,
     title,
     owner,
   };

   projects[projectIndex] = project;

   return response.json(project);
 });



 app.delete("/projects/:id", (request, response) => {
  
 return response.json([ "projeto 2", "projeto 3"]);
 });




const port = 3333;
app.listen(port, () => {
    console.log(`Server up and running on PORT ${port}`);
});
