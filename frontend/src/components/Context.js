// Context.js
import React, { createContext, useEffect, useState } from "react";
import { fetchMarkdownFile } from "./MarkdownReader";

export const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
    const [markdownText, setMarkdownText] = useState("");

    useEffect(() => {
        // Load initial Markdown content
        async function loadInitialMarkdown() {
            const initialMarkdown = await fetchMarkdownFile("blank.md");
            setMarkdownText(initialMarkdown);
        }
        loadInitialMarkdown();
    }, []);
    console.log("context")

    return (
        <MarkdownContext.Provider value={{ markdownText, setMarkdownText }}>
            {children}
        </MarkdownContext.Provider>
    );
};
