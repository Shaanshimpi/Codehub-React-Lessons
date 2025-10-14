import React from 'react'
import './AppSolutions.css'

// Day 1 (Introduction to JSX) - Solutions
import IntroSol1 from './components_solutions/1_intro/Example1_HelloWorld.jsx'
import IntroSol2 from './components_solutions/1_intro/Example2_UserGreeting.jsx'
import IntroSol3 from './components_solutions/1_intro/Example3_ProductCard.jsx'

// Day 2 (Props) - Solutions
import PropsSol1 from './components_solutions/2_props/Example1_BasicProps.jsx'
import PropsSol2 from './components_solutions/2_props/Example2_MultipleProps.jsx'
import PropsSol3 from './components_solutions/2_props/Example3_PropsWithDefaults.jsx'
// Day 3 (Events) - Solutions
import EventsSol1 from './components_solutions/3_events/Example1_ButtonClick.jsx'
import EventsSol2 from './components_solutions/3_events/Example2_InputAlert.jsx'
import EventsSol3 from './components_solutions/3_events/Example3_DoubleClick.jsx'

// Day 4 (State) - Solutions
import StateSol1 from './components_solutions/4_state/Example1_Counter.jsx'
import StateSol2 from './components_solutions/4_state/Example2_Toggle.jsx'
import StateSol3 from './components_solutions/4_state/Example3_InputField.jsx'
import ListsSol1 from './components_solutions/5_lists/Example1_SimpleList.jsx'
import ListsSol2 from './components_solutions/5_lists/Example2_ProductList.jsx'
import ListsSol3 from './components_solutions/5_lists/Example3_TwoLists.jsx'
import ListsSol4 from './components_solutions/5_lists/Example4_FilterList.jsx'
import ListsSol5 from './components_solutions/5_lists/Example5_SearchList.jsx'
import ListsSol6 from './components_solutions/5_lists/Example6_SortList.jsx'

// Day 6 (Functions as Props) - Solutions
// Note: Starting from Day 6, each example is in its own directory with Main.jsx
import FunctionsPropsSol1 from './components_solutions/6_functions_as_props/Example1_BlogDelete/Main.jsx'
import FunctionsPropsSol2 from './components_solutions/6_functions_as_props/Example2_ProductLike/Main.jsx'
import FunctionsPropsSol3 from './components_solutions/6_functions_as_props/Example3_TaskToggle/Main.jsx'
import FunctionsPropsSol4 from './components_solutions/6_functions_as_props/Example4_CartQuantity/Main.jsx'

function Section({ day, title, children, topicClass }) {
  return (
    <section className={`topic-section ${topicClass}`}>
      <div className="topic-header">
        <span className="day-label">Day {day}</span>
        <h2>{title}</h2>
        <p>Examples demonstrating core concepts for {title.replace('Day ' + day + ': ', '')}.</p>
      </div>

      {children}
    </section>
  )
}

function Example({ label, children }) {
  return (
    <div className="solution-example">
      <div className="example-header">
        <h3>{label}</h3>
        <span className="example-label">Solution</span>
      </div>
      <div className="example-content">{children}</div>
    </div>
  )
}

function AppSolutions() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="teacher-solutions">
      <header className="solutions-header">
        <h1>Teacher Solutions View - All Examples</h1>
        <p>Scroll through each day to demo examples. Use this view during lectures.</p>
      </header>

      <div className="solutions-content">
        {/* Day 1 */}
        <Section day={1} title="Day 1: Introduction to JSX" topicClass="topic-1">
          <Example label="Example 1: Hello World">
            <IntroSol1 />
          </Example>
          <Example label="Example 2: User Greeting">
            <IntroSol2 />
          </Example>
          <Example label="Example 3: Product Card">
            <IntroSol3 />
          </Example>
        </Section>

        {/* Day 2 */}
        <Section day={2} title="Day 2: Props" topicClass="topic-2">
          <Example label="Example 1: Basic Props">
            <PropsSol1 />
          </Example>
          <Example label="Example 2: Multiple Props">
            <PropsSol2 />
          </Example>
          <Example label="Example 3: Props with Defaults">
            <PropsSol3 />
          </Example>
        </Section>

        {/* Day 3 */}
        <Section day={3} title="Day 3: Events" topicClass="topic-3">
          <Example label="Example 1: Button Click">
            <EventsSol1 />
          </Example>
          <Example label="Example 2: Input + Alert">
            <EventsSol2 />
          </Example>
          <Example label="Example 3: Double Click">
            <EventsSol3 />
          </Example>
        </Section>

        {/* Day 4 */}
        <Section day={4} title="Day 4: State" topicClass="topic-4">
          <Example label="Example 1: Counter">
            <StateSol1 />
          </Example>
          <Example label="Example 2: Toggle Visibility">
            <StateSol2 />
          </Example>
          <Example label="Example 3: Input Field">
            <StateSol3 />
          </Example>
        </Section>

        {/* Day 5 */}
        <Section day={5} title="Day 5: Lists" topicClass="topic-5">
          <Example label="Example 1: Student List">
            <ListsSol1 />
          </Example>
          <Example label="Example 2: Product List">
            <ListsSol2 />
          </Example>
          <Example label="Example 3: Teachers & Students">
            <ListsSol3 />
          </Example>
          <Example label="Example 4: Filter List">
            <ListsSol4 />
          </Example>
          <Example label="Example 5: Search List">
            <ListsSol5 />
          </Example>
          <Example label="Example 6: Sort List">
            <ListsSol6 />
          </Example>
        </Section>

        {/* Day 6 */}
        <Section day={6} title="Day 6: Functions as Props" topicClass="topic-1">
          <Example label="Example 1: Blog Delete">
            <FunctionsPropsSol1 />
          </Example>
          <Example label="Example 2: Product Like">
            <FunctionsPropsSol2 />
          </Example>
          <Example label="Example 3: Task Toggle">
            <FunctionsPropsSol3 />
          </Example>
          <Example label="Example 4: Cart Quantity">
            <FunctionsPropsSol4 />
          </Example>
        </Section>
      </div>

      <button aria-label="Scroll to top" className="scroll-top-btn" onClick={scrollTop}>
        ↑
      </button>
    </div>
  )
}

export default AppSolutions


