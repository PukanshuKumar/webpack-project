import "../styles/index.scss"
import React from "react"
import Recipes from "./Recipes"
import sword from "../images/sword-img.avif"

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
            <section>
                <h1>Oh hai, React</h1>
            </section>
                <img src={sword} alt="sword" width="250" />
            <Recipes />
            </main>

        </>
    )
}

export default App