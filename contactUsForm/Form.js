async function loadFormData(){
    try{
        const response = await fetch('data.json');

        if(!response.ok){
            throw new Error('Network response was not good');
        }
        const formData = await response.json();

        console.log(formData);
    }

    catch (error) {
        console.error('Error loading the data from the json file');
    }
}


loadFormData();