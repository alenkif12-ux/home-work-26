import { handleButtonClick, trackMousePosition, setupEventDelegation } from './main-5.js';

handleButtonClick('myButton', 'Button clicked!');


console.log(trackMousePosition());

function createTestList() {
document.body.insertAdjacentHTML('beforeend', `
    <ul id="testList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `);
}
createTestList();

setupEventDelegation('#testList');