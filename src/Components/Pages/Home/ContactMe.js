import React, { useState } from "react";
import { send } from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// import contact data
import { contact } from "../../Data/Data";

const ContactMe = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");
  const handleNameChange = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmailChange = (e) => {
    set_sender_email(e.target.value);
  };
  const handleMessageChange = (e) => {
    set_message(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_zmaj1df",
      "template_k09abfs",
      { sender_name, sender_email, message },
      "WpMgcyC3aVAAi8KPa"
    )
      .then((response) =>
        toast.success("Send your mail", console.log(response))
      )

      .catch((err) => toast.error("Failed send your mail", err));
  };

  return (
    <section className="section bg-primary" id="ContactMe">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">You can contact me for any of your needs</p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full max-w-[780px]">
            <form onSubmit={sendMail}>
              <div className="grid grid-cols-1">
                <label htmlFor="name">Name</label>
                <input
                  className="border p-1 bg-inherit text-[#ac6b34] rounded outline-none"
                  type="text"
                  name="sender_name"
                  id=""
                  value={sender_name}
                  onChange={handleNameChange}
                  required
                />
                <label className="pt-4" htmlFor="email">
                  Email
                </label>
                <input
                  className="border p-1 bg-inherit text-[#ac6b34] rounded outline-none"
                  type="email"
                  name="sender_email"
                  onChange={handleEmailChange}
                  value={sender_email}
                  id=""
                  required
                />
                <label className="pt-4" htmlFor="massage">
                  Massage
                </label>
                <textarea
                  className=" text-[#ac6b34] p-1 rounded outline-none bg-inherit border"
                  name="massage"
                  value={message}
                  onChange={handleMessageChange}
                  id=""
                  cols="5"
                  rows="4"
                  required
                ></textarea>
                <input
                  type="submit"
                  bg-inherit
                  value="Send"
                  className="rounded  bg-[#ac6b34] text-white font-sans py-1 text-2xl mt-4 cursor-pointer hover:glass ease-in-out duration-300 "
                />
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
