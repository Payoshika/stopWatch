// display, start, stop reset bottunを作る。
class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = { count: 0};
    this.timer = null;
  }

  startCount(){
    if(!this.timer){
      let startTime =Date.now();
      this.timer = setInterval(()=>{
        const stopTime = Date.now();
        const currentCount = stopTime - startTime + this.state.count;
        this.setState({
          count : currentCount
        })
        startTime = stopTime;
        console.log(currentCount);
      }, 250)
    }
  }

  stopCount(){
    clearInterval(this.timer);
    this.timer = null
  }

  resetCount(){
    this.setState({
      count: 0
    })
    this.stopCount()
  }

  render(){
    return(
      <div className="d-flex flex-column justify-content-center align-items-center my-5 ">
        <div className="count-area d-flex justify-content-center align-items-center mb-5 border border-secondary rounded">
          <h1 className="text-center align-middle"> {Math.floor(this.state.count /1000)}s </h1>
        </div>
        <div>
          <button className="btn btn-lg btn-outline-primary h2 mx-2" onClick = {() =>{this.startCount()}}>Start</button>
          <button className="btn btn-lg btn-outline-danger h2 mx-2" onClick = {() =>{this.stopCount()}}>Stop</button>
          <button className="btn btn-lg btn-outline-warning h2 mx-2" onClick = {() =>{this.resetCount()}}>Reset</button>
        </div>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <Display />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { count: 0};
//   }
//     addCount (number) {
//       this.setState({
//         count: this.state.count + number
//       })
//     }
//   render(){
//     return (
//       <div>
//         <h2>Count {this.state.count}</h2>
//         <button onClick={() => {this.addCount(1)}}> +1 </button>
//         <button onClick={() => {this.addCount(2)}}> +2 </button>
//         <button onClick={() => {this.addCount(3)}}> +3 </button>
//         <button onClick={() => {this.addCount(4)}}> +4 </button>
//       </div>
//     )
//   }
// }
//
// class Button extends React.Component {
//   handleClick(){
//     console.log("this is ", this);
//   }
//   render(){
//     return(
//       <button className="mt-3 mr-3" onClick = {(e) => {
//         this.handleClick(e)}}>
//         Click me
//         </button>
//     )
//   }
// }
//
// const Link = () =>{
//   const handleClick =(e) => {
//     e.preventDefault();
//     console.log("link clicked");
//   }
//   return (
//     <a href="altcademy.com" onClick={handleClick}>Click me
//     </a>
//   )
// }
//
// class ScrollLogger extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       scrollY: 0
//     }
//     this.updateScrollY = this.updateScrollY.bind(this);
//   }
//   updateScrollY(e) {
//     this.setState({
//       scrollY: Math.round(window.scrollY)
//     })
//   }
//
//   componentDidMount(){
//     window.addEventListener("scroll", this.updateScrollY)
//   }
//
//   componentWillUnmount (){
//     window.removeEventListener("scroll", this.updateScrollY)
//   }
//
// render(){
//   return (
//     <div className="position-fixed bg-white p-3" style={{right: 0, top: 0}}>
//       <p>Scrolled: {this.state.scrollY}px </p>
//     </div>
//   )
// }
// }
//
// const App = () => {
//   return (
//     <React.Fragment>
//       <Counter />
//       <Button />
//       <Link />
//       <ScrollLogger />
//     </React.Fragment>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )
//


//
// class Clock extends React.Component  {
//   constructor (props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//       location: "Osaka",
//     };
//   }
//
//   componentDidMount(){
//     var timer = setInterval(()=>{
//       this.updateTime(), 1000
//     })
//   }
//
//   componentWillUnmount(){
//     clearInterval(this.timer);
//   }
//
//   updateTime(){
//     this.setState({
//       date: new Date()
//     });
//   }
//
//   render () {
//     return (
//       <div>
//         <h2>The time in {this.state.location} now is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }
//
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById("root")
//   );
