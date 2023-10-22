class Button {
  constructor(type, color, height, width) {
    this.type = type;
    this.color = color;
    this.height = height;
    this.width = width;
    this.props = `type: ${this.type}, color: ${this.color}, height: ${this.height}mm, width: ${this.width}mm.`;
  }
  onClick() {
    console.log(`Button properties: ${this.props}`);
  }
}

let greenButton = new Button("button", "green", 6, 3);
greenButton.onClick();

let redButton = new Button("button", "red", 10, 5);

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
