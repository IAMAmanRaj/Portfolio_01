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
    const amount = 10000;
    const currency = "INR";
    const receiptId = "12345678";

    const response = await fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
    });

    const order = await response.json();
    console.log(order.id);

    var option = {
      key: "",
      amount,
      currency,
      name: "Payment Gateway",
      description: "Transaction",
      order_id: order.id,
      handler: async function (response) {
        const body = { ...response };
        const validateResponse = await fetch(
          "http://localhost:3000/api/validatePayment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        console.log(option.order_id);

        const jsonResponse = await validateResponse.json();
        console.log(jsonResponse);
      },
      prefill: {
        name: "Name of the User",
        email: "Email id of the user",
        contact: "Phone number of the user",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(option);
    rzp1.on("payment.failed", function (response) {
      alert(response);
    });

    rzp1.open();
    event.preventDefault();
  };

  return (
    <footer className="footer gap-6 pt-16 sm:pt-8 relative z-[20] border-white footer-center p-10 pb-8 text-base-content rounded">
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
      <div className="text-center  text-[10px] sm:text-[15px] lg:text-md flex flex-row">
        <a
          href="/terms&conditions"
          className="link link-hover pr-2 border-r-2 border-white "
        >
          Terms & Conditions
        </a>

        <a href="/privacypolicy" className="link link-hover pr-2 ">
          Privacy Policy
        </a>
      </div>
      <div className="text-center  text-[10px] sm:text-[15px] lg:text-md flex flex-row">
        <a
          onClick={() =>
            modalContentHandler(
              "There is no pricing/product policy available for this business"
            )
          }
          className="link link-hover pr-2 border-r-2 border-white"
        >
          Pricing & Products
        </a>
        <a
          onClick={() =>
            modalContentHandler(
              "There is no shipping policy available for this business"
            )
          }
          className="link link-hover pr-2 border-r-2 border-white"
        >
          Shipping and Delivery Policy
        </a>

        <a
          onClick={() =>
            modalContentHandler("No Cancellations & Refunds are entertained")
          }
          className="link link-hover pr-2 border-r-2 border-white"
        >
          Cancellation and Refund
        </a>

        <a
          onClick={() =>
            modalContentHandler(`[ Mobile Number : +917061410096 ] 
            [ Address : patna , Bihar ] 
            [ Pincode : 800023 ] `)
          }
          className="link link-hover "
        >
          Contact Us
        </a>
      </div>
      <div>
        <p>Portfolio @ Aman Raj | Copyright © 2024 - All rights reserved</p>
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
              <Button color="gray" onClick={() => setShowModal(false)}>
                OK
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </footer>
  );
};

export default Footer;
