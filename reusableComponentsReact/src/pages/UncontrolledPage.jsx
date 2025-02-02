import React, { useRef,useState } from "react";
import Modal from "../components/Modal/Modal"; // Import the reusable Modal component
import { Form } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function UncontrolledPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log("Form Data:", formData);
    closeModal(); // Close the modal after submission
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Uncontrolled Page</h1>
      <Button
        onClick={openModal}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Modal with Form
      </Button>

      {isModalOpen && (
        <Modal onClose={closeModal} className="w-96">
          <h2 className="text-xl font-semibold mb-4">Uncontrolled Form</h2>
          <Form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <Input
                type="text"
                name="username"
                ref={usernameRef}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Input
                type="email"
                name="email"
                ref={emailRef}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <Input
                type="password"
                name="password"
                ref={passwordRef}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter password"
              />
            </div>
            <Button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </Button>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default UncontrolledPage;