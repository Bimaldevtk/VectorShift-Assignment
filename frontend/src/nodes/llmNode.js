import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <div className="w-56 h-28 border-2 border-purple-500 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        className="top-1/3"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        className="top-2/3"
      />
      <div className="font-bold text-white text-xl mb-2">LLM Node</div>
      <div className="text-sm text-gray-200">This is a LLM.</div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
}
