import { useState, useEffect } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [phoneType, setPhoneType] = useState("home");
  const [validationError, setValidationError] = useState([]);

  useEffect(() => {
    const errors = [];
    if (name.length < 3) {
      errors.push("Name must be at least 3 characters long");
    }
    if (!email.includes("@")) {
      errors.push("Email is not valid");
    }

    if (errors.length > 0) {
      setValidationError(errors);
    }
  }, [name, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationError.length > 0) {
      alert("Please fix validation errors");
    }
    // console.log(name, email, phone);
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submitedAt: new Date(),
    };
    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("home");
    setComments("");
  };

  return (
    <>
      <h2>Hello from ContactUs</h2>
      <form onSubmit={handleSubmit}>
        {validationError.length > 0 && (
          <div>
            <p>Please fix the following validation errors:</p>
            <ul>
              {validationError.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            value={phoneType}
            onChange={(e) => setPhoneType(e.target.value)}
            name="phoneType"
          >
            <option value="" disabled></option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default ContactUs;
