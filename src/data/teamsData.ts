
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
  
