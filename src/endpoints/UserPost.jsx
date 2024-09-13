import { useState } from "react";

export default function UserPost({ handleSubmit }) {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        type="text"
        value={username}
        onChange={({ target }) => setUserame(target.value)}
      />
      <input
        placeholder="password"
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
    </form>
  );
}
