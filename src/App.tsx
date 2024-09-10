import './App.css'

function App() {
  return (
    <>
      <div className='container'>
        <div className="todo-list">
          <div className='header'>
            <span>All tasks</span>
          </div>
          <div className='cell'>
            <input type='checkbox' checked={true} />
          </div>
          <div className='cell'>
            <span>Task A</span>
          </div>
          <div className='cell'>
            <input type='checkbox' />
          </div>
          <div className='cell'>
            <span>Task B</span>
          </div>
          <div className='cell'>
            <input type='checkbox' />
          </div>
          <div className='cell'>
            <span>Task C</span>
          </div>
          <div className='cell'>
            <input type='checkbox' />
          </div>
          <div className='cell'>
            <span>Task D</span>
          </div>
        </div>

        <div className="todo-list">
          <div className='header'>
            <span>Done tasks</span>
          </div>
          <div className='cell'>
            <span>Task A</span>
          </div>
          <div className='cell'>
            <input type='checkbox' checked={true} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
