import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const UploadCVPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Upload Your CV</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div 
            className={`border-2 border-dashed rounded-lg p-10 text-center ${
              dragActive ? 'border-purple-600 bg-purple-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="flex flex-col items-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <p className="text-lg font-medium mb-2">File uploaded successfully!</p>
                <p className="text-gray-600 mb-4">{file.name}</p>
                <button 
                  onClick={() => setFile(null)}
                  className="text-purple-700 hover:text-purple-900"
                >
                  Upload a different file
                </button>
              </div>
            ) : (
              <>
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium mb-2">Drag and drop your CV here</p>
                <p className="text-gray-600 mb-6">or</p>
                <label className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition duration-300 cursor-pointer">
                  Browse Files
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx" 
                    onChange={handleChange}
                  />
                </label>
                <p className="text-gray-500 mt-4">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
              </>
            )}
          </div>
          
          {file && (
            <div className="mt-8">
              <button 
                className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition duration-300 font-medium"
              >
                Submit CV
              </button>
            </div>
          )}
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Why upload your CV?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Get discovered by top employers in Agartala</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Apply to jobs with a single click</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Receive job recommendations that match your profile</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Track your applications and manage your job search efficiently</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCVPage;