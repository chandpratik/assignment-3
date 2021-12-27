import React, { useState } from 'react';
import FeedBack from '../FeedBack';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    department: '',
    rating: '',
  });
  const [isFeedbackVisible, setisFeedbackVisible] = useState(false);

  const [feedbacks, setFeedBacks] = useState([]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setisFeedbackVisible(false);
  };

  const handleSubmit = e => {
    setisFeedbackVisible(true);
    e.preventDefault();
    formData.id = Date.now();
    setFeedBacks(prevState => [...prevState, formData]);
    setFormData({
      id: '',
      name: '',
      department: '',
      rating: '',
    });
  };
  return (
    <div className='form-container'>
      {!isFeedbackVisible ? (
        <form className='feedback-form' onSubmit={handleSubmit}>
          <div className='input-container'>
            <div className='single-input'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                placeholder='Enter Name'
                onChange={handleChange}
                required
              />
            </div>
            <div className='single-input'>
              <label htmlFor='department'>Department</label>
              <input
                type='text'
                id='department'
                name='department'
                value={formData.department}
                placeholder='Enter Depatment'
                onChange={handleChange}
                required
              />
            </div>
            <div className='single-input'>
              <label htmlFor='rating'>Rating</label>
              <input
                type='number'
                id='rating'
                name='rating'
                value={formData.rating}
                placeholder='Enter Rating'
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type='submit' className='submit-form'>
            SUBMIT
          </button>
        </form>
      ) : (
        <></>
      )}
      {isFeedbackVisible ? (
        <>
          <div className='feedbacks-container'>
            {feedbacks.map(feedback => (
              <FeedBack
                key={feedback.id}
                name={feedback.name}
                department={feedback.department}
                rating={feedback.rating}
              />
            ))}
          </div>
          <button className='submit-form' onClick={handleClick}>
            GO BACK
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;
