const PrivacyPolicy = () => {
  return (
    <div className="h-full pb-4 w-full bg-gray-950 text-blue-500 flex flex-col gap-12 items-center pt-24">
      <h1 className="roboto text-2xl lg:5xl font-bold">Privacy Policy</h1>
      <div className="max-w-4xl text-left">
        <p className="font-semibold pl-0">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your personal information.
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Information Collection:</strong> We may collect personal
            information such as your name, contact details, and payment
            information when you use our website or make a purchase.
          </li>
          <li>
            <strong>Use of Information:</strong> The information we collect is
            used to process your orders, provide customer service, and improve
            our website and services.
          </li>
          <li>
            <strong>Information Sharing:</strong> We do not sell, trade, or
            otherwise transfer your personal information to outside parties
            without your consent, except as necessary to fulfill your requests
            and process transactions.
          </li>
          <li>
            <strong>Data Security:</strong> We implement a variety of security
            measures to maintain the safety of your personal information.
            However, no method of transmission over the internet or electronic
            storage is 100% secure.
          </li>
          <li>
            <strong>Cookies:</strong> Our website uses cookies to enhance your
            experience, gather general visitor information, and track visits to
            our website. You can choose to disable cookies through your browser
            settings.
          </li>
          <li>
            <strong>Third-Party Links:</strong> Occasionally, at our discretion,
            we may include or offer third-party products or services on our
            website. These third-party sites have separate and independent
            privacy policies.
          </li>
          <li>
            <strong>Changes to Privacy Policy:</strong> We reserve the right to
            update this privacy policy at any time. Any changes will be posted
            on this page.
          </li>
          <li>
            <strong>Contact Information:</strong> If you have any questions
            about this privacy policy, you can contact us using the information
            provided on our website.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
