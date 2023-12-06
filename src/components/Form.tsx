// // Form.tsx
// import React, { useState } from 'react';

// function Form({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//     // Validate form data and call the onSubmit callback
//     onSubmit({ name, phoneNumber, email });
//   };

//   return (
//     <form>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       {/* Other form fields */}
//       <button type="button" onClick={handleSubmit}>Submit</button>
//     </form>
//   );
// }

// export default Form;
