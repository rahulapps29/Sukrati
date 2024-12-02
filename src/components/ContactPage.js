import React from "react";

const ContactPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, feel free to reach out to us!
      </p>
      <form style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "80%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "80%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            placeholder="Your Message"
            style={{
              width: "80%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              height: "100px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#ff4500",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
