// import styled from 'styled-components';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';
import '../index.css'; 
// Optional: Use styled-components for specific custom styling


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container mx-auto page" >
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          Focus on your career while we handle tracking your job applications, helping you stay organized and succeed effortlessly.<br></br>
          <span class="block mt-4 text-lg font-semibold text-primary-400">
            Keep working hard and harder.
          </span>

          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;