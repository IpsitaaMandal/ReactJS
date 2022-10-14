import React from 'react'

const Gender = () => {
  return (
    <div className="input">
					<label>Gender</label>
					<ul>
						<li>
							<label class="radio_type">
								<input type="radio" name="gender" value="male" class="input_radio" />
								<span>Male</span>
							</label>
						</li>
						<li>
							<label class="radio_type">
								<input type="radio" name="gender" value="female" class="input_radio" />
								<span>Female</span>
							</label>
						</li>
						<li>
							<label className="radio_type">
								<input type="radio" name="gender" value="transgender" class="input_radio" />
								<span>Transgender</span>
							</label>
						</li>
					</ul>
				</div>
  )
}

export default Gender