import { useState } from 'react';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  const addWorkout = (e) => {
    e.preventDefault();
    
    if (!exercise || !sets || !reps) {
      alert('Please fill in all fields');
      return;
    }

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets: parseInt(sets),
      reps: parseInt(reps),
      date: new Date().toLocaleDateString(),
    };

    setWorkouts([...workouts, newWorkout]);
    setExercise('');
    setSets('');
    setReps('');
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Workout Tracker 💪</h1>
      
      <form onSubmit={addWorkout} style={{ 
        border: '1px solid #ddd', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Exercise: </label>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            placeholder="e.g., Push-ups"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Sets: </label>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            placeholder="e.g., 3"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Reps: </label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="e.g., 10"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Add Workout
        </button>
      </form>

      <div>
        <h2>Your Workouts ({workouts.length})</h2>
        {workouts.length === 0 ? (
          <p>No workouts yet. Start by adding one!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {workouts.map((workout) => (
              <li
                key={workout.id}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong>{workout.exercise}</strong>
                  <p>{workout.sets} sets x {workout.reps} reps</p>
                  <small>{workout.date}</small>
                </div>
                <button
                  onClick={() => deleteWorkout(workout.id)}
                  style={{
                    padding: '8px 15px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '30px' }}>
        <a href="/" style={{ fontSize: '16px', color: '#2196F3' }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}