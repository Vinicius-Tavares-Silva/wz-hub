const API__OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '5bb6120037msh134cc3b3f206749p18f4bbjsnfcd3ef68a420',
    'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com',
  },
};

export async function getPlayerStats(gamertag, platform) {
  const url = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`;
  const playerStats = await fetch(url, API__OPTIONS)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.error(err);
    });

  return playerStats;
}

export async function getWzMatches(gamertag, platform) {
  const url = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/${gamertag}/${platform}`;
  const matches = await fetch(url, API__OPTIONS)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.error(err);
    });

  return matches;
}

export async function getPlayerWeeklyStats(gamertag, platform) {
  const url = `https://call-of-duty-modern-warfare.p.rapidapi.com/weekly-stats/${gamertag}/${platform}`;
  const playerWeeklyStats = await fetch(url, API__OPTIONS)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
    });

  return playerWeeklyStats;
}
