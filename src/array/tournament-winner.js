// O(n) Time where n is the number of competitions | O(k) Space where k is the number of teams
function tournamentWinner(competition, results) {
    let winner = '';
    let score = {[winner] : 0};

    for (let i = 0; i < competition.length; i++) {
        const [homeTeam, awayTeam] = competition[i];
        const winningTeam = results[i] === 1 ? homeTeam : awayTeam;

        // here using "Nullish Coalescing"
        // source from https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/
        score[winningTeam] = (score[winningTeam] ?? 0) + 3;
        if (score[winningTeam] > score[winner] ? 0) {
            winner = winningTeam;
        }
    }
    return winner;
}