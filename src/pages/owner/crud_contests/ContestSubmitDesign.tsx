import { useState } from "react";

export const ContestSubmitDesign = () => {
  const contest = {
    title: "Landing Page design for Saas Digital Marketing Techno",
    author: "Agency Shayna",
    image: "Preview Image",
  };

  const [designFile, setDesignFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setDesignFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!designFile || !description.trim()) {
      alert("Please upload your design and write a description.");
      return;
    }
    // Handle submit logic here (e.g. send to API)
    console.log("Submitting:", { designFile, description });
    alert("Design submitted successfully!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-black">
      {/* Contest Header */}
      {contest ? (
        <div className="flex items-start gap-6 mb-12">
          <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-xs underline">
            {contest.image}
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Submit your work</p>
            <h2 className="text-xl font-bold leading-snug">{contest.title}</h2>
            <p className="text-sm text-gray-600 mt-1">by {contest.author}</p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-500">Contest not found.</p>
      )}

      {/* Upload Area */}
      <div className="mb-8">
        <label
          htmlFor="design-upload"
          className="block w-full h-72 bg-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center text-sm text-center cursor-pointer"
        >
          {designFile ? (
            <span className="text-black font-medium">
              {designFile.name}
            </span>
          ) : (
            <span className="underline">Add your design work</span>
          )}
        </label>
        <input
          type="file"
          id="design-upload"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Tell about your work
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Describe your design..."
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-700"
      >
        Submit Now
      </button>
    </div>
  );
};
