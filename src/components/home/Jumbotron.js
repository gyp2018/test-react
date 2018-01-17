// @flow
import React from "react";

type Props = {
  name: number
};

function square(n: number): number {
  return n * n;
}

const Jumbotron = ({ name }: Props) => {
  const myNumber = square(2);
  return (
    <div>
      <h3>
        Hello {square(name)} {myNumber}!
      </h3>
    </div>
  );
};

export default Jumbotron;
