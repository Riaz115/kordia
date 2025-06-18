import { Typography } from "@mui/material";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Security = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const passwordValidation = {
    isLengthValid: form.newPassword.length >= 8,
    hasUpperCase: /[A-Z]/.test(form.newPassword),
    hasSpecialCharOrNumber: /[0-9!@#$%^&*]/.test(form.newPassword),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.oldPassword) newErrors.oldPassword = "Old Password is required.";
    if (!form.newPassword) newErrors.newPassword = "New Password is required.";
    if (!form.confirmNewPassword)
      newErrors.confirmNewPassword = "Confirm New Password is required.";
    else if (form.newPassword !== form.confirmNewPassword)
      newErrors.confirmNewPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form logic here
      console.log("Form submitted successfully:", form);
    }
  };

  return (
    <div className="mx-4 mt-3 border-top p-2">
      <form onSubmit={handleSubmit}>
        {["oldPassword", "newPassword", "confirmNewPassword"].map((field) => (
          <div key={field} className="mb-3">
            <label
              htmlFor={field}
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "6px",
                color: "#333",
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
            >
              {field === "oldPassword" && "Old Password"}
              {field === "newPassword" && "New Password"}
              {field === "confirmNewPassword" && "Confirm New Password"}
            </label>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                maxWidth: "400px", // Restricts width on large screens
                width: "100%", // Full width on small screens
              }}
            >
              <input
                type={showPassword[field] ? "text" : "password"}
                id={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px 40px 10px 10px", // Padding adjusted for the right icon
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  border: `1px solid ${errors[field] ? "red" : "#00000012"}`,
                  fontSize: "14px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "10px", // Icon now aligned to the right
                  color: "#666",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
                onClick={() => toggleShowPassword(field)}
              >
                {showPassword[field] ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {errors[field] && (
              <small
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "4px",
                  display: "block",
                }}
              >
                {errors[field]}
              </small>
            )}
          </div>
        ))}

        <div className="d-flex align-items-center gap-1">
          {passwordValidation.isLengthValid ? (
            <IoMdCheckmarkCircleOutline color="#06C552" size={12} />
          ) : (
            <IoCloseCircleOutline color="#EE0004" size={12} />
          )}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "12px",
              color: "#89888880",
            }}
          >
            Password must be at least 8 characters long.
          </Typography>
        </div>
        <div className="d-flex align-items-center gap-1">
          {passwordValidation.hasUpperCase ? (
            <IoMdCheckmarkCircleOutline color="#06C552" size={12} />
          ) : (
            <IoCloseCircleOutline color="#EE0004" size={12} />
          )}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "12px",
              color: "#89888880",
            }}
          >
            Password must contain at least one upper case.
          </Typography>
        </div>
        <div className="d-flex align-items-center gap-1">
          {passwordValidation.hasSpecialCharOrNumber ? (
            <IoMdCheckmarkCircleOutline color="#06C552" size={12} />
          ) : (
            <IoCloseCircleOutline color="#EE0004" size={12} />
          )}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "12px",
              color: "#89888880",
            }}
          >
            Password must contain at least one number or special character.
          </Typography>
        </div>

        <div className="d-flex mt-4 gap-2">
          <button
            type="button"
            style={{
              backgroundColor: "#D5D5D5",
              color: "black",
              borderRadius: "30px",
              padding: "8px 30px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
            onClick={() =>
              setForm({
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
              })
            }
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: "#003A5E",
              color: "white",
              borderRadius: "30px",
              padding: "8px 30px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Security;
