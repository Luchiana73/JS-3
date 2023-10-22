class Button {
  constructor(type, color, height, width) {
    this.type = type;
    this.color = color;
    this.height = height;
    this.width = width;
  }
  onClick(button) {
    console.log(button);
  }
}

let greenButton = new Button("button", "green", 6, 3);
greenButton.onClick(greenButton);

let redButton = new Button("button", "red", 10, 5);
greenButton.onClick(redButton);

function testButton(button) {
  if (
    button.type === "button" &&
    button.color === "green" &&
    button.height === 6 &&
    button.width === 3
  ) {
    console.log("Properties of this button match the specified ones");
  } else {
    console.log("These properties do not match the specified props");
  }
}

testButton(greenButton);
testButton(redButton);
