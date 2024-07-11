import Image from 'next/image';
import './style.css';
import profile1 from '@/assets/profile/profile1.png';
import profile2 from '@/assets/profile/profile2.png';
import profile3 from '@/assets/profile/profile3.png';
import profile4 from '@/assets/profile/profile4.png';
import profile5 from '@/assets/profile/profile5.png';

const SignupPage = () => {
  return (
    <article className="joinArticle">
      <form className="joinForm">
        <div>
          <label htmlFor="">아이디(이메일)</label>
          <div>
            <input type="text" placeholder="이메일 주소" />
            <button>발송</button>
          </div>
        </div>
        <div>
          <label htmlFor="">인증번호</label>
          <div>
            <input type="text" placeholder="메일로 받은 인증번호" />
            <button>인증하기</button>
          </div>
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="text" placeholder="6~15글자(영, 숫자 포함)" />
        </div>
        <div>
          <label htmlFor="">비밀번호 확인</label>
          <input type="text" placeholder="비밀번호 확인" />
        </div>
        <div>
          <label htmlFor="">닉네임</label>
          <input type="text" placeholder="3~10글자" />
        </div>
        <div>
          <section>
            <Image src={profile1} alt="프로필 이미지" width={30} />
            <Image src={profile2} alt="프로필 이미지" width={30} />
            <Image src={profile3} alt="프로필 이미지" width={30} />
            <Image src={profile4} alt="프로필 이미지" width={30} />
            <Image src={profile5} alt="프로필 이미지" width={30} />
          </section>
        </div>
        <button className="joinBtn">회원가입</button>
      </form>
    </article>
  );
};

export default SignupPage;
