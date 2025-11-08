import React from 'react'
import './AppSolutions.css'

// Day 1 (Introduction to JSX) - Solutions
import IntroSol1 from './components_solutions/1_intro/Example1_HelloWorld.jsx'
import IntroSol2 from './components_solutions/1_intro/Example2_UserGreeting.jsx'
import IntroSol3 from './components_solutions/1_intro/Example3_ProductCard.jsx'
import IntroSol4 from './components_solutions/1_intro/Example4_InlineExpressions.jsx'
import IntroSol5 from './components_solutions/1_intro/Example5_ConditionalRender.jsx'
import IntroSol6 from './components_solutions/1_intro/Example6_ListRenderingIntro.jsx'
import IntroSol7 from './components_solutions/1_intro/Example7_AttributesAndStyles.jsx'

// Day 2 (Props) - Solutions
import PropsSol1 from './components_solutions/2_props/Example1_BasicProps.jsx'
import PropsSol2 from './components_solutions/2_props/Example2_MultipleProps.jsx'
import PropsSol3 from './components_solutions/2_props/Example3_PropsWithDefaults.jsx'
import PropsSol4 from './components_solutions/2_props/Example4_ObjectProps.jsx'
import PropsSol5 from './components_solutions/2_props/Example5_ChildrenProp.jsx'
import PropsSol6 from './components_solutions/2_props/Example6_BooleanProps.jsx'
import PropsSol7 from './components_solutions/2_props/Example7_ArrayProps.jsx'
// Day 3 (Events) - Solutions
import EventsSol1 from './components_solutions/3_events/Example1_ButtonClick.jsx'
import EventsSol2 from './components_solutions/3_events/Example2_InputAlert.jsx'
import EventsSol3 from './components_solutions/3_events/Example3_DoubleClick.jsx'
import EventsSol4 from './components_solutions/3_events/Example4_MouseOver.jsx'
import EventsSol5 from './components_solutions/3_events/Example5_FormSubmitPrevent.jsx'
import EventsSol6 from './components_solutions/3_events/Example6_KeyDown.jsx'
import EventsSol7 from './components_solutions/3_events/Example7_FocusBlur.jsx'

// Day 4 (State) - Solutions
import StateSol1 from './components_solutions/4_state/Example1_Counter.jsx'
import StateSol2 from './components_solutions/4_state/Example2_Toggle.jsx'
import StateSol3 from './components_solutions/4_state/Example3_InputField.jsx'
import StateSol4 from './components_solutions/4_state/Example4_StepCounter.jsx'
import StateSol5 from './components_solutions/4_state/Example5_ShowHideText.jsx'
import StateSol6 from './components_solutions/4_state/Example6_Checklist.jsx'
import StateSol7 from './components_solutions/4_state/Example7_CharacterCount.jsx'
import ListsSol1 from './components_solutions/5_lists/Example1_SimpleList.jsx'
import ListsSol2 from './components_solutions/5_lists/Example2_ProductList.jsx'
import ListsSol3 from './components_solutions/5_lists/Example3_TwoLists.jsx'
import ListsSol4 from './components_solutions/5_lists/Example4_FilterList.jsx'
import ListsSol5 from './components_solutions/5_lists/Example5_SearchList.jsx'
import ListsSol6 from './components_solutions/5_lists/Example6_SortList.jsx'
import ListsSol7 from './components_solutions/5_lists/Example7_GroupBy.jsx'
import ListsSol8 from './components_solutions/5_lists/Example8_Paginated.jsx'
import ListsSol9 from './components_solutions/5_lists/Example9_UniqueKeys.jsx'
import ListsSol10 from './components_solutions/5_lists/Example10_NestedList.jsx'

// Day 6 (Functions as Props) - Solutions
// Note: Starting from Day 6, each example is in its own directory with Main.jsx
import FunctionsPropsSol1 from './components_solutions/6_functions_as_props/Example1_BlogDelete/Main.jsx'
import FunctionsPropsSol2 from './components_solutions/6_functions_as_props/Example2_ProductLike/Main.jsx'
import FunctionsPropsSol3 from './components_solutions/6_functions_as_props/Example3_TaskToggle/Main.jsx'
import FunctionsPropsSol4 from './components_solutions/6_functions_as_props/Example4_CartQuantity/Main.jsx'
import FunctionsPropsSol5 from './components_solutions/6_functions_as_props/Example5_SelectableUser/Main.jsx'
import FunctionsPropsSol6 from './components_solutions/6_functions_as_props/Example6_VoteSystem/Main.jsx'
import FunctionsPropsSol7 from './components_solutions/6_functions_as_props/Example7_TodoDeleteAll/Main.jsx'
import FunctionsPropsSol8 from './components_solutions/6_functions_as_props/Example8_RatingStars/Main.jsx'

// Day 7 (useEffect) - Solutions
import UseEffectSol4 from './components_solutions/7_useEffect/Example4_FilterStudentsByMarks/Main.jsx'
import UseEffectSol5 from './components_solutions/7_useEffect/Example5_FilterProductsByPrice/Main.jsx'
import UseEffectSol6 from './components_solutions/7_useEffect/Example6_FilterMoviesByYear/Main.jsx'
import UseEffectSol7 from './components_solutions/7_useEffect/Example7_FilterItemsByCategory/Main.jsx'
import UseEffectSol8 from './components_solutions/7_useEffect/Example8_FetchNewsArticles/Main.jsx'
import UseEffectSol9 from './components_solutions/7_useEffect/Example9_NasaApod/Main.jsx'
import UseEffectSol10 from './components_solutions/7_useEffect/Example10_NasaImageSearch/Main.jsx'

