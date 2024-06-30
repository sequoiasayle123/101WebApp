import React, { createContext, useState } from "react";

export const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
    const [markdownText, setMarkdownText] = useState("");

    return (
        <MarkdownContext.Provider value={{ markdownText, setMarkdownText }}>
            {children}
        </MarkdownContext.Provider>
    );
};
