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
    "100deg, #020229 0%, #34013C 33%, #814508 100%",
}
const lightTheme = {
    TBvectorColour: '#EBFAFF',
    TBcolour: '#333232',
    MPtext: '#0B0B0B',
    BGcolour:
    "100deg, #9D82DF 0%, #D86FEC 33%, #EC8F30 100%",
}

