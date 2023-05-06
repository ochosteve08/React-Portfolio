import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./EmailForm.css";
import { MdOutlineSend } from "react-icons/md";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_name: "Recipient Name",
          from_name: "Your Name",
          reply_to: "your_email@example.com",
          message: "This is a test email",
        },
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
          console.log("error sending message, try again!");
        }
      );

    // Reset the form after submission
    form.current.reset();
  };

  return (
    <section id="emailForm">
      <form ref={form} onSubmit={sendEmail}>
        <input
          name="user_email"
          type="email"
          id="email"
          placeholder="Email"
          required
        />
        <br />
        <textarea
          name="user_message"
          id="message"
          placeholder="Write message..."
          required
        ></textarea>
        <br />
        <button type="submit" id="submitBtn">
          Submit <MdOutlineSend />
        </button>
      </form>
    </section>
  );
};

export default EmailForm;
