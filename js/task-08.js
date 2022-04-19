const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;
      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
      };

      const formData = new FormData(event.currentTarget);
      console.log(formData);

    formData.forEach((value, name) => {
       console.log(name);
       console.log(value);
    });

    event.currentTarget.reset();
}