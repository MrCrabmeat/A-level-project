// This code is used to control the theming
// and colouration of SVGs, backgrounds, and
// text by updating the virtual DOMs vector
// files to provide a more accurate control
// over the styling of the elements themselves.
// Edit: SVGs are now handled within the HTML
//       Itself due to complications

// The format that this code is written is FP
// to reduce memory usage and provide no
// adverse effect. Although some areas won't be
// in an FP style, it is used when applicable.

// Set the const variables for the dark and
// light mode for easier control over the
// predetermined values
const darkTheme = {
    TBvectorColour: '#0B0B0B',
    TBcolour: '#E4DDD8',
    MPtext: '#EBFAFF',
    BGcolour:
    "70deg, #020229 0%, #34013C 33%, #814508 100%",
    accessory: 'white',
    themeID: 'DARK'
}
const lightTheme = {
    TBvectorColour: '#EBFAFF',
    TBcolour: '#333232',
    MPtext: '#0B0B0B',
    BGcolour:
    "70deg, #9D82DF 0%, #D86FEC 33%, #EC8F30 100%",
    // error previously setting the gradient to 100deg,
    // the design uses 70 (-100) degrees
    accessory: 'black',
    themeID: 'LIGHT'
    // themeID allows changeTheme() to identify the current website
    // theme to allow it to correctly switch to another theme.
}
let currentthemeID = ''
// Sets a global variable to allow functions to identify the current
// theme being used. It uses a string for readability and scalability due
// to allowing other themes to be added later if needs be.

// To apply the colour changes, the classes of
// Taskbar buttons and text need to change.
// The background should update with the
// BGcolour needed.
function themeLoader(theme) {
    document.documentElement.style.setProperty(
        '--TBvectorColour', theme.TBvectorColour);
    document.documentElement.style.setProperty(
        '--TBcolour', theme.TBcolour);
    document.documentElement.style.setProperty(
        '--MPtext', theme.MPtext);
    document.documentElement.style.setProperty(
        '--BGcolour',  `linear-gradient(${theme.BGcolour})`)
    //`linear-gradient(${theme.BGcolour}) turns the var() in the CSS
    // into a working function, though the CSS IDE outputs "unresolved",
    // the function doesn't initially show due to requiring HTML loading.
    document.documentElement.style.setProperty(
        '--accessory', theme.accessory);
    currentthemeID = theme.themeID;
    // Sets the global theme ID variable to the theme selected to update
    // to the new  theme being used, keeping functions up to date.
}
themeLoader(lightTheme);
// Initially loads a default theme for the website
function changeTheme() {
    if (currentthemeID === 'DARK') {
        themeLoader(lightTheme);}

    else if (currentthemeID === 'LIGHT') {
        themeLoader(darkTheme);}
    else {
        themeLoader(darkTheme)
        reportError("Theme not found, setting default theme");}
    // If no themeID is identified, the function falls back onto the
    // default theme and outputs and error message.
}