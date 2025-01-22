import { useState } from "react";

function State1() {
  const [count, setCount] = useState(0);
  const [nama, setNama ] = useState("");





    return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>simpel counter</h1>
        <p>current count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            marginRight: "10px",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Tambah
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            marginRight: "10px",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          kurangi
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <label htmlFor="">Nama : </label>
        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
        <p>Nama Kamu : {nama}</p>

      </div>
    </div>
  );
}

export default State1;
