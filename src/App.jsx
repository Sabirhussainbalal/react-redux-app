import React, { useEffect, useState } from 'react';
import './index.css'; // Optional CSS import
import { useSelector, useDispatch } from 'react-redux'
import { incrementLike, incrementDislike } from './redux/counter/like'
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';





function App() {
    const [employees, setEmployees] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch employee data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Add a like, dislike, and follow state for each employee
        const updatedEmployees = data.employees.map((employee) => ({
          ...employee,
          likes: 0, // initial likes
          dislikes: 0, // initial dislikes
          isFollowing: false, // initial follow state
        }));
        setEmployees(updatedEmployees);
      })
      .catch((error) => console.error('Error loading the JSON data:', error));
  }, []);

  const handleLike = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].likes += 1; // Update only the targeted employee's likes
    setEmployees(updatedEmployees);
  };

  const handleDislike = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].dislikes += 1; // Update only the targeted employee's dislikes
    setEmployees(updatedEmployees);
  };

  const toggleFollow = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].isFollowing = !updatedEmployees[index].isFollowing; // Toggle follow for the targeted employee
    setEmployees(updatedEmployees);
  };

    return (
        <div className="app">
            <div className="employee-container">
                {employees.map((employee, index) => (

<div
key={index} // Preferably use a unique id if available
className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
>
<div className="rounded-t-lg h-32 overflow-hidden">
    <img className="object-cover object-top w-full" src={employee.backgroundImage} alt="link has been expired...sry..." />
</div>
<div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
    <img className="object-cover object-center h-32" src={employee.avatar} alt="link has been expired...sry..." />
</div>
<div className="text-center mt-2">
    <h2 className="font-semibold">{employee.name}</h2>
    <p className="text-gray-500">
        <ul className="list-disc pl-5 space-y-2">
            <li className="italic">Gender: <span className="text-blue-500">{employee.gender}</span></li>
            <li className="italic">Age: <span className="text-blue-500">{employee.age}</span></li>
            <li className="italic">From: <span className="text-blue-500">{employee.city}</span></li>
           
       
       
        </ul>
    </p>
</div>
<ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
    <li className="flex flex-col items-center justify-around">
         {/* Like Button */}
         <button onClick={() => handleLike(index)}>
                  <sup>
                    <span>{employee.likes}</span>
                  </sup>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/></svg>
                </button>
   
    </li>
    <li className="flex flex-col items-center justify-between">

      {/* Dislike Button */}
      <button onClick={() => handleDislike(index)}>
                  <sup>
                    <span>{employee.dislikes}</span>
                  </sup>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"/></svg>   
                </button>
    {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >

  

        </button> */}
    </li>
    
</ul>
<div className="p-4 border-t mx-8 mt-2">
<button
                onClick={() => toggleFollow(index)}
                className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
              >
                {employee.isFollowing ? 'Unfollow' : 'Follow'}
              </button>
</div>
</div>
                ))}
            </div>
        </div>
    );
}

export default App;
