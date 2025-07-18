import React, { useState } from 'react';

function App() {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({ date: '', type: '', amount: '', note: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.type || !formData.amount) return;
    setEntries([...entries, formData]);
    setFormData({ date: '', type: '', amount: '', note: '' });
  };

  return (
    <div className='app'>
      <h1 className='title'>Tally Khata</h1>
      <form onSubmit={handleSubmit} className='entry-form'>
        <input type='date' name='date' value={formData.date} onChange={handleChange} required />
        <select name='type' value={formData.type} onChange={handleChange} required>
          <option value=''>Select Type</option>
          <option value='income'>Income</option>
          <option value='expense'>Expense</option>
        </select>
        <input type='number' name='amount' value={formData.amount} onChange={handleChange} placeholder='Amount' required />
        <input type='text' name='note' value={formData.note} onChange={handleChange} placeholder='Note' />
        <button type='submit'>Add Entry</button>
      </form>

      <div className='entry-list'>
        {entries.map((entry, index) => (
          <div key={index} className={`entry ${entry.type}`}>
            <div>{entry.date}</div>
            <div>{entry.type}</div>
            <div>{entry.amount} ৳</div>
            <div>{entry.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;