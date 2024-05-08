/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:"0.75rem",
        base:"0.875rem",
        md:"1rem",
        lg:"1.25rem",
        xl:"1.5rem",
        xxl:"1.75rem",
        xxxl:"2.25rem",
        xxxxl:"3rem",
        "5xl":"4rem"
      },
      backgroundImage: {
        'team-bg-image': "url('/teams/img-6.png')"
      }
    },
  },
  plugins: [],
}

