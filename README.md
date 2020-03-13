##Flip Div component
This is a component to be used like a commun div but, you can include 2 inner components to be showed like a
flip card, with front and back faces.

##Exemple - how to use

First install the component:

`npm i react-flip-div --save`

Secondly import it in your js*

```javascript
//includes 
import FlipDiv, {Front, Back, flip, unflip} from 'react-flip-div';

//in your jsx section

  <FlipDiv>
    <Front>
      You can include any element here
    </Front>
    <Back>
      You can include any element here as well
      
    </Back>
  </FlipDiv>
        
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.
