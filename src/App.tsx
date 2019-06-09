import * as React from "react";
import { Repositories } from "./Repositories";

export const App: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [user, setUser] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="button" onClick={() => setUser(value)}>
        submit
      </button>
      {user !== "" && <Repositories login={user} />}
    </div>
  );
};
