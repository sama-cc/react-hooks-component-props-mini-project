import React from "react";

function Article({ title, date = "January 1, 1970", preview, rMin, minutes }) {
    function iconGen() {
        const coffeeArray = [];
        const bentoArray = [];
        if (minutes < 30) {
            for (let m = 0; m < rMin; m++) {
                coffeeArray.push("☕️");                
            }
            return coffeeArray.join("")
        } else {
            for (let m = 0; m < rMin; m++) {                
                bentoArray.push("🍱");
            return bentoArray.join("")
            }
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} · {iconGen()} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article