import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link, json } from "react-router-dom";
import logo from "../../../public/images/razorpay-icon.png";
const Footer = () => {
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

    var option = {
      key: "",
      amount,
      currency,
      name: "Portfolio | Aman Raj",
      description: "Test Transaction",
      image: { logo },
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
        const jsonResponse = await validateResponse.json();
        console.log(jsonResponse);
      },
      prefill: {
        name: "Aman Raj",
        email: "imamanraj87@gmail.com",
        contact: "7061410096",
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
    <footer className="footer pt-16 sm:pt-8 relative z-[20] border-white  footer-center p-10 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a onClick={paymentHandler} className="link link-hover">
          Support Me
        </a>
        <a className="link link-hover">Contact</a>
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
      <aside>
        <p>Copyright © 2024 - All right reserved</p>
        <p>{`Made with <3 `}</p>
        <p>{`Feel free to reach out :)  `}</p>
      </aside>
    </footer>
  );
};

export default Footer;
