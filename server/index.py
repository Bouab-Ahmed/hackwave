import streamlit as st
import tensorflow as tf

# Load the HDF5 model
model = tf.keras.models.load_model('./model/model.hdf5')

# Define a Streamlit route for predictions
@st.route('/predict', methods=['POST'])
def predict():
    # Get data from the request
    data = st.request.form.get('data')
    # Preprocess data if needed
    # Make predictions using the loaded model
    predictions = model.predict(data)
    return predictions
