/**
 * @file themeConfig.ts
 * @description Global source of truth for Bayou Black Cars branding colors.
 * Edit these values to update the theme across the entire website.
 */

export const themeConfig = {
    colors: {
        // Primary brand colors
        navy: {
            midnight: "#000000", // Obsidian Black
            dark: "#000000",
            light: "#1A1A1A",
        },

        // Rental accent colors
        gold: {
            primary: "var(--color-gold)",  // Luxury Gold
            accent: "var(--color-gold)",
            hover: "var(--color-gold-hover)",
        },

        // Background and Text
        neutral: {
            white: "#FFFFFF",
            charcoal: "#000000", // Pure Black for text
            muted: "#4B4B4B",
        }
    }
};
