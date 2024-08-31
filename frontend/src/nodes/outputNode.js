import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="w-56 h-28 border-2 border-green-500 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div className="font-bold text-white text-xl mb-2">Output Node</div>
      <div className="space-y-2">
        <label className="text-sm text-gray-200">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="mt-1 border p-2 rounded-md w-full bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>
        <label className="text-sm text-gray-200">
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="mt-1 border p-2 rounded-md w-full bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
