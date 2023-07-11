import { useState, useEffect } from 'react';

export const SubmissionBox = (props) => {
    const value = props.value;
    const category = props.category;

    const [match, setMatch] = useState(false);
    const [matchList, setMatchList] = useState([]);

    useEffect(() => {
        checkMatch();
    }, []);

    const checkMatch = () => {
        console.log(value);
        console.log(category);
        console.log(JSON.stringify(props));
        if (value == props.answer[category]) {
            setMatch("FULL");
        } else {
            let guessArr = value.split(",").map(item => item.trim());
            let answerArr = props.answer[category].split(",").map(item => item.trim());

            let matches = guessArr.filter(val => answerArr.includes(val));

            if (matches.length > 0) {
                setMatch("PARTIAL");
                setMatchList(matches);
            } else {
                setMatch("NONE");
            }
        }
    }
    return (
        <td 
            className="Hint-Box-Container"
            style={(match == "FULL") ? { backgroundColor: "green" } : (match == "PARTIAL") ? { backgroundColor: "yellow" } : {}}
        >
            {match == "PARTIAL" ? matchList.toString() : value}
            {/* <span
                className="Hint-Box"
                style={(match == "FULL") ? { backgroundColor: "green" } : (match == "PARTIAL") ? { backgroundColor: "yellow" } : {}}>
                {value}
            </span>
            <span className="Hint-Box-Subtitle">{category}</span> */}
        </td>
    );
}