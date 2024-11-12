import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !nickname) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        nickname: nickname || "",
        createdAt: new Date(),
      });

      if (onRegisterSuccess) {
        onRegisterSuccess(user);
      }

      setLoading(false);
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Nickname"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSignUp}
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUp;
