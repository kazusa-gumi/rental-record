import { useState } from "react";
import { SignUp } from "../../components/login/SignUp/SignUp";
import { login, verifyEmail } from "../../apiClient";

const SignUpPage: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [emailForVerification, setEmailForVerification] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    try {
      const data = await login(email, password);
      if (data.verificationRequired) {
        setEmailForVerification(email);
        // ここでユーザーにメール認証を行ってもらいます。
      } else {
        // 登録が成功した場合の処理を追加
        console.log("Logged in successfully:", data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerification = async (code: string) => {
    try {
      const data = await verifyEmail(emailForVerification, code);
      console.log("Email verified successfully:", data);

      // メール認証が完了した後の処理を追加
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <SignUp />
        {emailForVerification && (
          <div>
            <label htmlFor="verificationCode">Verification code:</label>
            <input
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button onClick={() => handleVerification(verificationCode)}>
              Verify
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default SignUpPage;
