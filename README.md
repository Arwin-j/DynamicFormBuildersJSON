
# DynamicFormBuildersJSON 

This is a repository for storing codes that builds forms using JSON and JavaScript. Simple to run: Just run the HTML file to see the form. 

### Main Function 
- Forms are essentially used for getting user's input in any application use cases. 
- It is mostly used for getting authentication input from the users and then validating it 
- Other form is to gather feedback information from users and then storing it for internal purposes 
- It is also used for making basic web based question paper for students to input answers 
- And it has wide range of use cases that ultimately gives data, feedback and inputs. 

## How it works 
- This repository contains forms that is built with the help of JSON (JavaScript Object Notation), which is used to dynamically update the input fields and labels based on the JSON. 

### SimpleRegisterForm: 
- This form is solely built with HTML, JavaScript and CSS. 

   ### How SimpleRegisterForm works 
   - The basic html gives structure for the form with title and form tag 
   - JSON file has the data that will be used by JS to dynamically make the form input 
   - First JavaScript asynchronosly fetches the data from the JSON 
   - And for each of the fields given it creates a wrapper which will contain the form inputs and label. 
   - Inside the wrapper there is label and input 
   - this wrapper with the other tags are created within a for loop, which will iterate through each JSON fields to create the form 
   - Within this, based on the type of field, if it is a select, it will be provided in an array of names or values that will be used to populate the select options 
   - And after the for loop there is a rendering for a button for form submission or capture. 
   - And for each child container that is populated based on the JSON, it will then be appended to the parent container to make sure it displays on the form.
   ### How PlantInfoForm works
   - The basic html gives structure for the form with title and form tag
   - JSON file has the data that will be used by JS to dynamically make the form input
   - First JavaScript asynchronosly fetches the data from the JSON
   - And for each of the fields given it creates a wrapper which will contain the form inputs and lable.
   - Inside the wrapper there is lable and input
   - this wrapper with the other tags are created within a for loop, which will iterate through each JSON fields to create the form
   - Within this, based on the type of field, if it is a select, it will be provided in an array of names or values that will be used to populate the select options 
   - And after the for loop there is a rendering for a button for form submission or capture.
   - And for each child container that is populated based on the JSON, it will then be appended to the parent container to make sure it displays on the form.
   - But for this form, it checks for event change in the select and dynamically changes other fields.

