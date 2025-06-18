import React, { useState } from "react";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import { Accordion } from "react-bootstrap";
import img1 from "/assets/images/contact-card-2.jpeg";

const TermConditions = () => {
  const [activeKey, setActiveKey] = useState(null);

  // Handle accordion toggle
  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle active key
  };
  const sections = [
    {
      key: "0",
      title: "Copyright and Ownership",
      content: (
        <ol>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Client acknowledges that all rights, title, and ownership of the
            final logo design will belong solely to the Client after full
            payment has been received by the Service Provider.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            Final payment ensures that only the agreed design becomes the
            client’s property. Any previous ideas/concepts remain the property
            of The Service Provider, unless any prior agreement has been made.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Service Provider reserves the right to showcase the completed
            logo design in their portfolio or promotional materials.
          </li>
        </ol>
      ),
    },
    {
      key: "1",
      title: "Design Process",
      content: (
        <ol>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Client acknowledges that all rights, title, and ownership of the
            final logo design will belong solely to the Client after full
            payment has been received by the Service Provider.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            Final payment ensures that only the agreed design becomes the
            client’s property. Any previous ideas/concepts remain the property
            of The Service Provider, unless any prior agreement has been made.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Service Provider reserves the right to showcase the completed
            logo design in their portfolio or promotional materials.
          </li>
        </ol>
      ),
    },
    {
      key: "2",
      title: "Payment and Fees",
      content: (
        <ol>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Client acknowledges that all rights, title, and ownership of the
            final logo design will belong solely to the Client after full
            payment has been received by the Service Provider.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            Final payment ensures that only the agreed design becomes the
            client’s property. Any previous ideas/concepts remain the property
            of The Service Provider, unless any prior agreement has been made.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Service Provider reserves the right to showcase the completed
            logo design in their portfolio or promotional materials.
          </li>
        </ol>
      ),
    },
    {
      key: "3",
      title: "Governing Law and Dispute Resolution",
      content: (
        <ol>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Client acknowledges that all rights, title, and ownership of the
            final logo design will belong solely to the Client after full
            payment has been received by the Service Provider.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            Final payment ensures that only the agreed design becomes the
            client’s property. Any previous ideas/concepts remain the property
            of The Service Provider, unless any prior agreement has been made.
          </li>
          <li className="mb-3" style={{color:"#406B86"}}>
            The Service Provider reserves the right to showcase the completed
            logo design in their portfolio or promotional materials.
          </li>
        </ol>
      ),
    },
  ];
  return (
    <>
      <section class="about-page-top bg-main-blue pt-90">
        <div class="mycontainer">
          <h1
            style={{
              fontSize: "60px", // Increase font size
              letterSpacing: "2px", // Add gap between letters
            }}
            class="py-5 mb-0 display-2 text-main-orange text-uppercase text-center fw-medium font-bebas"
          >
            Terms and Conditions
          </h1>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <section class="py-5">
        <div class="mycontainer">
          <div>
            <p class=" text-lsm-18 text-start font-poppins" style={{color:"#406B86"}}>
              Welcome to [Your Company Name]. Before using our logo design
              service, please carefully review the following Terms and
              Conditions, as they govern the contractual relationship between
              you (the "Client") and [Your Company Name] (the "Service
              Provider"). By using our logo design service, you acknowledge that
              you have read, understood, and agreed to these Terms and
              Conditions in their entirety.
            </p>
            <div class="my-5">
              <Accordion activeKey={activeKey}>
                {sections.map((section) => (
                  <Accordion.Item
                    eventKey={section.key}
                    key={section.key}
                    onClick={() => handleToggle(section.key)}
                  >
                    <Accordion.Header>
                      <div className="d-flex align-items-center text-main-blue">
                        <div className="px-4 accordian-icon">
                          {activeKey === section.key ? (
                            <FaArrowDownLong size={25} />
                          ) : (
                            <FaArrowRightLong size={25} />
                          )}
                        </div>
                        <div>
                          <h2 className="mb-0 display-6 fw-bold">
                            {section.title}
                          </h2>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>{section.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <p class="text-lsm-18  " style={{color:"#406B86"}}>
              By using [Your Logo Design Service Name], you agree to abide by
              these Terms and Conditions. These Terms and Conditions may be
              updated by [Your Company Name] at any time, and the latest version
              will be made available on our website. It is the Client's
              responsibility to review these terms periodically for any changes.
            </p>
            <p class=" text-lsm-18 " style={{color:"#406B86"}}>
              If you have any questions or concerns regarding these Terms and
              Conditions, please contact [Your Company Name] at [Your Contact
              Information].
            </p>
          </div>
        </div>
      </section>
      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default TermConditions;
