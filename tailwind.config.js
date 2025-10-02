/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        'primary': '#E67225',
        'primary-50': '#FCF0E8',
        'primary-100': '#FAE1D1',
        'primary-950': '#170B03',
        'gray-neutral-50': '#F8FAFC',
        'gray-neutral-100': '#F1F5F9',
        'gray-neutral-300': '#CBD5E1',
        'gray-neutral-500': '#64748B',
        'gray-neutral-600': '#1E293B',
        'secondary-500': '#40B0E4',
        'yellow-color': '#FBC015',
        //'secondary-700': '#136286',
        'danger-50': '#FEE2E2',
        "secondary-600":'#10131B',
        "secondary-700":'#010507',
        "secondary-800":'#0D4159',
        "secondary-950":'#031016',
        "main-black":'#030511',
        "warning-400":'#F59E0B',
        "pale-beige": '#FCF0E8',
        "input-bg": '#747474',
      },
      maxWidth: {
        '1296':'1296px',
      },
      boxShadow: {
        'sm-custom': '0px 2px 8px rgba(0, 0, 0, 0.08)',
        'lg-custom': '0px 25px 50px rgba(0, 0, 0, 0.09)',
        'peach-custom': '0px 25px 50px rgba(254, 89, 44, 0.12), 0px 4px 8px rgba(254, 89, 44, 0.03), 0px 8px 32px rgba(254, 89, 44, 0.06)',
        'shadow-4': '0px 0px 0px 4px rgba(255, 255, 255, 0.4)',
        'shadow-5': '0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)',
        'shadow-6': '0px 3.28px 13.11px 0px rgba(251, 192, 21, 0.3)',
  
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-hero.png')",
        'service-pattern': "url('/images/bg-service.png')", 
        'event-pattern': "url('/images/bg-three.jpg')",
        'black-linear': 'linear-gradient(0deg,rgba(3, 5, 17, 1) 0%, rgba(3, 5, 17, 0) 100%)',
        'yellow-linear': 'linear-gradient(90deg, rgba(251, 192, 21, 1) 0%, rgba(230, 114, 37, 1) 100%)',
        'ring-linear': 'linear-gradient(90deg, rgba(251, 192, 21, 1) 0%, rgba(230, 114, 37, 1) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, 
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite', 
      },
      willChange: {
        transform: 'transform',
      },
    },
  },
  plugins: [],
}