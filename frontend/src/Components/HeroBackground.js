// import React from 'react'

// const HeroBackground = ({ children, hero }) => {
//   return (
//     <header className={hero}>
//       {children}
//     </header>
//   )
// }


// HeroBackground.defaultProps = {
//   hero: "defaultHero"
// };


// export default HeroBackground;


import React from 'react';

const HeroBackground = ({ children, hero = "defaultHero" }) => {
  return (
    <header className={hero}>
      {children}
    </header>
  );
};

export default HeroBackground;
