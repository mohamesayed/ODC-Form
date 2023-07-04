import React from "react";

function Overlay() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <p style={{ color: "#fff", fontSize: "24px", textAlign: "center" }}>
        Please agree to proceed
      </p>
    </div>
  );
}

export default Overlay;
