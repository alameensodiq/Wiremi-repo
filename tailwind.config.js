/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
    "./components/**/*.{js,jsx,ts,tsx}" // Include all JS, JSX, TS, and TSX files in the components folder]
    // "./app/(tabs)/meditate.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A94F4",
        buttonprimary: "#105CE2",
        signbutton: "#105CE224",
        grey: "#5e5d5e",
        creataccount: "#7B7C7D",
        dark: "#1a1a1a",
        lighttextdark: "#606162",
        darktext: "#00091E",
        creamwhite: "#FCFCFC",
        textblack: "#242329",
        lighttextblack: "#475467",
        textinputtext: "#999999",
        forgotsuccesslight: "#727579",
        chooseaccounttext: "#0A0A0A",
        dashboardtransbutton: "#B2CDFD",
        successtrans: "#00A85A",
        failedtrans: "#DE1E04",
        transdate: "#9B9C9D",
        sectionheader: "#3D3F43",
        faintline: "#EBEBEB",
        pagetitle: "#242329",
        deposistsub: "#4B4B4B"
      },
      borderRadius: {
        ten: "10px",
        six: "6px",
        thirty: "30px",
        "custom-router": "4px",
        "t-l": "40px 40px 0 0",
        "t-l-b-l": "6px 0 0 6px",
        "t-r-b-l": "0 6px 6px 0",
        "b-l": "0 0 10px 10px"
      },
      borderWidth: {
        borderwith: "0.5px",
        1: "1px",
        2: "2px"
      },
      borderColor: {
        landingdrop: "#EBEBEB",
        customgray: "#D0D5DD"
      },
      fontFamily: {
        vietnam: ["Be Vietnam Pro"]
      }
    }
  },
  plugins: []
};
