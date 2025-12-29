import User from "./User";

function App() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      margin: "20px",
      flexWrap: "wrap",
      justifyContent: "space-around"
    }}>
      <User name="Ankita" age="23" path="https://picsum.photos/200/300?random=1" />
      <User name="Mahesh" age="17" path="https://picsum.photos/200/300?random=2" />
      <User name="Ashish" age="10" path="https://picsum.photos/200/300?random=3" />
      <User name="Manvindre" age="40" path="https://picsum.photos/200/300?random=4" />
      <User name="Shivam" age="23" path="https://picsum.photos/200/300?random=5" />
      <User name="M" age="12" path="https://picsum.photos/200/300?random=5" />
    </div>

  )
}

export default App;