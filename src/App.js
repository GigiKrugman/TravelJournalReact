
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"


function App() {
  const image = data.map(image => {
    return (
        <Card
          title={image.title}
           {...image}
           />
    )
})

  return (
    <div>
           <Header />
             <section>
              {image}
            </section>
        </div>
  );
}

export default App;
