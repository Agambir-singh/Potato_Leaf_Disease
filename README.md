# Potato Leaf Disease Classification 

A deep learning-based web application that detects diseases in potato leaves using image classification.  
The model analyzes an uploaded image and predicts whether the leaf is healthy or affected by disease.

---

##  Features

- CNN-based deep learning model for image classification
- Detects diseases in potato leaves with high accuracy
- Simple web interface for uploading images
- Fast backend API built with FastAPI
- Real-time prediction and result display

---

## 🛠 Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- FastAPI
- Python

**Machine Learning**
- TensorFlow / PyTorch
- NumPy
- Pandas
- Matplotlib

---

## 📊 Model Details

- Model Type: Convolutional Neural Network (CNN)
- Dataset: Potato leaf disease dataset
- Validation Accuracy: **~95%**
- Image Classification Task

The model was trained to classify potato leaf images into disease categories and healthy leaves.

---

## 📂 Project Structure

```
potato-leaf-disease-classification
│
├── backend
│   ├── main.py
│   ├── model
│   └── utils
│
├── frontend
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── dataset
│
├── model
│   └── trained_model
│
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Agambir-singh/potato-leaf-disease-classification.git
cd potato-leaf-disease-classification
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

Open the frontend in your browser and upload an image for prediction.

---

## 🧪 How It Works

1. User uploads an image of a potato leaf.
2. The image is sent to the FastAPI backend.
3. The trained CNN model processes the image.
4. The model predicts the disease category.
5. The result is returned and displayed on the web interface.

---

## 📈 Future Improvements

- Deploy the application using Docker
- Add support for more plant diseases
- Improve model accuracy with larger datasets
- Add mobile-friendly UI


