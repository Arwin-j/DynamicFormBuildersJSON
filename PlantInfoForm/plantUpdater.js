const formContainer = document.getElementById('dynamic-form');

function buildPlantForm(schema){
    schema.forEach(field => {

        const wrapper = document.createElement('div');
        wrapper.className = 'form-group';

        

        if (field.label) {
            const label = document.createElement('label');
            label.setAttribute('for', field.name);
            label.textContent = field.label;
            wrapper.appendChild(label);
        }
        
        let inputElement;

        if(field.type === 'select'){
            inputElement = document.createElement('select');

            const placeholderOption = document.createElement('option');
            placeholderOption.value = '--select--';
            placeholderOption.textContent = '--select--';
            placeholderOption.selected = true;
            inputElement.appendChild(placeholderOption);

            field.options.forEach(opt => {
                const optionEl = document.createElement('option');
                optionEl.value = opt.toLowerCase();
                optionEl.textContent = opt;
                inputElement.appendChild(optionEl);
            });
        }
        else{
            inputElement = document.createElement('input');
            inputElement.type = field.type;
        }

        inputElement.name = field.name;
        inputElement.id = field.name;
        
        wrapper.append(inputElement);
        formContainer.append(wrapper);
    });


    const plantSelect = document.getElementById('plantName');

    if(plantSelect){
        plantSelect.addEventListener('change', function(event) {
            
            const selectedIndex = event.target.selectedIndex;

            if (selectedIndex === 0) {
                return;
            }

            schema.forEach(field => {
                if(field.type === "text" && field.options){
                    const inputToUpdate = document.getElementById(field.name);

                    inputToUpdate.value = field.options[selectedIndex - 1];
                }
            });
        });
    }

    const captureButton = document.createElement('button');
    captureButton.type = 'button';
    captureButton.textContent = 'Capture';
    captureButton.addEventListener('click', () => {
        formContainer.querySelectorAll('input').forEach((input) => {
            input.value = '';
        });
        formContainer.querySelectorAll('select').forEach((select) => {
            select.selectedIndex = 0;
        });
    });
    formContainer.appendChild(captureButton);

}

async function loadFormData(){
    try{
        const response = await fetch('data.json')

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const dataLoaded = await response.json();


        buildPlantForm(dataLoaded);


        
    }
    catch(error){
        console.log('Error fetching data from json for this form', error);
    }
}


loadFormData();
