import React, { useState } from "react";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of heavy machinery do you export?",
      answer:
        "We specialize in exporting construction machinery like JCB, Crane, Concrete Mixer and many more, meet global demands.",
    },
    {
      question: "Which countries do you ship heavy machinery to?",
      answer:
        "We export to regions across 100+ countries like USA, China, Netherland, Tunisia, Singapore, Vietnam adhering to the import regulations of each destination in country.",
    },
    {
      question: "Can you assist with customizations or specific machinery requirements?",
      answer:
        "Yes, we work closely with manufacturers to offer tailored solutions and ensure the machinery meets your specific project needs.",
    },
    {
      question: "What documents are provided for heavy machinery exports?",
      answer:
        "We provide invoices, packing lists, certificates of origin, inspection certificates, and any other compliance documentation required for customs clearance.",
    },
    {
      question: "What is your shipping and delivery process for heavy machinery?",
      answer:
        "We offer end-to-end logistics solutions, including safe packaging, coordination with shipping lines, and real-time tracking to ensure timely delivery.",
    },
    {
      question: "How can I place an order or request a quotation?",
      answer:
        "You can contact us through our official website or sales team to discuss your requirements. We will provide detailed quotations and assistance throughout the order process.",
    },
  ];

  return (
    <div className="w-full py-12 bg-sky-50">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-yellow-500 md:text-4xl mb-2 text-customRed font-serif tracking-wide">
          Frequently Asked Questions
        </h1>
        <h2 className="text-md md:text-lg font-medium text-gray-800 font-serif tracking-widest">
          Answers to your heavy machinery export inquiries
        </h2>
      </div>
      <div className="mx-auto w-11/12 md:w-8/12">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-sky-200">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-customGray focus:outline-none hover:text-customRed"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="text-2xl text-customRed font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <p className="pl-4 pb-4 text-customGray">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;