import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./Button"
import Heading from "./Heading";
import Name from "./Name";
import Gender from "./Gender"
import City from "./City"
import Country from "./Country"

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="content">
	<div className="registration_form">
<Heading />
		<form>
			<div className="form_content">
<Name />
				<div className="input">
					<label for="email">Email Address</label>
					<input type="text" placeholder="abc@gmail.com" />
				</div>
<Gender/>
<City/>
<Country/>
<Button />

        </div>
		</form>
	</div>
  </div>
  </>
  );
};

export default App;
