// export type Team = {
//     id: string;
//     name: string;
//     avatar: string;
//     members: number;
//     divisions: number;
//   };

// export const initialTeams = [
//     {
//       id: '1',
//       name: 'Team Alpha',
//       avatar: 'https://i.pravatar.cc/150?img=1',
//       members: 10,
//       divisions: 2,
//     },
//     {
//       id: '2',
//       name: 'Team Beta',
//       avatar: 'https://i.pravatar.cc/150?img=2',
//       members: 8,
//       divisions: 1,
//     },
//     {
//       id: '3',
//       name: 'Team Gamma',
//       avatar: 'https://i.pravatar.cc/150?img=3',
//       members: 15,
//       divisions: 3,
//     },
//     {
//       id: '4',
//       name: 'Team Delta',
//       avatar: 'https://i.pravatar.cc/150?img=4',
//       members: 5,
//       divisions: 1,
//     },
//     {
//       id: '5',
//       name: 'Team Epsilon',
//       avatar: 'https://i.pravatar.cc/150?img=5',
//       members: 12,
//       divisions: 2,
//     },
//     {
//       id: '6',
//       name: 'Team Zeta',
//       avatar: 'https://i.pravatar.cc/150?img=6',
//       members: 9,
//       divisions: 1,
//     },
//     {
//       id: '7',
//       name: 'Team Eta',
//       avatar: 'https://i.pravatar.cc/150?img=7',
//       members: 11,
//       divisions: 2,
//     },
//     {
//       id: '8',
//       name: 'Team Theta',
//       avatar: 'https://i.pravatar.cc/150?img=8',
//       members: 7,
//       divisions: 1,
//     },
//     {
//       id: '9',
//       name: 'Team Iota',
//       avatar: 'https://i.pravatar.cc/150?img=9',
//       members: 14,
//       divisions: 3,
//     },
//     {
//       id: '10',
//       name: 'Team Kappa',
//       avatar: 'https://i.pravatar.cc/150?img=10',
//       members: 6,
//       divisions: 1,
//     },
//     {
//         id: '11',
//         name: 'Team Kappa1',
//         avatar: 'https://i.pravatar.cc/150?img=10',
//         members: 9,
//         divisions: 9,
//       },
//   ];
  

export type Team = {
    id: string;
    name: string;
    avatar: string;
    members: { name: string }[];
    divisions: number;
  };
  
  export const initialTeams: Team[] = [
    { id: '1', name: 'Team Alpha', avatar: 'https://i.pravatar.cc/150?img=1',  members: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }], divisions: 1 },
    { id: '2', name: 'Team Beta', avatar: 'https://i.pravatar.cc/150?img=2',  members: [{ name: 'Alice' }, { name: 'Bob' }], divisions: 2 },
    // Add more teams as needed
  ];
  