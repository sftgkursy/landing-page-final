import React from "react";

const App = () => {
  return (
    <div>
      {/* header----------------------------------------------- */}
      <header
        style={{
          padding: 20,
          border: "1px solid",
        }}
      >
        <span style={{ fontSize: 30 }}>MyApp</span>

        <a
          style={{
            padding: 10,
            border: "1px solid black",
            margin: 10,
            float: "right",
          }}
          href="/"
        >
          Dashboard
        </a>
        <a
          style={{
            padding: 10,
            border: "1px solid black",
            margin: 10,
            float: "right",
          }}
          href="/"
        >
          Sign Out
        </a>
      </header>
      {/* ----------------------------------------------------------------------- */}

      {/* aside -------------------------------------------------- */}
      <aside
        style={{
          width: "20%",
          height: "100vh",
          border: "1px solid black",
          padding: 20,
          display: "inline-block",
        }}
      >
        <a style={{ display: "block", marginBottom: 20 }} href="/">
          Orders
        </a>
        <a style={{ display: "block", marginBottom: 20 }} href="/">
          Shipments
        </a>
        <a style={{ display: "block", marginBottom: 20 }} href="/">
          Accounts
        </a>
        <a style={{ display: "block", marginBottom: 20 }} href="/">
          Invoices
        </a>
      </aside>
      {/* ----------------------------------------------------- */}

      {/* content ------------------------------------------------------- */}
      <main
        style={{
          width: "80%",
          border: "1px solid black",
          padding: 20,
          display: "inline-block",
          verticalAlign: "top",
        }}
      >
        <article
          style={{
            border: "1px solid black",
            display: "inline-block",
            width: 300,
            margin: 10,
          }}
        >
          <h2 style={{ fontSize: 44, border: "1px solid black", padding: 40 }}>
            IMG
          </h2>
          <p style={{ fontSize: 18, fontWeight: 700, padding: 20 }}>$915</p>
        </article>
        <article
          style={{
            border: "1px solid black",
            display: "inline-block",
            width: 300,
            margin: 10,
          }}
        >
          <h2 style={{ fontSize: 44, border: "1px solid black", padding: 40 }}>
            IMG
          </h2>
          <p style={{ fontSize: 18, fontWeight: 700, padding: 20 }}>$915</p>
        </article>

        <div style={{ marginTop: 40 }}>
          <h2>Summary</h2>
          <div
            style={{
              border: "1px solid black",
              padding: 10,
            }}
          >
            <span>$145</span>

            <button
              style={{ padding: 10, border: "1px solid black", margin: 10 }}
            >
              Approve
            </button>
            <button
              style={{ padding: 10, border: "1px solid black", margin: 10 }}
            >
              Deny
            </button>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: 10,
            }}
          >
            <span>$145</span>

            <button
              style={{ padding: 10, border: "1px solid black", margin: 10 }}
            >
              Approve
            </button>
            <button
              style={{ padding: 10, border: "1px solid black", margin: 10 }}
            >
              Deny
            </button>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: 10,
            }}
          >
            <span>$145</span>

            <button
              style={{ padding: 10, border: "1px solid black", margin: 10 }}
            >
              Approve
            </button>
            <button
              style={{ padding: 10, border: "1px solid black", margin: 10 }}
            >
              Deny
            </button>
          </div>
        </div>
      </main>


      {/* --------------------------------------------------------------------------------------- */}


    </div>
  );
};

export default App;
