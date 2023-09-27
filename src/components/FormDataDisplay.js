import React from 'react';

function FormDataDisplay({ formData }) {
  return (
    <div className="data-display">
      <h2>Submitted Data</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>
    </div>
  );
}

export default FormDataDisplay;
