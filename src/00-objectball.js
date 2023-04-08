function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Back', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrian': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben gordan': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

function numPointsScored(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                let playerObj = teamObj.players;
                for (let playerKey in playerObj) {
                    if (playerKey === playerName) {
                        let data = playerObj[playerName];
                        for (let key in data) {
                            if (key === 'points') {
                                return data[key];
                            }
                        }
                    }
                }
            }
        }
    }
}

function shoeSize(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                let playerObj = teamObj.players;
                for (let playerKey in playerObj) {
                    if (playerKey === playerName) {
                        let data = playerObj[playerName];
                        for (let key in data) {
                            if (key === 'shoe') {
                                return data[key];
                            }
                        }
                    }
                }
            }
        }
    }
}

function teamColors(teamName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'teamName') {
                let teamNameObj = teamObj.teamName;
                if (teamNameObj === teamName) {
                    return teamObj.colors;
                }
            }
        }
    }
}

function teamNames() {
    let game = gameObject();
    let teamNames = [];
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'teamName') {
                teamNames.push(teamObj[teamKey]);
            }
        }
    }
    return teamNames;
}

function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'teamName') {
                let teamNameObj = teamObj.teamName;
                if (teamNameObj === teamName) {
                    let playerObj = teamObj.players
                    for (let playerKey in playerObj) {
                        let data = playerObj[playerKey];
                        for (let key in data) {
                            if (key === 'number') {
                                numbers.push(data[key]);
                            }
                        }
                    }
                }
            }
        }
    }
    return numbers;
}

function playerStats(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                let playerObj = teamObj.players;
                for (let playerKey in playerObj) {
                    if (playerKey === playerName) {
                        let data = playerObj[playerName];
                        return data;
                    }
                }
            }
        }
    }
}

function bigShoeRebounds() {
    let game = gameObject();
    let largestShoe = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                let data = playerObj[playerKey];
                for (let key in data) {
                    if (data.shoe > largestShoe) {
                        largestShoe = data.shoe;
                    }
                }
            }
        }
    }
    let playerWithBigFeet = '';
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                let data = playerObj[playerKey];
                for (let key in data) {
                    if (data.shoe === largestShoe) {
                        playerWithBigFeet = playerKey;
                    }
                }
            }
        }
    }
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                let playerObj = teamObj.players;
                for (let playerKey in playerObj) {
                    if (playerKey === playerWithBigFeet) {
                        let data = playerObj[playerKey];
                        for (let key in data) {
                            if (key === 'rebounds') {
                                return data[key];
                            }
                        }
                    }
                }
            }
        }
    }
}

function mostPointsScored() {
    let game = gameObject();
    let mostPoints = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                let data = playerObj[playerKey];
                for (let key in data) {
                    if (data.points > mostPoints) {
                        mostPoints = data.points;
                    }
                }
            }
        }
    }
    let playerWithMostPoints = '';
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                let data = playerObj[playerKey];
                for (let key in data) {
                    if (data.points === mostPoints) {
                        playerWithMostPoints = playerKey;
                    }
                }
            }
        }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    let game = gameObject();
    let teamOnePoints = 0;
    let teamTwoPoints = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                let data = playerObj[playerKey];
                for (let key in data) {
                    if (teamObj.teamName = 'Brooklyn Nets') {
                        teamOnePoints = teamOnePoints + data[key];
                    } else if (teamObj.teamName = 'Charlotte Hornets') {
                        teamTwoPoints = teamTwoPoints + data[key];
                    }
                }
            }
        }
    }
    if (teamOnePoints > teamTwoPoints) {
        return 'Brooklyn Nets';
    } else if (teamOnePoints < teamTwoPoints) {
        return 'Charlotte Hornets';
    } else {
        return 'Tie';
    }
}

function playerWithLongestName() {
    let game = gameObject();
    let lengthOfLongestName = 0;
    let thePlayer = '';
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                if (lengthOfLongestName < playerKey.length) {
                    lengthOfLongestName = playerKey.length;
                } else {
                    thePlayer = playerKey;
                }
            }
        }
    }
    return thePlayer;
}

function doesLongNameStealATon() {
    let longestNamePlayer = playerWithLongestName();
    let game = gameObject();
    let mostSteals = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                let data = playerObj[playerKey];
                for (let key in data) {
                    if (data.steals > mostSteals) {
                        mostSteals = data.steals;
                    }
                }
            }
        }
    }
    let playerWithMostSteals = '';
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let playerKey in playerObj) {
                let data = playerObj[playerKey];
                for (let key in data) {
                    if (data.steals === mostSteals) {
                        playerWithMostSteals = playerKey;
                    }
                }
            }
        }
    }
    if (longestNamePlayer === playerWithMostSteals) {
        return true;
    } else {
        return false;
    }
}
