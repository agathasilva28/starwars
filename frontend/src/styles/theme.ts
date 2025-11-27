export const theme = {
  containers: {
    left: '410px',
    right: '582px',
    single: '804px',
    header: '50px',
  },
  input: {
    height: '40px',
  },
  colors: {
    primary: "#0ab463",
    background: {
      primary: "#ededed",
      secondary: "#fff",
    },
    text: {
      default: "#000",
      disabled: "#c4c4c4",
    },
    danger: "#EF4444",
    shadow: "rgba(132, 132, 132, .75)",
    border: "#383838",
  },

  spacing: {
    xxs: "5px",
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "50px",
    xl: "100px",
  },

  fonts: {
    default: "'Montserrat', sans-serif",
    sizes: {
      title:"18px",
      label: "14px",
      subtitle: "16px",
      body: "14px",
      logo: "22px",
    },
    weights: {
      bold: 700,
      medium: 600,
      regular: 400,
    },
  },
};

export const themeByZeplin = {
  containers: {
    left: '205px',
    right: '291px',
    single: '402px',
    header: '25px',
  },
  input: {
    height: '20px',
  },
  colors: {
    primary: "#0ab463",
    background: {
      primary: "#ededed",
      secondary: "#fff",
    },
    text: {
      default: "#000",
      disabled: "#c4c4c4",
    },
    danger: "#EF4444",
    shadow: "rgba(132, 132, 132, .75)",
    border: "#383838",
  },

  spacing: {
    xxs: "2px",
    xs: "5px",
    sm: "10px",
    md: "15px",
    lg: "25px",
    xl: "50px",
  },

  fonts: {
    default: "'Montserrat', sans-serif",
    sizes: {
      title:"9px",
      label: "7px",
      subtitle: "8px",
      body: "7px",
      logo: "11px",
    },
    weights: {
      bold: 700,
      medium: 600,
      regular: 400,
    },
  },
};

export type AppTheme = typeof theme;