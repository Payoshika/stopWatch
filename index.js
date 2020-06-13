var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// display, start, stop reset bottunを作る。
var Display = function (_React$Component) {
  _inherits(Display, _React$Component);

  function Display(props) {
    _classCallCheck(this, Display);

    var _this = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

    _this.state = { count: 0 };
    _this.timer = null;
    return _this;
  }

  _createClass(Display, [{
    key: "startCount",
    value: function startCount() {
      var _this2 = this;

      if (!this.timer) {
        var startTime = Date.now();
        this.timer = setInterval(function () {
          var stopTime = Date.now();
          var currentCount = stopTime - startTime + _this2.state.count;
          _this2.setState({
            count: currentCount
          });
          startTime = stopTime;
          console.log(currentCount);
        }, 250);
      }
    }
  }, {
    key: "stopCount",
    value: function stopCount() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: "resetCount",
    value: function resetCount() {
      this.setState({
        count: 0
      });
      this.stopCount();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "d-flex flex-column justify-content-center align-items-center my-5 " },
        React.createElement(
          "div",
          { className: "count-area d-flex justify-content-center align-items-center mb-5 border border-secondary rounded" },
          React.createElement(
            "h1",
            { className: "text-center align-middle" },
            " ",
            Math.floor(this.state.count / 1000),
            "s "
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "button",
            { className: "btn btn-lg btn-outline-primary h2 mx-2", onClick: function onClick() {
                _this3.startCount();
              } },
            "Start"
          ),
          React.createElement(
            "button",
            { className: "btn btn-lg btn-outline-danger h2 mx-2", onClick: function onClick() {
                _this3.stopCount();
              } },
            "Stop"
          ),
          React.createElement(
            "button",
            { className: "btn btn-lg btn-outline-warning h2 mx-2", onClick: function onClick() {
                _this3.resetCount();
              } },
            "Reset"
          )
        )
      );
    }
  }]);

  return Display;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Display, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

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