import Card from "./Card";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="container-xxl">
        <div className="row">
          <Card name="Vinod" path="https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg" age="25" />
          <Card name="Rahul" path="https://images.pexels.com/photos/8217462/pexels-photo-8217462.jpeg" age="20" />
          <Card name="Mahesh" path="https://images.pexels.com/photos/7605935/pexels-photo-7605935.jpeg" age="10" />
          <Card name="Yesh" path="https://images.pexels.com/photos/7605975/pexels-photo-7605975.jpeg" age="8" />
          <Card name="Yesh" path="https://images.pexels.com/photos/7605975/pexels-photo-7605975.jpeg" age="22" />

        </div>
      </div>
    </>


  )
}

export default App