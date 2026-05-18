import React, { useState } from "react";
import "./FAQs.css";

function FAQs(){

  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

const faqData = [
  {
    question: "What is a Zerodha account",
    answer: (
      <div>A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.</div>
    )
  },

  {
    question: "What documents are required to open a demat account?",
    answer: (
      <div>
        The following documents are required to open a Zerodha account online:
        <div className="mt-3">
          <ul>
            <li>PAN number</li>
            <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
            <li>Cancelled cheque or bank account statement</li>
            <li>Income proof (Required for F&O trading)</li>
          </ul>
        </div>
      </div>
    )
  },

    {
    question: "Is Zerodha account opening free?",
    answer: (
      <div>Yes, It is completely free.</div>
    )
  },

  {
    question: "Are there any maintenance charges for a demat account?",
    answer: (
      <div>
        <div >The account maintenance charges is applicable based on the account type.</div>
        <div>For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.</div>

        <div>
          For non-BSDA accounts: ₹300 per year + GST.
        </div>
        <div>To learn more about BSDA, <a href="#" className="">Click here</a></div>
        
      </div>
    )
  },

  {
    question: "Can I open a demat account without a bank account?",
    answer: (
      <div>
        <div>
          To open a demat account, you must have a bank account in your name.
        </div>
        <div >
          If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.
        </div>
      </div>
    )
  },
    {
    question: "What is a Basic Services Demat Account (BSDA)?",
    answer: (
      <div>BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs.</div>
    )
  },
      {
    question: "Can I open a demat and trading account using the mobile app?",
    answer: (
      <div>Yes, You can open a demat and trading account completely online using the Zerodha Kite mobile app, available on Android and iOS.</div>
    )
  },
];

  return (
    <div className="container">

      <h3 className="faq-title">FAQs</h3>

      {faqData.map((faq, index) => (
        <div
          className="faq-item"
          key={index}
          onClick={() => toggleFAQ(index)}
        >

          {/* Blue Line */}
          <div
            className={`faq-line ${
              open === index ? "active" : ""
            }`}
          ></div>

          {/* Question */}
          <div className="faq-question">

            <p>{faq.question}</p>

            <i
              className={`fa-solid ${
                open === index
                  ? "fa-angle-up"
                  : "fa-angle-down"
              }`}
            ></i>

          </div>

          {/* Answer */}
          <div
            className={`faq-answer ${
              open === index ? "show" : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>

        </div>
      ))}

    </div>
  );
};

export default FAQs;