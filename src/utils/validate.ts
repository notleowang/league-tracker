// Validates Game Name and Tag Line input fields
export function isValidInput(gameName: string, tagLine: string) {

    let validate = true;

    if (!gameName && !tagLine?.slice(1, tagLine.length)) {
        alert("Please provide a valid Game Name and Tag (e.g., Summoner #NA1)");
        validate = false;
    } else if (!gameName) {
        alert("Please provide a valid Game Name");
        validate = false;
    } else if (gameName.length < 3) {
        alert("Game Name must be at least 3 characters long");
        validate = false;
    } else if (tagLine.length < 3) {
        alert("Tag must be at least 3 characters long");
        validate = false;
    }

    return validate;
}