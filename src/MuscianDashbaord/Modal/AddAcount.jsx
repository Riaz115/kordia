import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Select from 'react-select';
import countryList from 'react-select-country-list';

const AddAcount = ({ show, handleClose }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const options = countryList().getData().map(country => ({
    ...country,
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`https://flagcdn.com/16x12/${country.value.toLowerCase()}.png`}
          alt={`Flag of ${country.label}`}
          style={{ marginRight: 8 }}
        />
        {country.label}
      </div>
    )
  }));

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <Modal show={show} onHide={handleClose} size="md" centered style={{zIndex: 20000}}>
      <Modal.Header style={{ border: "none", justifyContent: "center" }}>
        <Modal.Title
          style={{
            fontFamily: "poppins",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "23.44px",
            color: "#003a5e",
            letterSpacing: "0.0114em",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Add Bank Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2
          style={{
            fontFamily: "poppins",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "23.44px",
            letterSpacing: "0.0114em",
            textAlign: "start",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#003a5e",
          }}
        >
          Bank Details
        </h2>
        <div className="ms-5">
            <Form>
          <Form.Group controlId="formCountry" style={{ display: "flex", alignItems: "center" }}>
            <Form.Label
              style={{
                
                textAlign: "center",
                fontFamily: "poppins",
                fontSize: "16px",
                fontWeight: 500,
                color: "#003a5e",
                marginRight: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Country
            </Form.Label>
            <Select
              options={options}
              value={selectedCountry}
              onChange={handleCountryChange}
              styles={{
                container: (provided) => ({ ...provided, width: '100%' }),
                control: (provided) => ({ 
                  ...provided, 
                  width: '100%',
                  display: 'flex', 
                  alignItems: 'center' 
                }),
                singleValue: (provided) => ({ ...provided, display: 'flex', alignItems: 'center' }),
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <Form.Label
              style={{
                textAlign: "left",
                fontFamily: "poppins",
                fontSize: "16px",
                fontWeight: 500,
                color: "#003a5e",
                marginRight: "15px",
                whiteSpace: "nowrap",
              }}
            >
              Select Bank
            </Form.Label>
            <Form.Control type="text" placeholder="Select bank account currency" style={{ flex: 1 }} />
          </Form.Group>
        </Form>
        </div>

        <h2 className="mt-2"
          style={{
            fontFamily: "poppins",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "23.44px",
            letterSpacing: "0.0114em",
            textAlign: "start",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#003a5e",
          }}
        >
          Account Details
        </h2>
        <div className="ms-5">
          <Form>
            <Form.Group controlId="formBankName" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 10 }}>
              <Form.Label
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontFamily: "poppins",
                  fontWeight: 500,
                  color: "#003a5e",
                  marginBottom: "5px",
                }}
              >
                Bank Name
              </Form.Label>
              <Form.Control type="text" placeholder="Enter bank name" style={{ width: '100%' }} />
            </Form.Group>
            <Form.Group controlId="formAccountHolderName" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 10 }}>
              <Form.Label
                style={{
                  textAlign: "left",
                  fontFamily: "poppins",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#003a5e",
                  marginBottom: "5px",
                }}
              >
                Account Holder Name
              </Form.Label>
              <Form.Control type="text" placeholder="Enter account holder name" style={{ width: '100%' }} />
            </Form.Group>
            <Form.Group controlId="formAccountNumber" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 10 }}>
              <Form.Label
                style={{
                  textAlign: "left",
                  fontFamily: "poppins",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#003a5e",
                  marginBottom: "5px",
                }}
              >
                Account Number
              </Form.Label>
              <Form.Control type="text" placeholder="Enter account number" style={{ width: '100%' }} />
            </Form.Group>
            <Form.Group controlId="formRoutingNumber" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 10 }}>
              <Form.Label
                style={{
                  textAlign: "left",
                  fontFamily: "poppins",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#003a5e",
                  marginBottom: "5px",
                }}
              >
                Routing Number
              </Form.Label>
              <Form.Control type="text" placeholder="Enter routing number" style={{ width: '100%' }} />
            </Form.Group>
            <Form.Group controlId="formAccountType" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 10 }}>
              <Form.Label
                style={{
                  textAlign: "left",
                  fontFamily: "poppins",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#003a5e",
                  marginBottom: "5px",
                }}
              >
                Account Type
              </Form.Label>
              <Form.Control type="text" placeholder="Enter account type" style={{ width: '100%' }} />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer className="mt-2" style={{ justifyContent: "center"  , border: "none"}}>
        <button
          type="button"
          onClick={handleClose}
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #ff9700",
            padding: "10px 20px",
            fontFamily: "poppins",
            borderRadius: "10px",
            fontSize: "17px",
            fontWeight: 600,
            color: "#ff9700",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{
            backgroundColor: "#ff9700",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            fontFamily: "poppins",
            fontSize: "17px",
            fontWeight: 600,
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Add Account
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddAcount;

