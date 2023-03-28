import React, { useState } from 'react';
import "./Form.css"


function Form() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      name: name,
      department: department,
      rating: rating,
    };
  
    setFeedbackList([...feedbackList, newFeedback]);

    setName('');
    setDepartment('');
    setRating('');
  };

  return (
    <div className="feedback-form">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="feedback-list">
        {feedbackList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.name}</td>
                  <td>{feedback.department}</td>
                  <td>{feedback.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No feedback yet</p>
        )}
      </div>
    </div>
  );
}

export default Form;
