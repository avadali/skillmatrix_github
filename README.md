skillmatrix_github
==================

Phase 1

A project to find skills of the employees in an IT Organization.

1. Download and Install Tomcat Servlet Container.
2. Create a folder in the webapps folder of the installation and place the contents of this project.
   skills.xml, loadxml.js,SkillFinder.html,skills_style.css,skills_utils.js ( you don't need the docx file).
3. Create a folder WEB-INF in the folder.
4. Copy the web.xml into it.
5. Start tomcat and follow the document for the project.
6. http://localhost:8080/skillmatrix/skills.xml

Project Usage

Design:
Skill Matrix Application is an application designed to provide management team a tool to query the skills
of the employees in the organization. The search can be made based on resource names, skills that resources 
have, projects they have done in the past, skill rating and many more complex metrics.

Architecture:
XML is chosen as a data store from which the metrics are queried. 
The xml in turn will again be built from several fragments and can be obtained directly from file system 
or can be obtained from database for better security of data. 
The UI does not have any direct relationship with the database, making it loosely coupled.
  
Technologies: HTML, XML, JQUERY/AJAX, JAVASCRIPT.

Phase 2

Design:
Skill Matrix application will be integrated with SOLR search.

Step 1:
Create a simple csv file, let's call it emp_skills.csv.

Make changes to schema.xml, mentioned in schema_changes.txt

Upload the csv file using the post.jar
java -Dtype=text/csv -Dparams="separator=|" -jar post.jar emp*.csv

*Note: seperator is not needed if we are using the default csv fortmat.

Technologies: JAVA, JSP, SOLR.

