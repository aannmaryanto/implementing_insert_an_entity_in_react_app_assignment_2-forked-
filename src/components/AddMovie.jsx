// src/components/AddMovie.jsx
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Movie submitted (demo only)');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" required /><br /><br />
        <input type="text" placeholder="Director" required /><br /><br />
        <select required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select><br /><br />
        <input type="number" placeholder="Release Year" required /><br /><br />
        <textarea placeholder="Synopsis" required></textarea><br /><br />
        <input type="url" placeholder="Poster Image URL" required /><br /><br />
        
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
