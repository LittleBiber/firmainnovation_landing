export const hexToRGBA = (hex: string, alpha: number = 1): string => {
    // Remove the leading '#' if present
    const cleanedHex = hex.replace(/^#/, '');

    // Ensure the hex is a valid length (either 3 or 6)
    if (![3, 6].includes(cleanedHex.length)) {
        throw new Error('Invalid HEX color format.');
    }

    // If short format (e.g., "#RGB"), expand to full format (e.g., "#RRGGBB")
    const fullHex =
        cleanedHex.length === 3
            ? cleanedHex
                  .split('')
                  .map((char) => char + char)
                  .join('')
            : cleanedHex;

    // Parse the R, G, and B values
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);

    // Return the RGBA string
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
