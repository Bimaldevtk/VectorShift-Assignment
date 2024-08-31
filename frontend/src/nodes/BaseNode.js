import { Handle, Position} from 'reactflow';
import { useState } from 'react';

export const BaseNode = ({ id, data, type, label, inputs = [], outputs = [] }) => {
  const [name, setName] = useState(data?.name || id);
  const [nodeType, setNodeType] = useState(data?.type || type);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setNodeType(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{label}</span>
      </div>
      {inputs.map((input, index) => (
        <div key={index}>
          <label>
            {input.label}:
            {input.type === 'select' ? (
              <select value={nodeType} onChange={handleTypeChange}>
                {input.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
              />
            )}
          </label>
        </div>
      ))}
      {inputs.length > 0 && <br />}
      {outputs.map((output, index) => (
        <Handle
          key={index}
          type={output.type}
          position={output.position}
          id={`${id}-${output.id}`}
          style={output.style}
        />
      ))}
    </div>
  );
};
