/**
* @ author: Arun K Vadali
* Goal:
* Load XML document with an Ajax Call.
* Pass the XML document as a variable to the JavaScript.
*
*/
  	
			var myXmlDoc;
			var myURL = "http://localhost:8080/skillmatrix/skills.xml";
			var myMethod = "GET";
			
			$(document).ready(function()
			{
				//console.log("Loading xml document");
				$.ajax({
				type: myMethod,
				url: myURL,
				dataType: "xml",
				success: parseXml,
				error: printError
			});
			});
			//push the xml document into the local variable 
			function parseXml(xml)
			{
				//console.log("Successfully processed xml document");
				myXmlDoc = xml;  
			}
			
			function printError(){
				//console.log("Errors loading/processing xml document");
				//TODO
			}
