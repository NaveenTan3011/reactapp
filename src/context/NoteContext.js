



import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export function useCart() {
  return useContext(NoteContext);
}
export default NoteContext;
