export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Stryde! 💪</h1>
      <p>Your personal fitness training app</p>
      <nav style={{ marginTop: '30px' }}>
        <a href="/workouts" style={{ marginRight: '20px', fontSize: '18px' }}>
          View Workouts
        </a>
        <a href="#" style={{ fontSize: '18px' }}>
          Progress
        </a>
      </nav>
    </div>
  );
}