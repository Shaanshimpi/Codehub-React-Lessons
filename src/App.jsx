import React from 'react'
import './App.css'

// Choose one exercise component to render for the current lesson:
// Day 1-5: Single file components
// import Example from './Trial/LearnUseEffect2.jsx'
// import Example from './components_exercises/2_props/Example1_BasicProps.jsx'
// import Example from './components_exercises/3_events/Example1_ButtonClick.jsx'
// import Example from './components_exercises/4_state/Example1_Counter.jsx'
// import Example from './components_exercises/5_lists/Example1_SimpleList.jsx'

// Day 6+: Directory-based components (import Main.jsx from folder)
// import Example from './components_exercises/6_functions_as_props/Example1_BlogDelete/Main.jsx'
import Example from './components_exercises/7_useEffect/Example4_FilterStudentsByMarks/Main.jsx'
// import Example from './components_exercises/7_useEffect/Example5_FilterProductsByPrice/Main.jsx'
// import Example from './components_exercises/7_useEffect/Example6_FilterMoviesByYear/Main.jsx'
// import Example from './components_exercises/7_useEffect/Example7_FilterItemsByCategory/Main.jsx'
// import Example from './components_exercises/7_useEffect/Example8_FetchNewsArticles/Main.jsx'
// import Example from './components_exercises/7_useEffect/Example9_NasaApod/Main.jsx'
// import Example from './components_exercises/7_useEffect/Example10_NasaImageSearch/Main.jsx'

function App() {
  return (
    <div className="example-container">
      <Example />
    </div>
  )
}

export default App


