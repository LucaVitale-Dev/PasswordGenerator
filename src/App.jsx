import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(8);
  const [pass, setPass] = useState("new password");
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
    console.log(value);
  };

  const handleGenerate = () => {
    let newPass = "";
    for (let i = 0; i < value; i++) {
      console.log("sono un carattere");
      const randomChr = Math.floor(Math.random() * charset.length);
      newPass += charset[randomChr];
    }
    setPass(newPass);
  };

  const handleCopy = () => {
    if (pass === "new password") {
      alert("first generate the password");
    } else {
      navigator.clipboard
        .writeText(pass)
        .then(() => {
          alert("Password copied to clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy password: ", error);
        });
    }
  };

  return (
    <div className=" flex justify-center items-center w-screen h-screen">
      <div className=" w-[600px] border-4 p-20 flex flex-col items-center gap-4">
        <h1 className="text-2xl uppercase">password generator</h1>
        <div className=" flex  gap-10">
          <button
            className="h-10 w-40 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white hover:bg-white hover:text-green-500 "
            onClick={handleGenerate}
          >
            Generate
          </button>
          <input
            onChange={handleChange}
            type="number"
            value={value}
            min={8}
            max={18}
          />
        </div>
        <div>{pass}</div>
        <button
          className="h-10 w-40 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white hover:bg-white hover:text-green-500"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;
