export function increment(nbr) {
  return {
    type: "INCREMENT",
    payload: nbr,
  };
}

export function decrement(nbr) {
    return {
      type: "DECREMENT",
      payload: nbr,
    };
  }
  export function multiply(nbr) {
    return {
      type: "MULTIPLY",
      payload: nbr,
    };
  }
  export function divide(nbr) {
    return {
      type: "DIVIDE",
      payload: nbr,
    };
  }