import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' }); // 입력 폼 상태
  const navigate = useNavigate(); // 페이지 이동 함수

  // 입력값 변경 시 상태 업데이트
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 로그인 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include', // 세션 쿠키 포함
      });

      localStorage.removeItem("myPage:userInfo"); // 기존 캐시 삭제 (다른 계정 대비)

      const data = await res.json();
      console.log("서버 응답:", data);

      if (data.success) {
        // 세션 유효성 확인
        const sessionCheck = await fetch('http://localhost:4000/user/me', {
          credentials: 'include'
        });

        if (sessionCheck.status === 200) {
          console.log("세션 확인 완료, 홈으로 이동");
          navigate('/'); // 홈으로 이동
        } else {
          alert("세션 설정에 실패했습니다.");
        }
      } else {
        alert(data.message || '로그인에 실패했습니다.');
      }
    } catch (err) {
      alert('로그인 중 오류가 발생했습니다.');
      console.error(err);
    }
  };

  return (
    <div style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '80px',
        boxSizing: 'border-box'
    }}>
      {/* 상단 헤더 */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#121826',
        color: '#b3e5fc',
        padding: '18px 40px',
        fontSize: '18px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        zIndex: 1000,
        boxShadow: '0 2px 10px #00e5ff55',
      }}>
        로그인
        <button
          onClick={() => navigate('/')} // 홈으로 이동 버튼
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#afefff',
            color: '#0d1117',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 0 10px #00e5ff',
          }}
        >
          홈으로
        </button>
      </header>

      {/* 로그인 폼 컨테이너 */}
      <div
        style={{
          width: '90vw',
          maxWidth: '500px',
          margin: '0 auto',
          padding: '32px',
          boxSizing: 'border-box',
          border: '2px solid #00e5ff',
          borderRadius: '12px',
          backgroundColor: '#1a1e2a',
          boxShadow: '0 0 12px rgba(0, 229, 255, 0.25)',
          color: '#e0f7fa',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#afefff' }}>로그인</h2>

        {/* 로그인 입력 폼 */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[{ label: '이메일', name: 'email' }, { label: '비밀번호', name: 'password' }].map(({ label, name }) => (
            <div key={name}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#b3e5fc' }}>{label}</label>
              <input
                type={name === 'password' ? 'password' : 'text'} // 비밀번호는 숨김 처리
                name={name}
                value={form[name]}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #00e5ff55',
                  backgroundColor: '#0d1117',
                  color: '#e0f7fa',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}

          {/* 로그인 버튼 */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#afefff',
              color: '#0d1117',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
              boxShadow: '0 0 10px #00e5ff',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            로그인
          </button>
        </form>

        {/* 회원가입 이동 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', fontSize: '14px', color: '#b3e5fc' }}>
          <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/signup')}>회원가입</span>
        </div>
      </div>
    </div>
  );
}
