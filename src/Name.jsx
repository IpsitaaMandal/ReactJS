import React from 'react';

const Name = () => {
  return( 
  <div className="name">
					<div class="input">
						<label for="fname">First Name</label>
						<input type="text" placeholder="first name" /> 
					</div>
					<div className="input">
						<label for="lname">Last Name</label>
						<input type="text" placeholder="second name" />
					</div>
    </div>
);
};

export default Name;