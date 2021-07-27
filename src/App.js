import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div id="root">
        <div class="app">
          <div class="display">
            <div>{this.state.count}</div>
          </div>
          <div class="button-panel">
            <div>
              <div class="button">
                <button value="AC" onClick={this.buttonClearAction}>
                  AC
                </button>
              </div>
              <div class="button">
                <button onClick={() => this.buttonOpAction("+/-")}>+/-</button>
              </div>
              <div class="button">
                <button onClick={() => this.buttonOpAction("%")}>%</button>
              </div>
              <div class="button orange">
                <button onClick={() => this.buttonOpAction("÷")}>÷</button>
              </div>
            </div>
            <div>
              <div class="button">
                <button value="7" onClick={() => this.buttonNumberAction(7)}>
                  7
                </button>
              </div>
              <div class="button">
                <button value="8" onClick={() => this.buttonNumberAction(8)}>
                  8
                </button>
              </div>
              <div class="button">
                <button value="9" onClick={() => this.buttonNumberAction(9)}>
                  9
                </button>
              </div>
              <div class="button orange">
                <button onClick={() => this.buttonOpAction("x")}>x</button>
              </div>
            </div>
            <div>
              <div class="button">
                <button value="4" onClick={() => this.buttonNumberAction(4)}>
                  4
                </button>
              </div>
              <div class="button">
                <button value="5" onClick={() => this.buttonNumberAction(5)}>
                  5
                </button>
              </div>
              <div class="button">
                <button value="6" onClick={() => this.buttonNumberAction(6)}>
                  6
                </button>
              </div>
              <div class="button orange">
                <button onClick={() => this.buttonOpAction("-")}>-</button>
              </div>
            </div>
            <div>
              <div class="button">
                <button value="1" onClick={() => this.buttonNumberAction(1)}>
                  1
                </button>
              </div>
              <div class="button">
                <button value="2" onClick={() => this.buttonNumberAction(2)}>
                  2
                </button>
              </div>
              <div class="button">
                <button value="3" onClick={() => this.buttonNumberAction(3)}>
                  3
                </button>
              </div>
              <div class="button orange">
                <button onClick={() => this.buttonOpAction("+")}>+</button>
              </div>
            </div>
            <div>
              <div class="button  wide">
                <button value="3" onClick={() => this.buttonNumberAction(0)}>
                  0
                </button>
              </div>
              <div class="button">
                <button onClick={this.buttonDecimalAction}>.</button>
              </div>
              <div class="button orange">
                <button onClick={() => this.buttonOpAction("=")}> = </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  buttonNumberAction = (args) => {
    if (this.state.count) {
      this.setState((state) => ({
        count: "" + this.state.count + args,
      }));
    } else {
      this.setState((state) => ({
        count: args,
      }));
    }
  };

  buttonClearAction = () => {
    this.setState((state) => ({
      count: 0,
    }));
  };

  buttonDecimalAction = () => {
    console.log(this.state.count);
    let tmp = this.state.count + "";
    if (!tmp.includes(".")) {
      this.setState((state) => ({
        count: this.state.count + ".",
      }));
    }
  };

  buttonOpAction = (op) => {
    console.log(this.state.count);

    switch (op) {
      case "+":
        var b = this.state.count[this.state.count.length-1]
        if (b === '+' || b === '-' || b === '*' || b === '/' || b === '%') {
           return 
          }; 
        break;
      case "-":
        var b = this.state.count[this.state.count.length-1]
        if (b === '+' || b === '-' || b === '*' || b === '/' || b === '%') {
           return 
          }; 
        break;
      case "x":
        var b = this.state.count[this.state.count.length-1]
        if (b === '+' || b === '-' || b === '*' || b === '/' || b === '%') {
           return 
          }; 
        break;
      case "÷":
        var b = this.state.count[this.state.count.length-1]
        if (b === '+' || b === '-' || b === '*' || b === '/' || b === '%') {
           return 
          }; 
        this.setState((state) => ({
          count: this.state.count + "/",
        }));
        return;
      case "%":
        var b = this.state.count[this.state.count.length-1]
        if (b === '+' || b === '-' || b === '*' || b === '/' || b === '%') {
           return 
          }; 
        break;
      case "=":
        this.setState((state) => ({
          count: eval(this.state.count),
        }));
        return;
      case "+/-":
        this.setState((state) => ({
          count: -(this.state.count),
        }));
        return;
    }

    this.setState((state) => ({
      count: this.state.count + op,
    }));
  };
}

export default App;
