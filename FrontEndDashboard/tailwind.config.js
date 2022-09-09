module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate100: "#f0f1f2",
        slate200: "#dedfe0",
        slate600: "#6d747a",
        slate700: "#545b63",
        green100: "#ddf7d0",
        blue100: "#E0F2FF",
        blue900: "#053361",
        yellow100: "#fff9c0",
        red100: "#ffedef",
        sideColor: "#053361",
        declineColor: "#6b0a0a",
        approvalColorFinance: "#28820A",
        conditionalApproval: "#FE7A00",
        declineCreditColor: "#DB187A",
        creditApprovalText: "#206609",
        decisionDetailColorText: "#1773CF"
      },
      fontSize: {
        "sm": "14px",
        "md": "16px",
        "lg": "25px",
      }
    },
    fontFamily: {
      "lato": ["Lato"],
      "latoBold": ["Lato-Bold"],
      "heading": ["CarMaxSharpSansDisplay-Bold"]
    }
  },  plugins: [],
}
