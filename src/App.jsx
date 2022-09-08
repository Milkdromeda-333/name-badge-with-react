import { useState } from 'react';
import Badge from "./Badge.jsx";

function App() {
  /*
  TODO:
  []style badges, include having an alternating heading color.
  []requiring 3 charecter minimum to text fields
  */

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phoneNum: "",
    favoriteMeal: "",
    introduction: ""
  });

  // DOC: when the form is submitted, handle submit is called, calling setBadgeArr, adding the info to badgeArr. And {badges} will add it to the dom.
  const [badgeArr, setBadgeArr] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBadgeArr(prevState => [...prevState, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phoneNum: "",
      favoriteMeal: "",
      introduction: ""
    });

  }
  const badges = badgeArr.map((badge, index) => <Badge {...badge} key={index} />);

  return (
    <main className='displayFlexCol'>
      <form className='border' onSubmit={handleSubmit}>
        <div className="inputs--container">

          <div className="firstName displayFlexCol">
            <label htmlFor="firstName">
              First name:
            </label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              id="firstName"
              required
            />
          </div>

          <div className="lastName displayFlexCol">
            <label htmlFor="lastName">
              Last name:
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              id="lastName"
              required
            />
          </div>

          <div className="email displayFlexCol">
            <label htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              id="email"
              required
            />
          </div>

          <div className="placeOfBirth displayFlexCol">
            <label htmlFor="placeOfBirth" className="placeOfBirth">
              Place of birth:
            </label>
            <input
              type="text"
              name="placeOfBirth"
              onChange={handleChange}
              value={formData.placeOfBirth}
              id="placeOfBirth"
              required
            />
          </div>

          <div className="phoneNum displayFlexCol">
            <label htmlFor="phoneNum" className="phoneNum">
              Phone number:
            </label>
            <input
              type="number"
              name="phoneNum"
              onChange={handleChange}
              value={formData.phoneNum}
              id="phoneNum"
              minLength="10"
              maxLength="10"
              required
            />
          </div>

          <div className="favoriteMeal displayFlexCol">
            <label htmlFor="favoriteMeal" className="favoriteMeal">
              Favorite meal of the day?
            </label>
            <select
              name="favoriteMeal"
              onChange={handleChange}
              id="favoriteMeal"
              required
              value={formData.favoriteMeal}
            >
              <option value="">--Choose--</option>
              <option value="breakfast">Breakfast</option>
              <option value="brunch">Brunch</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="midnightMunchies">Midnight munchies</option>
            </select>
          </div>

          <div className="introduction displayFlexCol">
            <label htmlFor="introduction" className="introduction">
              Introduction:
            </label>
            <textarea
              name="introduction"
              onChange={handleChange}
              value={formData.introduction}
              id="introduction"
              required
            />
          </div>

        </div>
        <button>Submit!</button>
      </form>

      {badges}
    </main>
  );
}

export default App;