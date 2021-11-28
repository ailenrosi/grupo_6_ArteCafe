function qs (element){
    return document.querySelector(element);
}

window.addEventListener("load",function(){
    let $name = qs("#name");
    $nameErrors = qs("#nameErrors"),
    
    $file = qs("#formFile"),
    $fileErrors = qs("#fileErrors"),
    
    $imgPreview = qs("#img-preview"),

    $form = qs("#form"),


    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
    regExName = /[0-9a-zA-Z]{5,50}/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
   


$name.addEventListener("blur", function(event){
    event.preventDefault()
    switch (true) {
        case !$name.value.trim():
          $nameErrors.innerHTML = "El campo nombre es obligatorio";
          $name.classList.add("is-invalid");
          break;
        case !regExAlpha.test($name.value):
          $nameErrors.innerHTML = "El nombre debe contener al menos 5 caracteres";
          $name.classList.add("is-invalid");
          break;  
          case !regExName.test($name.value):
            $nameErrors.innerHTML = "El nombre debe contener al menos 5 caracteres";
            $name.classList.add("is-invalid");
            break; 
        default:
          $name.classList.remove("is-invalid");
          $name.classList.add("is-valid");
          $nameErrors.innerHTML = "";
          break;
    }
    
});

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
                    $imgPreview.innerHTML = '<img class="imagenPerfil" src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
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
    
        if(!error){
            console.log('Todo bien');
            $form.submit()
        }
    
    })

    $("#img-preview").click(() => {
        $("#formFile").click();
    })

    $("#deleteForm").submit(function (event) {
        event.preventDefault();
        let confirmacion = confirm("Esta seguro que desea eliminar su perfil?");
        if(confirmacion){
            this.submit();
        }
    });

})