const imageInput = document.getElementById("imageInput");

const imagePreview = document.getElementById("imagePreview");

const placeholder = document.getElementById("placeholder");

const generateBtn = document.getElementById("generateBtn");

const status = document.getElementById("status");



let uploadedImage = null;



imageInput.addEventListener("change", function(){


    const file = this.files[0];


    if(file){


        uploadedImage = file;


        const reader = new FileReader();



        reader.onload = function(e){


            imagePreview.src = e.target.result;

            placeholder.style.display="none";


        }



        reader.readAsDataURL(file);


        status.innerHTML =
        "✅ Image uploaded successfully";


    }


});





generateBtn.addEventListener("click", function(){



    if(!uploadedImage){


        status.innerHTML =
        "⚠️ Please upload a molecule image first";


        return;


    }



    status.innerHTML =
    "🧪 AI is analyzing molecule and creating Word report...";



    /*
    
    Later we connect n8n here:

    Website
       |
       |
    n8n webhook
       |
       |
    AI Vision
       |
       |
    Microsoft Word file


    */



    setTimeout(function(){


        status.innerHTML =
        "✅ Report generated! (n8n connection coming next)";


    },3000);



});