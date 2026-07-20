// =====================================
// ChemAI - n8n Webhook Connection
// =====================================

const webhookURL = "https://d2006d.app.n8n.cloud/webhook/chemistry-assistant";

const imageInput = document.getElementById("imageInput");
const chemicalNameInput = document.getElementById("chemicalNameInput");
const generateBtn = document.getElementById("generateBtn");
const status = document.getElementById("status");


// Image preview
imageInput.addEventListener("change", () => {

    const file = imageInput.files[0];

    if (file) {

        const preview = document.getElementById("imagePreview");

        preview.src = URL.createObjectURL(file);

        preview.style.display = "block";

        document.getElementById("placeholder").style.display = "none";
    }

});



// Generate report button
generateBtn.addEventListener("click", async () => {


    status.innerHTML = "🧪 Preparing chemistry analysis...";


    try {

        const formData = new FormData();


        // IMAGE BRANCH
        if (imageInput.files.length > 0) {

            status.innerHTML =
            "📷 Sending molecule image to ChemAI...";


            // IMPORTANT:
            // n8n expects binary field called "data"
            formData.append(
                "data",
                imageInput.files[0]
            );

        }


        // TEXT BRANCH
        else if (chemicalNameInput.value.trim() !== "") {


            status.innerHTML =
            "🧬 Sending chemical name to ChemAI...";


            formData.append(
                "chemicalName",
                chemicalNameInput.value.trim()
            );

        }


        else {

            status.innerHTML =
            "⚠️ Upload an image or enter a chemical name.";

            return;

        }



        const response = await fetch(
            webhookURL,
            {
                method: "POST",
                body: formData
            }
        );



        if (!response.ok) {

            throw new Error(
                "n8n webhook failed"
            );

        }



        status.innerHTML =
        "📄 Creating Word chemistry report...";



        const blob = await response.blob();



        const filename =
        "ChemAI_Chemistry_Report.docx";



        const url =
        window.URL.createObjectURL(blob);



        const link =
        document.createElement("a");


        link.href = url;

        link.download = filename;


        document.body.appendChild(link);

        link.click();

        link.remove();


        window.URL.revokeObjectURL(url);



        status.innerHTML =
        "✅ Chemistry report generated successfully!";


    }


    catch(error) {


        console.error(error);


        status.innerHTML =
        "❌ Error connecting to ChemAI.";

    }


});