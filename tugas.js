// let studentsScore = [
// {
//     name: 'Andi',
//     score: 90
// },
// {
//     name: 'Rudi',
//     score: 80
// },
// {
//     name: 'Dira',
//     score: 100
// },
// ]

// let nilaiTertinggi = 0;
// let namanya = '';

// for (let i = 0; i < studentsScore.length; i++) {
//   if (studentsScore[i].score > nilaiTertinggi) {
//     nilaiTertinggi = studentsScore[i].score;
//     namanya = studentsScore[i].name;
//   }
// }

// console.log(`Nama dengan nilai tertinggi: ${namanya}`);
// console.log(`Nilai tertinggi: ${nilaiTertinggi}`);

var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

const groupedByCountry = motoGP.reduce((acc, race) => {
  const country = race.winner.country;
  const winnerName = `${race.winner.firstName} ${race.winner.lastName}`;
  const winLocation = `${race.circuit}, ${race.location}`;
  
  // Jika negara belum ada dalam accumulator, buat object baru
  if (!acc[country]) {
    acc[country] = {
      winningCircuits: [], // Array untuk menyimpan informasi pemenang dan lokasi
      totalWin: 0          // Menghitung total kemenangan
    };
  }
  
  // Tambahkan data pemenang dan lokasi kemenangan ke dalam array
  acc[country].winningCircuits.push({
    name: winnerName,
    winLocation: winLocation
  });
  
  // Increment total kemenangan untuk negara ini
  acc[country].totalWin += 1;

  return acc;
}, {});

console.log(JSON.stringify(groupedByCountry, null, 2));
