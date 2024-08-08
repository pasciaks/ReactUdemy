import logo from "../assets/logo.png";
import { styled } from "styled-components";

// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   & img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//   }

//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: "Pacifico", cursive;
//     margin: 0;
//   }

//   & p {
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }

//   @media (min-width: 768px) {
//     margin-bottom: 4rem;

//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `;

// const Header = styled("header", {
//   display: "flex",
//   alignItems: "center",
//   gap: "1rem",
//   padding: "1rem",
//   backgroundColor: "#f9fafb",
//   borderBottom: "1px solid #d1d5db",
//   "& img": {
//     width: "3rem",
//     height: "3rem",
//   },
//   "& h1": {
//     fontSize: "1.5rem",
//     fontWeight: "700",
//     color: "#111827",
//   },
//   "& p": {
//     fontSize: "0.875rem",
//     color: "#6b7280",
//   },
// });

// NOTE: Using CSS Modules for class scoping of CSS styles
// import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        className="mb-8 w-44 h-44 object-contain"
        src={logo}
        alt="A canvas"
      />
      <h1 className="text-xl font-title md:text-4xl font-semibold tracking-widest uppercase text-center text-amber-800">
        ReactArt
      </h1>
      <p className="text-stone-500" /*className={classes.paragraph} */>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
