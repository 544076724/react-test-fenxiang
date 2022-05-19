import logo from './logo.svg'
import './App.css'
import { PureComponent, Component, memo,lazy,Suspense } from 'react'
// function App() {
//   return (
//     <div className="App">
  
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class Test extends PureComponent {  // 浅比较
//   render () {
//     console.log('渲染')
//     const { num, updateNum } = this.props
//     return (
//       <div>
//         <button onClick={updateNum}> 添加</button>
//         {num}
//       </div>
//     )
//   }
// }
const Test1 = lazy(() => import('./test.js'))
const Test =  memo(function (props) {
  const { num, updateNum } = props
  console.log('更新')
  return (
    <div>
      <button onClick={updateNum}> 添加</button>
      {num}
    </div>
  )
})
class App extends Component {
  state = { num: 1, newnum: 1 }

  updateNum = () => {
    this.setState(state => ({ num: ++state.num }))
  }
  updateNewNum = () => {
    this.setState(state => ({ newnum: ++state.newnum }))
  }
  render () {
    return (
      <div className='App'>
      <Suspense fallback={<div>loading...</div>}>
        <Test1></Test1>
      </Suspense>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {this.state.newnum}
          <button onClick={this.updateNewNum}>变化newNum</button>
          <Test num={this.state.num} updateNum={this.updateNum}></Test>
        </header>
      </div>
    )
  }
}

export default App
