import React, { useState } from "react";
import TesteComponent from "@/components/TesteComponent";
import Cursor from "@/components/Cursor";

export default function PaginaPrincipal() {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <div>
      <TesteComponent setCursorVariant={setCursorVariant} />
      <Cursor cursorVariant={cursorVariant} />
    </div>
  );
}