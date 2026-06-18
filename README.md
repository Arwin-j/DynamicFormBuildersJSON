# DynamicFormBuildersJSON

This is a repository for storing code that builds dynamic forms using JSON and JavaScript. 

**Simple to run:** Just open the HTML file in a browser (or via a local server) to see the form in action!

---

## 🎯 Main Functions & Use Cases
Forms are essentially used for getting user input in various application scenarios. Common use cases include:
* Getting authentication input from users and validating it.
* Gathering feedback information from users and storing it for internal purposes.
* Making basic web-based question papers for students to input answers.
* A wide range of other applications that ultimately capture data, feedback, and inputs.

---

## ⚙️ How It Works
This repository contains forms built with the help of JSON (JavaScript Object Notation), which is used to dynamically update the input fields and labels based on the provided data schema.

### SimpleRegisterForm
This form is built solely with native HTML, JavaScript, and CSS (no external frameworks).

**How SimpleRegisterForm works under the hood:**
* **Structure:** The basic HTML provides the skeleton for the form, including the title and an empty `<form>` tag.
* **Data Source:** A JSON file holds the schema data that JavaScript uses to dynamically generate the form inputs.
* **Fetching:** JavaScript asynchronously fetches the data from the JSON file.
* **Iteration & Generation:** A loop iterates through each JSON field to create the form elements:
    * For each field, it creates a **wrapper** to contain the form input and its associated label.
    * Inside the wrapper, it generates the `<label>` and the specific `<input>`.
    * If the field type is a `select`, it reads the provided array of names/values from the JSON to dynamically populate the dropdown options.
* **Assembly:** Each populated child container is then appended to the parent `<form>` container to ensure it renders on the screen.
* **Completion:** After the loop finishes iterating through the JSON, a submission button is rendered and appended to the bottom of the form to handle data capture.
