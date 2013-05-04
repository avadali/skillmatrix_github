  function fetchAllEmployees(){
		//console.log("fetchAllEmployees function called");
		$(myXmlDoc).find("resources").each(function()
			{
			resultBox.innerHTML = $(this).find("summary").children("employees").children("name").text();
		}); 
	}
	//Function that searches the skills of a given employee
	function fetchSkillsByName(ename){
		//console.log("fetchAllSkillsByName function called");
		var skillsArray = new Array();
		$(myXmlDoc).find("resources").each(function()
			{			
			$(this).find("resource").children("name:contains('" + ename + "')").parent().children("skills").children("skill").children("name").each(function(){
			skillsArray.push($(this).text());
			});
			//build results
			buildResult(skillsArray);
			skillsArray = null;
		}); 
	}
	
	function fetchAllCategories(){
		//console.log("fetchAllCategories function called");
		$(myXmlDoc).find("resources").each(function()
			{
			resultBox.innerHTML = $(this).find("summary").children("categories").children("name").text();
		}); 
	}
	
	//Function that searches for employees that worked on a given project
	function fetchProjectsByName(ename){
		//console.log("fetchProjectsByName function called");
		var projectsArray = new Array();
		$(myXmlDoc).find("resources").each(function()
			{
			$(this).find("resource").children("name:contains('" + ename + "')").parent().children("projects").children("project").children("name").each(function(){
			projectsArray.push($(this).text());
			});
			//build results
			buildResult(projectsArray);
			projectsArray = null;
		}); 
	}
	//Function that looks in the summary section.
	function fetchAllDetails(criterion){
		//console.log("fetchAllEmployees function called");
		var detailsArray = new Array();	
		$(myXmlDoc).find("resources").each(function()
			{			
			$(this).find("summary").children(criterion).children("name").each(function(){			
			detailsArray.push($(this).text());
			});
		});
		buildResult(detailsArray);
		detailsArray = null;		
	}
	
	//Function to find employees worked on a project
	function fetchEmployeesInProject(pname){
		//console.log("fetchEmployeesInProject function called" + pname);
		var employeesArray = new Array();
		$(myXmlDoc).find("resources").each(function()
			{
			$(this).find("resource").children("projects").children("project").children("name:contains('" + pname + "')").parent().parent().parent().children("name").each(function(){
			employeesArray.push($(this).text());
			});
			//build results
			buildResult(employeesArray);
			employeesArray = null;
		}); 
	}
	
	function fetchSkillsBySkillName(sname){
		//console.log("fetchSkillsBySkillName function called" + sname);
		var skillsArray = new Array();
		$(myXmlDoc).find("resources").each(function()
			{			
			$(this).find("resource").children("skills").children("skill").children("name:contains('" + sname + "')").parent().parent().parent().children("name").each(function(){
			skillsArray.push($(this).text());
			});
			//build results
			buildResult(skillsArray);
			skillsArray = null;
		}); 
	}
	
	function buildResult(tempArray){
		var result;
		if(tempArray.length>=1){
		result = "<ul>";
		for(var i=0;i<tempArray.length;i++){
		//alert(tempArray[i]);
		result += "<li>" + tempArray[i] + "</li>";
		}
		result += "</ul>";		
		resultBox.innerHTML = result;
		result = null;
		tempArray = null;
		}
		else
		{
			resultBox.innerHTML = "0 results";
		}
	}
	
	//Function that fetches employees that has rating >= given rating
	function fetchEmployeesByRating(sname, rating){
	
		//console.log("fetchEmployeesByRating function called");
		var ratingsArray = new Array();
		$(myXmlDoc).find("resources").each(function()
			{			
			$(this).find("resource").children("skills").children("skill").children("name:contains('" + sname + "')").parent().parent().parent().children("name").each(function(){
				//alert("no rating found" + $(this).parent().children("skills").children("skill").children("name:contains('" + sname + "')").parent().children("rating").text());
				if (parseInt($(this).parent().children("skills").children("skill").children("name:contains('" + sname + "')").parent().children("rating").text()) >= rating){
					ratingsArray.push($(this).text());
				}				
			});
			//build results
			buildResult(ratingsArray);
			ratingsArray = null;
		}); 
	}	
