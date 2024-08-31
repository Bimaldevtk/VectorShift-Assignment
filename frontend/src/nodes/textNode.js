import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    // Extract variables in the form {{ variableName }}
    const variables = newText.match(/{{\s*[\w]+\s*}}/g) || [];
    const uniqueVariables = [...new Set(variables.map(v => v.replace(/{{\s*|\s*}}/g, '')))];

    // Create handles for each unique variable
    setHandles(uniqueVariables);
  };

  useEffect(() => {
    // Adjust the size of the TextNode based on the text length
    const textLength = currText.length;
    const width = Math.max(200, textLength * 8);
    const height = Math.max(80, textLength * 1.5);
    const nodeElement = document.getElementById(id);
    if (nodeElement) {
      nodeElement.style.width = `${width}px`;
      nodeElement.style.height = `${height}px`;
    }
  }, [currText, id]);

  return (
    <div
      id={id}
      className="border-2 border-yellow-500 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ width: 'auto', height: 'auto', minWidth: '224px', minHeight: '112px' }}
    >
      <div className="font-bold text-white text-xl mb-2">Text Node</div>
      <div className="space-y-2">
        <label className="text-sm text-gray-200">
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange}
            className="mt-1 border p-2 rounded-md w-full bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </label>
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle}-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${handle}`}
          style={{ top: `${(index + 1) * 20}px` }}
          className="bg-blue-500"
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="bg-green-500"
      />
    </div>
  );
};
