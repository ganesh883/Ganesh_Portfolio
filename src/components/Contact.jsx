import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Your Name",
          from_email: form.email,
          to_email: "your-email@example.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      
      {/* LEFT: Contact Form */}
        <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-1 bg-black-100 p-8 rounded-2xl"
    >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

        {/* RIGHT: Social / Contact Links */}
        <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="flex-1 flex flex-col gap-6 bg-black-50 p-8 rounded-2xl justify-center items-center"
    >
          <p className={styles.sectionSubText}>Connect with me</p>
        <a
          href="https://github.com/ganesh883"
          target="_blank"
          className="flex items-center gap-3 text-white hover:text-secondary"
        >
          <FaGithub size={24} /> <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/g_a_n_e_s_h_05/"
          target="_blank"
          className="flex items-center gap-3 text-white hover:text-secondary"
        >
          <FaInstagram size={24} /> <span>Instagram</span>
        </a>

        <a
          href="mailto:ganesh150eee@gmail.com"
          className="flex items-center gap-3 text-white hover:text-secondary"
        >
          <FaEnvelope size={24} /> <span>Gmail</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ganesh-k-2233a61b0/"
          target="_blank"
          className="flex items-center gap-3 text-white hover:text-secondary"
        >
          <FaLinkedin size={24} /> <span>LinkedIn</span>
        </a>

        <div className="flex items-center gap-3 text-white">
          <FaPhone size={24} /> <span>+91 6385331892</span>
        </div>

        <a
          href="/Ganesh_Resume.pdf"
          download
          className="flex items-center gap-3 text-white hover:text-secondary"
        >
          <HiDownload size={24} /> <span>Download Resume</span>
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
