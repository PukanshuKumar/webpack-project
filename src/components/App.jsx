import "../styles/index.scss";
import React, { lazy, Suspense } from "react";
import sword from "../images/sword-img.avif";

// Use lazy loading for the Recipes component
const Recipes = lazy(() => import("./Recipes"));

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh hai, React</h1>
        </section>
        <img src={sword} alt="sword" width="250" />

        {/* Wrap the Recipes component in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Recipes />
        </Suspense>
      </main>
    </>
  );
};

export default App;
