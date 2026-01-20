export default function FeedbackForm() {
    let name = '';

    function handleClick() {
        name = prompt('What is your name?');
        alert(`Hello, ${name}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}