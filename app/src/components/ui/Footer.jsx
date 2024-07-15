import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const modalContentHandler = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const paymentHandler = async (event) => {
    // Your paymentHandler logic
  };

  return (
    <footer className="footer pt-16 sm:pt-8 relative z-[20] border-white footer-center p-10 pb-2 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a onClick={paymentHandler} className="link link-hover">
          Support Me
        </a>
        <a className="link link-hover">My Resume</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.linkedin.com/in/aman-raj-a3710622a/">
            <FaLinkedinIn
              className="hover:text-blue-600 transition-all duration-800"
              size={30}
            />
          </Link>
          <Link to="https://github.com/IAMAmanRaj">
            <BsGithub
              className="hover:opacity-85  transition-all duration-800 "
              size={30}
            />
          </Link>
          <Link to="https://www.instagram.com/i_m_amanraj87/">
            <FaInstagram
              className="hover:text-red-900 transition-all duration-800"
              size={30}
            />
          </Link>
        </div>
      </nav>
      <div className="text-center flex flex-row">
        <a href="/terms&conditions" className="link link-hover">
          Terms & Conditions
        </a>
        |
        <a href="/privacypolicy" className="link link-hover">
          Privacy Policy
        </a>
        |
        <a
          onClick={() =>
            modalContentHandler("Shipping is not applicable for business")
          }
          className="link link-hover"
        >
          Shipping Policy
        </a>{" "}
        <a
          onClick={() => modalContentHandler("Mobile Number : 7061410096")}
          className="link link-hover"
        >
          Cancellation and Refund Policy
        </a>
        |
        <a
          onClick={() => modalContentHandler("Mobile Number : 7061410096")}
          className="link link-hover"
        >
          Contact Us
        </a>
      </div>
      <div>
        <p>Copyright © 2024 - All rights reserved</p>
        <p>{`Made with <3 `}</p>
        <p>{`Feel free to reach out :)  `}</p>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
        className="absolute z-[30] bg-black h-screen w-screen"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center mt-24">
            <h3 className="mb-5 text-lg text-white">{modalContent}</h3>
            <div className="flex  justify-center gap-4">
              <Button color="failure">Yes, I'm sure</Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </footer>
  );
};

export default Footer;
