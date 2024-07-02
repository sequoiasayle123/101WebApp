export async function fetchMarkdownFile(fileName) {
    try {
        const response = await fetch(`${process.env.PUBLIC_URL}/templates/${fileName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch Markdown file ${fileName}`);
        }
        console.log(`${fileName}`)
        console.log(response)
        return await response.text();
    } catch (error) {
        console.error("Error fetching Markdown file:", error);
        return "";
    }
}
