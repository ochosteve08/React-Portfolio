import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";
import { MdOutlineSend } from "react-icons/md";

const EmailForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_guxlsmb",
        "template_eqwju7j",
        form.current,
        "BnhjwOWdkZs2ojaoH"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("error sending message, try again!");
        }
      );
  };
  return (
    <section id="emailForm">
      <form ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="email"
          id="email"
          placeholder="Email"
          required
        />
        <br />
        <textarea
          name="message"
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
