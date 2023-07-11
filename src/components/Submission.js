import { SubmissionBox } from "./SubmissionBox";
export const Submission = (props) => {
    const movie = props.movie;

    const categories = {
        "Title": movie["Title"],
        "Genre": movie["Genre"],
        "Actors": movie["Actors"],
        "Director": movie["Director"],
        "Year": movie["Year"]
    }
    return (
        <tr className="Hint-Box-List">
            {
                Object.keys(categories).map((cat) => {
                    return (
                        <SubmissionBox answer={props.answer} category={cat} value={categories[cat]} />
                    )
                })
            }
        </tr>
    )
}