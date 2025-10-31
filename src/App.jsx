import React from 'react'
import './App.css'

// Choose one exercise component to render for the current lesson:
// Day 1-5: Single file components
import Example from './Trial/useEffect.jsx'
// import Example from './components_exercises/2_props/Example1_BasicProps.jsx'
// import Example from './components_exercises/3_events/Example1_ButtonClick.jsx'
// import Example from './components_exercises/4_state/Example1_Counter.jsx'
// import Example from './components_exercises/5_lists/Example1_SimpleList.jsx'

// Day 6+: Directory-based components (import Main.jsx from folder)
// import Example from './components_exercises/6_functions_as_props/Example1_BlogDelete/Main.jsx'

function App() {
  return (
    <div className="example-container">
      <Example />
    </div>
  )
}

export default App


