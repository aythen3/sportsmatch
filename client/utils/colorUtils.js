// colorUtils.js

/**
 * Convert hex color to RGBA format with specified opacity.
 * @param {string} hex - The hex color code (e.g., '#E1AA1E').
 * @param {number} opacity - The opacity value (0 to 1).
 * @returns {string} - The RGBA color string.
 */
const hexToRgba = (hex, opacity) => {
  // Remove the hash if it exists
  hex = hex.replace('#', '')

  // Parse the r, g, b values
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Return the rgba color
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

/**
 * Get colors with different opacities from a hex color.
 * @param {string} hex - The hex color code (e.g., '#E1AA1E').
 * @param {number} moreOpacity - The higher opacity value (0 to 1).
 * @param {number} lessOpacity - The lower opacity value (0 to 1).
 * @returns {object} - An object with more and less opaque colors.
 */
const getColorsWithOpacity = (hex, moreOpacity, lessOpacity) => {
  return {
    moreOpaque: hexToRgba(hex, moreOpacity),
    lessOpaque: hexToRgba(hex, lessOpacity),
    opaque: hexToRgba(hex, 0.85)
  }
}

export { hexToRgba, getColorsWithOpacity }
