import { useState } from "react";

export function Rating(props) {
    const [rating, setRating] = useState(0);
    return (<div>
        {[...Array(5)].map((star, index) => {
            index += 1;
            return (
                <button
                    type="button"
                    key={index}
                    className={index <= props.rating ? "on" : "off"}
                >
                    <span className="star">&#9733;</span>
                </button>
            );
        })}
        ({props.rating})
    </div>)
}