const daySections = [
  {
    day: 1,
    title: 'Day 1: Introduction to JSX',
    topicClass: 'topic-1',
    examples: [
      { label: 'Example 1: Hello World', component: IntroSol1 },
      { label: 'Example 2: User Greeting', component: IntroSol2 },
      { label: 'Example 3: Product Card', component: IntroSol3 },
      { label: 'Example 4: Inline Expressions', component: IntroSol4 },
      { label: 'Example 5: Conditional Render', component: IntroSol5 },
      { label: 'Example 6: List Rendering Intro', component: IntroSol6 },
      { label: 'Example 7: Attributes and Styles', component: IntroSol7 },
    ],
  },
  {
    day: 2,
    title: 'Day 2: Props',
    topicClass: 'topic-2',
    examples: [
      { label: 'Example 1: Basic Props', component: PropsSol1 },
      { label: 'Example 2: Multiple Props', component: PropsSol2 },
      { label: 'Example 3: Props with Defaults', component: PropsSol3 },
      { label: 'Example 4: Object Props', component: PropsSol4 },
      { label: 'Example 5: Children Prop', component: PropsSol5 },
      { label: 'Example 6: Boolean Props', component: PropsSol6 },
      { label: 'Example 7: Array Props', component: PropsSol7 },
    ],
  },
  {
    day: 3,
    title: 'Day 3: Events',
    topicClass: 'topic-3',
    examples: [
      { label: 'Example 1: Button Click', component: EventsSol1 },
      { label: 'Example 2: Input + Alert', component: EventsSol2 },
      { label: 'Example 3: Double Click', component: EventsSol3 },
      { label: 'Example 4: Mouse Over/Out', component: EventsSol4 },
      { label: 'Example 5: Form Prevent Default', component: EventsSol5 },
      { label: 'Example 6: Key Down', component: EventsSol6 },
      { label: 'Example 7: Focus and Blur', component: EventsSol7 },
    ],
  },
  {
    day: 4,
    title: 'Day 4: State',
    topicClass: 'topic-4',
    examples: [
      { label: 'Example 1: Counter', component: StateSol1 },
      { label: 'Example 2: Toggle Visibility', component: StateSol2 },
      { label: 'Example 3: Input Field', component: StateSol3 },
      { label: 'Example 4: Step Counter', component: StateSol4 },
      { label: 'Example 5: Disable Submit on Empty', component: StateSol5 },
      { label: 'Example 6: Checklist', component: StateSol6 },
      { label: 'Example 7: Character Count', component: StateSol7 },
    ],
  },
  {
    day: 5,
    title: 'Day 5: Lists',
    topicClass: 'topic-5',
    examples: [
      { label: 'Example 1: Student List', component: ListsSol1 },
      { label: 'Example 2: Product List', component: ListsSol2 },
      { label: 'Example 3: Teachers & Students', component: ListsSol3 },
      { label: 'Example 4: Filter List', component: ListsSol4 },
      { label: 'Example 5: Search List', component: ListsSol5 },
      { label: 'Example 6: Sort List', component: ListsSol6 },
      { label: 'Example 7: Group By Category', component: ListsSol7 },
      { label: 'Example 8: Paginated List', component: ListsSol8 },
      { label: 'Example 9: Unique Keys', component: ListsSol9 },
      { label: 'Example 10: Nested List', component: ListsSol10 },
    ],
  },
  {
    day: 6,
    title: 'Day 6: Functions as Props',
    topicClass: 'topic-1',
    examples: [
      { label: 'Example 1: Blog Delete', component: FunctionsPropsSol1 },
      { label: 'Example 2: Product Like', component: FunctionsPropsSol2 },
      { label: 'Example 3: Task Toggle', component: FunctionsPropsSol3 },
      { label: 'Example 4: Cart Quantity', component: FunctionsPropsSol4 },
      { label: 'Example 5: Selectable User', component: FunctionsPropsSol5 },
      { label: 'Example 6: Vote System', component: FunctionsPropsSol6 },
      { label: 'Example 7: Todo Delete All', component: FunctionsPropsSol7 },
      { label: 'Example 8: Rating Stars', component: FunctionsPropsSol8 },
    ],
  },
  {
    day: 7,
    title: 'Day 7: useEffect',
    topicClass: 'topic-2',
    examples: [
      { label: 'Example 4: Filter Students by Marks', component: UseEffectSol4 },
      { label: 'Example 5: Filter Products by Price', component: UseEffectSol5 },
      { label: 'Example 6: Filter Movies by Year', component: UseEffectSol6 },
      { label: 'Example 7: Filter Items by Category', component: UseEffectSol7 },
      { label: 'Example 8: Fetch News Articles (API)', component: UseEffectSol8 },
      { label: 'Example 9: NASA APOD Viewer', component: UseEffectSol9 },
      { label: 'Example 10: NASA Images Search', component: UseEffectSol10 },
    ],
  },
]

function Section({ day, title, topicClass, examples }) {
  const orderedExamples = [...examples].reverse()

  return (
    <section className={`topic-section ${topicClass}`}>
      <div className="topic-header">
        <span className="day-label">Day {day}</span>
        <h2>{title}</h2>
        <p>Examples demonstrating core concepts for {title.replace('Day ' + day + ': ', '')}.</p>
      </div>

      {orderedExamples.map(({ label, component: Component }) => (
        <Example key={label} label={label}>
          <Component />
        </Example>
      ))}
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
        {[...daySections].reverse().map((section) => (
          <Section
            key={section.day}
            day={section.day}
            title={section.title}
            topicClass={section.topicClass}
            examples={section.examples}
          />
        ))}
      </div>

      <button aria-label="Scroll to top" className="scroll-top-btn" onClick={scrollTop}>
        ↑
      </button>
    </div>
  )
}

export default AppSolutions


