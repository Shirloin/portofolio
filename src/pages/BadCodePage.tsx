import { useState, useEffect, useRef } from "react";

// Bad: No types, using any everywhere
export default function BadCodePage() {
  // Bad: Magic numbers, unclear variable names
  const [x, setX] = useState(0);
  const [y, setY] = useState("");
  const [z, setZ] = useState([]);
  const [flag, setFlag] = useState(false);

  // Bad: Direct DOM manipulation in React
  const ref = useRef(null);

  // Bad: No cleanup, memory leaks
  useEffect(() => {
    // Bad: Console.logs left in production code
    console.log("Component mounted");
    console.log("x value:", x);

    // Bad: Using eval (security risk)
    const code = "document.body.style.backgroundColor = 'red'";
    setTimeout(() => {
      try {
        eval(code);
      } catch (e) {
        console.log("Error:", e);
      }
    }, 1000);

    // Bad: Direct DOM manipulation
    const el = document.getElementById("bad-element");
    if (el) {
      el.innerHTML = "<div>Dangerous innerHTML</div>";
    }

    // Bad: Multiple setInterval without cleanup
    setInterval(() => {
      setX(prev => prev + 1);
    }, 100);

    setInterval(() => {
      setFlag(prev => !prev);
    }, 50);

    // Bad: No return cleanup function
  }, []);

  // Bad: Another useEffect with no dependencies but uses state
  useEffect(() => {
    // Bad: Accessing state in effect without dependencies
    if (x > 100) {
      alert("Too many clicks!"); // Bad: Using alert
    }
  });

  // Bad: Function with no type safety, also unused
  const handleClick = (e: any) => {
    // Bad: Mutating state directly (this won't work but shows bad practice)
    // x = x + 1; // This is actually invalid but shows the intent
    setX(x + 1);

    // Bad: Hardcoded values
    if (x === 42) {
      window.location.href = "https://example.com";
    }

    // Bad: No error handling
    const data = JSON.parse(y);
    setZ([...z, data]);
  };

  // Bad: Unused variables, dead code
  const unused = "this is never used";
  let anotherUnused = 123;

  // Bad: Inline styles mixed with Tailwind
  const style = {
    color: "red",
    fontSize: "20px",
    backgroundColor: flag ? "blue" : "green",
    padding: "10px",
    margin: "5px"
  };

  // Bad: Complex inline logic, no separation of concerns
  return (
    <div>
      {/* Bad: No accessibility attributes */}
      <div id="bad-element" style={style} className="p-4 m-2 bg-gray-100">
        <h1 style={{ color: "purple", fontSize: "30px" }}>
          Bad Code Example Page
        </h1>

        {/* Bad: Inline event handlers with complex logic */}
        <button
          onClick={(e) => {
            setX(x + 1);
            setY(JSON.stringify({ count: x + 1 }));
            if (x > 50) {
              document.cookie = "test=value"; // Bad: Setting cookies directly
            }
          }}
          style={{ width: "200px", height: "50px" }}
          className="bg-blue-500 text-white"
        >
          Click me {x} times
        </button>

        {/* Bad: No key prop, using index */}
        {z.map((item, index) => (
          <div>{item}</div>
        ))}

        {/* Bad: Conditional rendering with complex inline logic */}
        {x > 10 && x < 20 ? (
          <div>Between 10 and 20</div>
        ) : x > 20 && x < 30 ? (
          <div>Between 20 and 30</div>
        ) : x > 30 ? (
          <div>Over 30</div>
        ) : (
          <div>Under 10</div>
        )}

        {/* Bad: Using ref incorrectly */}
        <input
          ref={ref}
          type="text"
          onChange={(e) => {
            // Bad: Direct DOM access
            const input = document.querySelector("input");
            if (input) {
              input.value = e.target.value.toUpperCase();
            }
          }}
        />

        {/* Bad: No error boundaries, unsafe operations */}
        <button
          onClick={() => {
            // Bad: No try-catch
            const result = JSON.parse(y);
            setZ([...z, result]);
          }}
        >
          Parse JSON
        </button>

        {/* Bad: Hardcoded URLs, no constants */}
        <a href="https://example.com" target="_blank">
          External Link
        </a>

        {/* Bad: Inline styles everywhere */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            margin: "10px",
            border: "1px solid black",
            borderRadius: "5px"
          }}
        >
          <span style={{ color: flag ? "red" : "blue" }}>
            Flag is {flag ? "true" : "false"}
          </span>
        </div>

        {/* Bad: No loading states, no error handling */}
        <button
          onClick={async () => {
            const response = await fetch("https://api.example.com/data");
            const data = await response.json();
            setZ(data);
          }}
        >
          Fetch Data
        </button>

        {/* Bad: Performance issues - unnecessary re-renders */}
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>
            Item {i} - {x}
          </div>
        ))}
      </div>
    </div>
  );
}

