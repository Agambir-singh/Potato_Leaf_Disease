const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const resultCard = document.getElementById('resultCard');
const leafImage = document.getElementById('leafImage');
const label = document.getElementById('label');
const confidence = document.getElementById('confidence');
const clearBtn = document.getElementById('clearBtn');

// Click to open file picker
uploadBox.addEventListener('click', () => fileInput.click());

// Drag and drop handling
uploadBox.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadBox.style.borderColor = '#4caf50';
});

uploadBox.addEventListener('dragleave', () => {
  uploadBox.style.borderColor = '#ccc';
});

uploadBox.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadBox.style.borderColor = '#ccc';
  handleFile(e.dataTransfer.files[0]);
});

// File selection
fileInput.addEventListener('change', (e) => {
  handleFile(e.target.files[0]);
});

// Main function: preview + send to backend
async function handleFile(file) {
  if (!file) return;

  // Preview image
  const reader = new FileReader();
  reader.onload = async () => {
    leafImage.src = reader.result;
    uploadBox.classList.add('hidden');
    resultCard.classList.remove('hidden');

    // Send image to FastAPI backend
    let formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Prediction failed: " + response.status);
      }

      const data = await response.json();

      // Display real prediction
      label.textContent = data.class;
      confidence.textContent = (data.confidence * 100).toFixed(2) + "%";

    } catch (error) {
      label.textContent = "Error";
      confidence.textContent = "Could not get prediction";
      console.error(error);
    }
  };

  reader.readAsDataURL(file);
}

// Clear button
clearBtn.addEventListener('click', () => {
  resultCard.classList.add('hidden');
  uploadBox.classList.remove('hidden');
  fileInput.value = "";
  leafImage.src = "";
  label.textContent = "-";
  confidence.textContent = "-";
});
