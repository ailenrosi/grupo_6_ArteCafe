
function qs(element) {
    return document.querySelector(element);
  }
  
  window.addEventListener("load", function () {
    let $inputName = qs("#name"),
      $nameErrors = qs("#nameErrors"),

      $inputLastname = qs("#lastname"),
      $lastnameErrors = qs("#lastnameErrors"),

      $phone = qs("#phone"),
      $phoneErrors = qs("#phoneErrors"),

      $email = qs("#email"),
    $emailErrors = qs("#emailErrors"),

    $pass = qs("#pass"),
    $passErrors = qs("#passErrors"),

    $pass2 = qs("#pass2"),
    $pass2Errors = qs("#pass2Errors"),

    $terms = qs("#check"),
    $termsErrors = qs("#termsErrors"),

    $file = qs("#formFile"),
    $fileErrors = qs("#fileErrors"),

    $imgPreview = qs("#img-preview"),

    $form = qs("#form"),

      
      regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
      regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
      regExPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
  
    $inputName.addEventListener("blur", function () {
      switch (true) {
        case !$inputName.value.trim():
          $nameErrors.innerHTML = "El campo nombre es obligatorio";
          $inputName.classList.add("is-invalid");
          break;
        case !regExAlpha.test($inputName.value):
          $nameErrors.innerHTML = "Debes ingresar un nombre válido";
          $inputName.classList.add("is-invalid");
          break;  
        default:
          $inputName.classList.remove("is-invalid");
          $inputName.classList.add("is-valid");
          $nameErrors.innerHTML = "";
          break;
      }
    });
  
    $inputLastname.addEventListener("blur", function () {
        console.log("hola")
      switch (true) {
        case !$inputLastname.value.trim():
          $lastnameErrors.innerHTML = "El campo apellido es obligatorio";
          $inputLastname.classList.add("is-invalid");
          break;
        case !regExAlpha.test($inputLastname.value):
          $lastnameErrors.innerHTML = "Debes ingresar un apellido válido";
          $inputLastname.classList.add("is-invalid");
          break;
        default:
          $inputLastname.classList.remove("is-invalid");
          $inputLastname.classList.add("is-valid");
          $lastnameErrors.innerHTML = "";
          break;
      }
    }); 

    $phone.addEventListener("blur", function () {
        console.log($phoneErrors);
        switch (true) {
            case !$phone.value.trim():
                $phoneErrors.innerHTML = 'Ingrese un número de telefono';
                $phone.classList.add('is-invalid')
                break;
                case !regExPhone.test($phone.value):
                    $phoneErrors.innerHTML = 'Debe ingresar un télefono válido';
                    $phone.classList.add('is-invalid');
                    $phoneErrors.innerHTML = '';
                    break;
        }
    })

    $email.addEventListener('blur', function() {
        console.log($emailErrors);
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio';
                $email.classList.add('is-invalid')
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido';
                $email.classList.add('is-invalid')
                break
            default:
                $email.classList.remove('is-invalid');
                $email.classList.add('is-valid');
                $emailErrors.innerHTML = '';
                break;
        }
    });
  
    $pass.addEventListener('blur', function() {
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio';
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                break
            default:
                $pass.classList.remove('is-invalid');
                $pass.classList.add('is-valid');
                $passErrors.innerHTML = ''
                break;
        }
    });

    
$pass2.addEventListener('blur', function(){
    switch (true) {
        case !$pass2.value.trim():
            $pass2Errors.innerHTML = 'Debes reingresar la contraseña';
            $pass2.classList.add('is-invalid')
            break;
        case $pass2.value != $pass.value:
            $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
            $pass2.classList.add('is-invalid')
            break;
        default:
            $pass2.classList.remove('is-invalid');
            $pass2.classList.add('is-valid');
            $pass2Errors.innerHTML = ''
            break;
    }
})

$terms.addEventListener('click',function(){
    $terms.value = 'on'
    $terms.classList.toggle('is-valid');
    $terms.classList.remove('is-invalid');
    $termsErrors.innerHTML = ""
})


$form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = this.elements
    
    for (let index = 0; index < elementosForm.length-1; index++) {
        if(elementosForm[index].value == "" && elementosForm[index].name !== "archivo"){
            elementosForm[index].classList.add('is-invalid');
            submitErrors.innerHTML = "Los campos señalados son obligatorios";
            error = true;
        }
    }

    if(!$terms.checked){
        $terms.classList.add('is-invalid');
        $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
        error = true
    }

    if(!error){
        console.log('Todo bien');
        $form.submit()
    }

})

$file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    })



})