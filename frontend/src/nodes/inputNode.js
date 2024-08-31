import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="w-56 h-28 border-2 border-blue-500 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="font-bold text-white text-xl mb-2">Input Node</div>
      <div className="space-y-2">
        <label className="text-sm text-gray-200">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="mt-1 border p-2 rounded-md w-full bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="text-sm text-gray-200">
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            className="mt-1 border p-2 rounded-md w-full bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </div>
  );
}
