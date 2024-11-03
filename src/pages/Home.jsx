import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <header>
        <h1>Fitness App</h1>
        <nav>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#workouts">Workout Plans</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section class="hero" id="hero">
        <h2>Get Fit, Stay Healthy</h2>
        <p>
          Join us to achieve your fitness goals with personalized plans and
          expert advice.
        </p>
        <button onClick={goToLogin}>Go To Login</button>
      </section>

      <section class="section workout-plans" id="workouts">
        <h2>Our Workout Plans</h2>
        <div class="plan">
          <h3>Beginner Plan</h3>
          <p>Start your fitness journey with our beginner-friendly workouts.</p>
        </div>
        <div class="plan">
          <h3>Intermediate Plan</h3>
          <p>
            Take your workouts to the next level with our intermediate plan.
          </p>
        </div>
        <div class="plan">
          <h3>Advanced Plan</h3>
          <p>
            Challenge yourself with our advanced workouts designed for experts.
          </p>
        </div>
      </section>

      <section class="section testimonials" id="testimonials">
        <h2>What Our Members Say</h2>
        <blockquote>
          <p>"This app transformed my fitness journey. Highly recommended!"</p>
          <footer>- Jane Doe</footer>
        </blockquote>
        <blockquote>
          <p>"Amazing workout plans and supportive community. Five stars!"</p>
          <footer>- John Smith</footer>
        </blockquote>
      </section>

      <footer>
        <p>&copy; 2024 ssmgym. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="https://twitter.com/ssmgym" target="_blank">
            Twitter
          </a>
          ,{" "}
          <a href="https://facebook.com/ssmgym" target="_blank">
            Facebook
          </a>
          , and{" "}
          <a href="https://instagram.com/ssmgym" target="_blank">
            Instagram
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//     return (
//         <div>Home</div>
//     )
// }

// export default Home
