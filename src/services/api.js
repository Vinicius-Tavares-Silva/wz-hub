const API__OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '5bb6120037msh134cc3b3f206749p18f4bbjsnfcd3ef68a420',
    'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com',
  },
};

export function getPlayerStats(gamertag, platform) {
  const url = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`;
  const playerStats = fetch(url, API__OPTIONS)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
    });

  return playerStats;
}

export function getWzMatches(gamertag, platform) {
  const url = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/${gamertag}/${platform}`;
  const matches = fetch(url, API__OPTIONS)
    .then((response) => response.json())
    .then((data) => console.log(data.matches))
    .catch((err) => {
      console.error(err);
    });

  return matches;
}

export function getPlayerWeeklyStats(gamertag, platform) {
  const url = `https://call-of-duty-modern-warfare.p.rapidapi.com/weekly-stats/${gamertag}/${platform}`;
  const playerWeeklyStats = fetch(url, API__OPTIONS)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
    });

  return playerWeeklyStats;
}

export function getMatch(matchId) {
  const url = `https://www.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/fullMatch/wz/${matchId}/it`
  const players = fetch(url).then(response => response.json())
  .then(result => result.data.allPlayers)
  .catch((err) => {
    console.error(err);
  });;

  return players;
}


