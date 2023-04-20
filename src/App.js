import React from 'react';
import ReactDOM from 'react-dom';

function TreeButton(props) {
  console.log(props)
  return (
    <button>
      <span role="img">{props.tree}</span>
      {props.labelText}
    </button>
  )
}

function Header() {
  return (
    <header>
      <h1>Greening Africa</h1>
      <nav>
        <TreeButton type ="button" tree="tree" labelText="Enter Details" />
      </nav>
    </header>
  )
}

function LandingPage() {
  return (
    <div>
      <Header/>
      <main>
        <div className="card">
          <h2>The Africa Tree Movement!</h2>
          <em>Plant a tree to better the world!!</em>
        </div>
        <div className="card">
          <h2>The tree of choice is here!</h2>
          <div>
            <TreeButton 
            tree="data:image/jpeg;base64,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" 
            labelText="Palm Tree" />
            <TreeButton 
            tree="https://www.istockphoto.com/photos/apple-tree" 
            labelText="Apple Tree" />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <LandingPage />
    </div>
  );
}

export default App