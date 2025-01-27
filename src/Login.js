import React,{useState} from 'react';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './Firebase';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate =  useNavigate();

    // Sign In Function
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/'); // Navigate to the homepage
            })
            .catch((error) => alert(error.message));
    };

    // Register Function
    const Register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) navigate('/'); // Navigate to the homepage
            })
            .catch((error) => alert(error.message));
    };

    return(
        <div className='login'>
            <Link to="/" style={{textDecoration: "none"}}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large"/>
                    <h2 className="login__logoTitle">eCommerce</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>By Signing-in you agree to the eCommerce website Conditions of use & sale. Please see your privacy notice, our cookies notice and our Interest-Based Ads Notice.</p>

                <button className='login__registerButton' onClick={Register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;