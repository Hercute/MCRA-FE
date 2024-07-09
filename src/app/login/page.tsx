import Link from 'next/link';
import './style.css';

const LoginPage = () => {
  return (
    <form action="" className="loginForm">
      <div className="testLogo">logo</div>
      <input type="text" className="emailInput" />
      <section className="btnSection">
        <button className="continueBtn">계속</button>
        <button className="socialLoginBtn">구글로 로그인</button>
        <Link href="/signup">
          <h5 className="toSignUpPage">회원가입</h5>
        </Link>
      </section>
    </form>
  );
};

export default LoginPage;
