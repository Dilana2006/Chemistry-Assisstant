const imageInput = document.getElementById("imageInput");

const imagePreview = document.getElementById("imagePreview");

const placeholder = document.getElementById("placeholder");

const chemicalNameInput = document.getElementById("chemicalNameInput");

const generateBtn = document.getElementById("generateBtn");

const status = document.getElementById("status");



let uploadedImage = null;



// IMAGE UPLOAD

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





// GENERATE REPORT BUTTON

generateBtn.addEventListener("click", function(){



    const chemicalName = chemicalNameInput.value.trim();



    // Check if user gave any input

    if(!uploadedImage && chemicalName === ""){


        status.innerHTML =
        "⚠️ Upload an image or enter a chemical name";


        return;


    }



    status.innerHTML =
    "🧪 AI is identifying chemical and creating Word report...";





    /*
    
    Future n8n connection:

    Website
        |
        |
    n8n Webhook
        |
        |
    IF Node
      /    \
 Image?   Text?
   |        |
Vision AI  Chemical Search
      \    /
       Merge
        |
   Chemistry AI Agent
        |
   Word Report


    */





    setTimeout(function(){


        status.innerHTML =
        "✅ Report generated! (n8n connection coming next)";


    },3000);



});