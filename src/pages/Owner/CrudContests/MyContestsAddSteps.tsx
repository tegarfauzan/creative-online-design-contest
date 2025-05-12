// MyContestsAddSteps.tsx
import { useState } from 'react';
import { SidebarOwner } from '../../../components/SidebarOwner';
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

export const MyContestsAddSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const attachments = [
    { name: 'Document A' },
    { name: 'Presentation B' },
    { name: 'Design Files C' },
  ];
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // ✅ You can do validation / API calls here
    const isValid = true;

    if (isValid) {
      // Navigate to another route
      navigate("/owner/contests/add/success");
    }
  };

  const deliverables = ['PDF', 'DOCX', 'PNG', 'SVG'];

  const renderStepTabs = () => (
    <div className="flex items-center gap-4 mb-8">
      {[1, 2, 3].map((step) => (
        <button
          key={step}
          onClick={() => setCurrentStep(step)}
          className={`px-4 py-2 rounded font-bold ${
            currentStep === step
              ? 'bg-[#1E144F] text-white'
              : 'border border-black text-black'
          } ${step > currentStep ? 'opacity-60' : ''}`}
        >
          Step {step}
        </button>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Basic Info</h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-center text-sm font-bold">
          Add<br />Photo
        </div>
        <button className="border border-black px-4 py-2 font-bold">Delete photo</button>
      </div>
      <input
        type="text"
        placeholder="Name"
        className="border border-black w-full p-2 mb-4"
      />
      <select className="border border-black w-full p-2 mb-4">
        <option>select category</option>
      </select>
      <textarea
        placeholder="about"
        className="border border-black w-full p-2 mb-4 h-24"
      />
      <input
        type="text"
        placeholder="Type your reference, enter to add"
        className="border border-black w-full p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Type your reference, enter to add"
        className="border border-black w-full p-2 mb-4"
      />
      <button
        onClick={() => setCurrentStep(2)}
        className="bg-blue-600 text-white px-8 py-3 font-bold"
      >
        Continue
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex min-h-screen bg-white text-black">

      {/* Main content */}
      <div className="flex-1 px-10 py-8">

        {/* Form Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Add attachments */}
          <div>
            <h2 className="text-xl font-bold mb-4">Add attachments</h2>
            {attachments.length > 0 ? (
              attachments.map((attachment, index) => (
                <div className="flex items-center gap-4 mb-4" key={index}>
                  <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-center text-sm font-bold">
                    Add<br />Zip File
                  </div>
                  <input
                    type="text"
                    defaultValue={attachment.name}
                    className="border border-black w-full p-2"
                    placeholder="Type name"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic mb-4">No attachments available</p>
            )}
            <button className="border border-black px-4 py-2 font-bold">Add more</button>
          </div>

          {/* Content deliverables */}
          <div>
            <h2 className="text-xl font-bold mb-4">Content deliverable</h2>
            {deliverables.length > 0 ? (
              deliverables.map((type, index) => (
                <select
                  key={index}
                  className="border border-black w-full p-2 mb-4"
                  defaultValue={type}
                >
                  <option value={type}>{type}</option>
                </select>
              ))
            ) : (
              <p className="text-gray-500 italic mb-4">No deliverables available</p>
            )}
            <button className="border border-black px-4 py-2 font-bold">Add more</button>
          </div>
        </div>

        {/* Continue button */}
        <div className="mt-10">
          <button onClick={() => setCurrentStep(3)} className="bg-blue-600 text-white px-8 py-3 font-bold">Continue</button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex gap-12">
      {/* Left Side */}
      <div className="flex-1">
        <div className="bg-[#1E144F] text-white p-6 rounded-2xl mb-6">
          <p className="font-bold text-lg">Irama Wallet</p>
          <p className="text-sm">Active</p>
          <p className="text-3xl font-bold mt-2">Rp 18.000.000</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Add Prize</h2>
          <input
            type="text"
            placeholder="Type your prize"
            className="border border-black w-full p-2 mb-4"
          />
          <button type='submit' className="bg-blue-600 text-white px-8 py-3 font-bold">
            Continue
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2">
        <h2 className="text-lg font-bold mb-2">Follow Terms & Rules</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>lorem dolor si amet makan ayam biar sehat</li>
          <li>lorem dolor si amet makan ayam biar sehat</li>
          <li>lorem dolor si amet makan ayam biar sehat</li>
          <li>lorem dolor si amet makan ayam biar sehat</li>
          <li>lorem dolor si amet makan ayam biar sehat</li>
        </ul>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <SidebarOwner/>

      {/* Main Content */}
      <div className="flex-1 px-10 py-8">
        <h1 className="text-3xl font-bold mb-6">Add new contest</h1>
        <form onSubmit={handleSubmit}>
        {renderStepTabs()}
        {renderStepContent()}
        </form>
      </div>
    </div>
  );
};
