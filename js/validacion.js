document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passInput = document.getElementById('password1');
  const confirmPassInput = document.getElementById('password2');
  const checkbox = document.getElementById('terminos');
  const modalCheckbox = document.getElementById('modalTerminos').querySelector('.form-check-input');
  const modalText = document.getElementById('modalTerminos').querySelector('.form-check-label');
  const btnModal = document.querySelector('[data-bs-target="#modalTerminos"]');
  const inputs = [document.getElementById('nombre'), document.getElementById('apellido'), emailInput, passInput, confirmPassInput];
  const inputName = document.getElementById('nombre');
  const inputLastName = document.getElementById('apellido');
  //icons
  const svgIconInputName = document.getElementById('svgIconInput');
  const svgIconInputLastname = document.getElementById('svgIconInputApellido');
  const svgIconInputEmail = document.getElementById('svgIconInputEmail');
  const svgIconInputPass = document.getElementById('svgIconInputPass');
  const svgIconInputPass2 = document.getElementById('svgIconInputPass2');
  const iconTerms = document.getElementById('iconoTerminos');


  function validateInput(input) {
    if (input.value.trim() === '' || input.value.length < 3) {
      input.style.borderColor = 'red';
      return false;
    } else {
      input.style.borderColor = '';
      return true;
    }
  }

  function validateEmail(email) {
    if (!/\S+@\S+\.\S+/.test(email)) {
      emailInput.style.borderColor = 'red';
      return false;
    } else {
      emailInput.style.borderColor = '';
      return true;
    }
  }

  function validatePass() {
    if (passInput.value.length < 6) {
      passInput.style.borderColor = 'red';
      return false;
    } else {
      passInput.style.borderColor = '';
      return true;
    }
  }

  function validatePassMatch() {
    if (passInput.value !== confirmPassInput.value || passInput.value === '') {
      confirmPassInput.style.borderColor = 'red';
      return false;
    } else {
      confirmPassInput.style.borderColor = '';
      return true;
    }
  }

  function validateCheckbox() {
    if (!checkbox.checked) {
      modalCheckbox.style.borderColor = 'red';
      modalText.style.color = 'red';
      btnModal.style.borderColor = 'red';
      return false;
    } else {
      modalCheckbox.style.borderColor = '';
      modalText.style.color = '';
      btnModal.style.borderColor = '';
      return true;
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    if (!validateInput(inputName)) {
      inputName.classList.add('invalidInput');
      svgIconInputName.classList.add('input-icon-invalid');
      svgIconInputName.classList.add('d-block');

      valid = false;
    } else {
      inputName.classList.remove('invalidInput');
      inputName.classList.add('validInput');
      svgIconInputName.classList.remove('input-icon-invalid');
      svgIconInputName.classList.add('input-icon-valid');
    }

    if (!validateInput(inputLastName)) {
      inputLastName.classList.add('invalidInput');
      svgIconInputLastname.classList.add('input-icon-invalid');
      svgIconInputLastname.classList.add('d-block');

      valid = false;
    } else {
      inputName.classList.remove('invalidInput');
      inputName.classList.add('validInput');
      svgIconInputLastname.classList.remove('input-icon-invalid');
      svgIconInputLastname.classList.add('input-icon-valid');
    }
    // inputs.forEach(function (input) {
    //   if (!validateInput(input)) {
    //     input.classList.add('invalidInput');
    //     svgIconInputName.classList.add('input-icon-invalid');
    //     svgIconInputLastname.classList.add('input-icon-invalid');

    //     valid = false;
    //   } else {
    //     input.classList.remove('invalidInput');
    //     input.classList.add('validInput');
    //     svgIconInputName.classList.remove('input-icon-invalid');
    //     svgIconInputLastname.classList.remove('input-icon-invalid');
    //     svgIconInputName.classList.add('input-icon-valid');
    //     svgIconInputLastname.classList.add('input-icon-valid');
    //   }
    // });

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add('invalidInput');
      svgIconInputEmail.classList.add('d-block');
      svgIconInputEmail.classList.add('input-icon-email-invalid');

      valid = false;
    } else {
      emailInput.classList.remove('invalidInput');
      emailInput.classList.add('validInput');
      svgIconInputEmail.classList.remove('input-icon-email-invalid');
      svgIconInputEmail.classList.add('input-icon-email-valid');
    }

    if (!validatePass()) {
      passInput.classList.add('invalidInput');
      svgIconInputPass.classList.add('input-icon-invalid');
      svgIconInputPass.classList.add('d-block');

      valid = false;
    } else {
      passInput.classList.remove('invalidInput');
      svgIconInputPass.classList.remove('input-icon-invalid');
      svgIconInputPass.classList.add('input-icon-valid');

    }

    if (!validatePassMatch()) {
      confirmPassInput.classList.add('invalidInput');
      svgIconInputPass2.classList.add('input-icon-invalid');
      svgIconInputPass2.classList.add('d-block');

      valid = false;
    } else {
      confirmPassInput.classList.remove('invalidInput');
      confirmPassInput.classList.add('validInput');
      svgIconInputPass2.classList.remove('input-icon-invalid');
      svgIconInputPass2.classList.add('input-icon-valid');


    }

    if (!validateCheckbox()) {
      iconTerms.classList.add('icon-invalid-terms');
      valid = false;
    } else {
      iconTerms.classList.remove('icon-invalid-terms');
      iconTerms.classList.add('icon-valid-terms');
    }

    if (valid) {
      alert("¡Bien!");
    }


    inputName.addEventListener('input', function () {
      if (!validateInput(inputName)) {
        inputName.classList.add('invalidInput');
        svgIconInputName.classList.add('input-icon-invalid');
        valid = false;
      } else {
        inputName.classList.remove('invalidInput');
        inputName.classList.add('validInput');
        svgIconInputName.classList.remove('input-icon-invalid');
        svgIconInputName.classList.add('input-icon-valid');
      }
      // validateInput(input);
    });

    inputLastName.addEventListener('input', function () {
      if (!validateInput(inputLastName)) {
        inputLastName.classList.add('invalidInput');
        svgIconInputLastname.classList.add('input-icon-invalid');
        svgIconInputLastname.classList.add('d-block');
        valid = false;
      } else {
        inputLastName.classList.remove('invalidInput');
        inputLastName.classList.add('validInput');
        svgIconInputLastname.classList.remove('input-icon-invalid');
        svgIconInputLastname.classList.add('input-icon-valid');
      }
    })

    emailInput.addEventListener('input', function () {
      if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('invalidInput');
        svgIconInputEmail.classList.add('input-icon-email-invalid');

      } else {
        emailInput.classList.remove('invalidInput');
        emailInput.classList.add('validInput');
        svgIconInputEmail.classList.remove('input-icon-email-invalid');
        svgIconInputEmail.classList.add('input-icon-email-valid');

      }
    });

    passInput.addEventListener('input', function () {
      if (!validatePass()) {
        passInput.classList.add('invalidInput');
        svgIconInputPass.classList.add('input-icon-invalid');

      } else {
        passInput.classList.remove('invalidInput');
        passInput.classList.add('validInput');
        svgIconInputPass.classList.remove('input-icon-invalid');
        svgIconInputPass.classList.add('input-icon-valid');


      }
      if (confirmPassInput.value !== '') {
        validatePassMatch();
      }
    });

    confirmPassInput.addEventListener('input', function () {
      if (!validatePassMatch()) {
        confirmPassInput.classList.add('invalidInput');
        svgIconInputPass2.classList.add('input-icon-invalid');

      } else {
        confirmPassInput.classList.remove('invalidInput');
        confirmPassInput.classList.add('validInput');
        svgIconInputPass2.classList.remove('input-icon-invalid');
        svgIconInputPass2.classList.add('input-icon-valid');
      }
    });

    checkbox.addEventListener('change', function () {
      validateCheckbox();
      if (!validateCheckbox()) {
        iconTerms.classList.add('icon-invalid-terms');
        valid = false;
      } else {
        iconTerms.classList.remove('icon-invalid-terms');
        iconTerms.classList.add('icon-valid-terms');
      }

    });
  });


});
