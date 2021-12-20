import React from "react";
import { path } from "./imagepath";
const Context = React.createContext();
const Provider = Context.Provider;
export const Consumer = Context.Consumer;

class ThemProvider extends React.Component {
  state = {
    button: {
      variant: "primary",
    },
    style: {
      backgroundColor: "white",
      color: "red",
    },
    card: {
      backgroundColor: "lightsteelblue",
      color: "red",
      width: "24rem",
      image: path[0].one,
    },
  };

  setColor = (name) => {
    if (name === "BW") {
      this.setState({
        button: {
          variant: "secondary",
        },
        style: {
          backgroundColor: "black",
          color: "white",
        },
        card: {
          backgroundColor: "ghostwhite",
          color: "black",
          width: "24rem",
          image: path[0].bw,
        },
      });
    } else if (name === "RW") {
      this.setState({
        button: {
          variant: "danger",
        },
        style: {
          backgroundColor: "white",
          color: "red",
        },
        card: {
          backgroundColor: "ghostwhite",
          color: "red",
          width: "24rem",
          image: path[0].rw,
        },
      });
    } else if (name === "RB") {
      this.setState({
        button: {
          variant: "danger",
        },
        style: {
          backgroundColor: "black",
          color: "red",
        },
        card: {
          backgroundColor: "lightblue",
          color: "red",
          width: "24rem",
          image: path[0].rb,
        },
      });
    } else if (name === "BG") {
      this.setState({
        button: {
          variant: "primary",
        },
        style: {
          backgroundColor: "greenyellow",
          color: "blue",
        },
        card: {
          backgroundColor: "palegreen",
          color: "blue",
          width: "24rem",
          image: path[0].bg,
        },
      });
    } else {
      this.setState({
        button: {
          variant: "primary",
        },
        style: {
          backgroundColor: "white",
          color: "red",
        },
        card: {
          backgroundColor: "lightsteelblue",
          color: "red",
          width: "24rem",
          image: path[0].one,
        },
      });
    }
  };

  render() {
    return (
      <Provider
        value={{
          button: this.state.button,
          style: this.state.style,
          card: this.state.card,
          setColor: this.setColor,
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default ThemProvider;
