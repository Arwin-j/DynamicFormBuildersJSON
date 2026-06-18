
const formContainer = document.getElementById('dynamic-form');

// Function to generate the form
function buildForm(schema) {
    schema.forEach(field => {
        // 1. Create a wrapper for styling
        const wrapper = document.createElement('div');
        wrapper.className = 'form-group';

        // 2. Create the Label
        if (field.label) {
            const label = document.createElement('label');
            label.setAttribute('for', field.name);
            label.textContent = field.label;
            wrapper.appendChild(label);
        }

        // 3. Create the Input/Select Element
        let inputElement;

        if (field.type === 'select') {
            inputElement = document.createElement('select');
            field.options.forEach(opt => {
                const optionEl = document.createElement('option');
                optionEl.value = opt.toLowerCase();
                optionEl.textContent = opt;
                inputElement.appendChild(optionEl);
            });
        } else {
            inputElement = document.createElement('input');
            inputElement.type = field.type;
            if (field.placeholder) inputElement.placeholder = field.placeholder;
        }

        // Apply common attributes
        inputElement.name = field.name;
        inputElement.id = field.name;
        if (field.required) inputElement.required = true;

        // 4. Append to wrapper, then to form
        wrapper.appendChild(inputElement);
        formContainer.appendChild(wrapper);
    });

    // 5. Add the Submit Button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    formContainer.appendChild(submitBtn);
}



async function loadFormData(){
    try{
        const response = await fetch('data.json');


        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const formData = await response.json();


        buildForm(formData);

    }

    catch (error){
        console.error('Error loading the data for this form', error);
    }
}


loadFormData();