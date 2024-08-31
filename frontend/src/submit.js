import { useState } from 'react';
import axios from 'axios';
import { useStore } from './store'; 

export const SubmitButton = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges
    }));

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
 
            const response = await axios.post('http://127.0.0.1:8000/pipelines/parse', {
                nodes,
                edges
            });

            const { num_nodes, num_edges, is_dag } = response.data;

            alert(`Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs DAG: ${is_dag}`);
        } catch (err) {
            setError('An error occurred while submitting the pipeline.');
            console.error('Submit Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                    opacity: loading ? 0.6 : 1
                }}
            >
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
    );
};
