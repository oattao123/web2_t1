// ข้อ 1
import React, { useState } from 'react';

function App() {
  const [diceCount, setDiceCount] = useState('');
  const [diceResults, setDiceResults] = useState([]);
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setDiceCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = [];
    let sum = 0;
    for (let i = 0; i < diceCount; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      results.push(roll);
      sum += roll;
    }
    setDiceResults(results);
    setTotal(sum);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        รับจํานวนเต็มของลูกเต๋า:
          <input type="number" value={diceCount} onChange={handleInputChange} min="1" />
        </label>
        <button type="submit">submit</button>
      </form>
      {diceResults.length > 0 && (
        <div>
          <ul>
            {diceResults.map((result, index) => (
              <li key={index}>ลูกเต๋าลูกที่ {index + 1} ได้ {result}</li>
            ))}
          </ul>
          <p> ผลรวม ของแต้มลูกเต๋า {total}</p>
        </div>
      )}
    </div>
  );
}

export default App;

// ข้อ 2

// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>Welcome to our website! We are thrilled to have you here. Our website is dedicated to providing the best services</p>
    </div>
  );
};

export default Home;


// Services.jsx
import React from 'react';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <p>we pride ourselves on providing top-notch services. Our team of experts is dedicated to offering personalized solutions that meet the unique needs of our clients.</p>
      
      <h2>Comprehensive Consultation</h2>
      <p>Before we start any project, we ensure to understand your requirements and challenges thoroughly. Our consultation service includes [List of Services Offered in Consultation], ensuring we align with your goals and objectives from the start.</p>

    </div>
  );
};

export default Services;



// Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <div>
      <h1>Pricing Page</h1>
      {/* เนื้อหาเพิ่มเติมสำหรับ Pricing */}
    </div>
  );
};

export default Pricing;

// Blog.jsx
import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Welcome to our blog!</p>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Blog;



// Menu.jsx
import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <MenuItem href="/" icon="home" className="menu-item home">Home</MenuItem>
        <MenuItem href="/services" icon="services" className="menu-item services">Services</MenuItem>
        <MenuItem href="/pricing" icon="pricing" className="menu-item pricing">Pricing</MenuItem>
        <MenuItem href="/blog" icon="blog" className="menu-item blog">Blog</MenuItem>
      </ul>
    </nav>
  );
};

export default Menu;

// MenuItem.jsx
import React from 'react';

const MenuItem = ({ href, icon, children }) => {
  return (
    <li className={`menu-item icon-${icon}`}>
      <a href={href}>
        <span className={`icon icon-${icon}`}></span>
        {children}
      </a>
    </li>
  );
};

export default MenuItem;


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // นำเข้า BrowserRouter, Routes และ Route
import Menu from './Menu';
import Home from './Home';
import Services from './Services';
import Pricing from './Pricing';
import Blog from './Blog';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// ข้อ 3
import React, { useState } from 'react';

function App() {
  const [initialValue, setInitialValue] = useState('');
  const [counter, setCounter] = useState(0);

  const handleInputChange = (e) => {
    setInitialValue(e.target.value);
    setCounter(parseInt(e.target.value) || 0);
  };

  const handleIncrement = () => setCounter(counter + 1);
  const handleDouble = () => setCounter(counter * 2);
  const handleDecrement = () => setCounter(counter - 1);
  const handleHalve = () => setCounter(Math.floor(counter / 2));
  const handleReset = () => setCounter(parseInt(initialValue) || 0);

  return (
    <div>
      <input
        type="number"
        value={initialValue}
        onChange={handleInputChange}
        placeholder="Enter initial value"
      />
      <div>
        <button onClick={handleIncrement}>เพิ่มทีละ 1</button>
        <button onClick={handleDouble}>เพิ่มเท่าตัว</button>
        <button onClick={handleDecrement}>ลดทีละ 1</button>
        <button onClick={handleHalve}>หาร 2</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default App;

// ข้อ 4
import React, { useState, useEffect } from 'react';

function App() {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false); // สถานะใหม่เพื่อตรวจสอบว่าตัวจับเวลาเริ่มหรือยัง

  useEffect(() => {
    let interval = null;
    if (timerActive && timeInSeconds > 0) {
      interval = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timerActive && timeInSeconds === 0) {
      clearInterval(interval);
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeInSeconds]);

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  };

  const handleStart = () => {
    setTimerStarted(true);
    setTimeInSeconds(parseInt(minutes) * 60 + parseInt(seconds));
    setTimerActive(true);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={handleMinutesChange}
      />
      <input
        type="number"
        placeholder="Seconds"
        value={seconds}
        onChange={handleSecondsChange}
      />
      <button onClick={handleStart}>Start</button>
      {timerActive ? (
        <p>
          Time : {Math.floor(timeInSeconds / 60)}:{String(timeInSeconds % 60).padStart(2, '0')}
        </p>
      ) : (
        timerStarted && 
        timeInSeconds === 0 && <p>Time out</p>
      )}
    </div>
  );
}

export default App;


