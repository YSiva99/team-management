// import React, { useState } from 'react';
// import { EuiBasicTable, EuiLink, EuiButton, EuiSearchBar } from '@elastic/eui';
// import { TeamForm } from './TeamForm';
// import { initialTeams } from '../data/teamsData';
// import CreateTeamModal from './CreateTeamModal';

// type Team = {
//   id: string;
//   name: string;
//   avatar: string;
//   members: number;
//   divisions: number;
// };

// export const TeamTable = () => {
//   const [teams, setTeams] = useState<Team[]>(initialTeams);
//   const [search, setSearch] = useState('');
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const columns = [
//     {
//       field: 'name',
//       name: 'Team Name',
//       render: (name: string) => <EuiLink>{name}</EuiLink>,
//     },
//     {
//       field: 'avatar',
//       name: 'Avatar',
//       render: (avatar: string) => <img src={avatar} alt="Avatar" style={{ width: 50, height: 50 }} />,
//     },
//     {
//       field: 'members',
//       name: 'Number of Members',
//     },
//     {
//       field: 'divisions',
//       name: 'Number of Divisions',
//     },
//     {
//       name: 'Actions',
//       render: (team: Team) => (
//         <>
//           <EuiButton onClick={() => { setSelectedTeam(team); setIsFormVisible(true); }}>Edit</EuiButton>
//           <EuiButton color="danger" onClick={() => handleDelete(team.id)}>Delete</EuiButton>
//         </>
//       ),
//     },
//   ];

//   const handleDelete = (id: string) => {
//     setTeams(teams.filter(team => team.id !== id));
//   };

//   const handleSearch = (query: any) => {
//     const { query: searchQuery } = query;
//     setSearch(searchQuery);
//   };

//   const filteredTeams = teams.filter(team => 
//     team.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleCreateTeam = (teamData: { name: string; division: string; members: string[] }) => {
//     const newTeam = {
//       id: `${teams.length + 1}`,
//       name: teamData.name,
//       avatar: 'https://i.pravatar.cc/150', // Placeholder avatar
//       members: teamData.members.length,
//       divisions: 1, // You can adjust this as necessary
//     };
//     setTeams([...teams, newTeam]);
//   };

//   return (
//     <div>
//       <EuiSearchBar onChange={handleSearch} />
//       <EuiButton onClick={() => { setSelectedTeam(null); setIsFormVisible(true); }}>Add New Team</EuiButton>
//       <EuiBasicTable
//         items={filteredTeams}
//         columns={columns}
//         rowHeader="name"
//       />
//      <CreateTeamModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateTeam} />
//       {isFormVisible && <TeamForm team={selectedTeam} onClose={() => setIsFormVisible(false)} onSave={setTeams} />}
//     </div>
//   );
// };
// src/components/TeamTable.tsx
import React, { useState } from 'react';
import { EuiBasicTable, EuiLink, EuiButton, EuiSearchBar, EuiFieldSearch } from '@elastic/eui';
import { initialTeams, Team } from '../data/teamsData';
import CreateTeamModal from './CreateTeamModal';

export const TeamTable = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [search, setSearch] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const columns = [
    {
      field: 'name',
      name: 'Team Name',
      render: (name: string) => <EuiLink>{name}</EuiLink>,
    },
    {
      field: 'avatar',
      name: 'Avatar',
      render: (avatar: string) => <img src={avatar} alt="Avatar" style={{ width: 50, height: 50 }} />,
    },
    // {
    //   field: 'members',
    //   name: 'Number of Members',
    // },
    {
        field: 'members',
        name: 'Members',
        //render: (members: { name: string }[]) => members.map(member => member.name).join(', '), // to display the members in the team
        render: (members: { name: string }[]) => members.length,
      },
    {
      field: 'divisions',
      name: 'Number of Divisions',
    },
    {
      name: 'Actions',
      render: (team: Team) => (
        <>
          <EuiButton onClick={() => { setSelectedTeam(team); setIsModalOpen(true); }}>Edit</EuiButton>
          <EuiButton color="danger" onClick={() => handleDelete(team.id)}>Delete</EuiButton>
        </>
      ),
    },
  ];

  const handleDelete = (id: string) => {
    setTeams(teams.filter(team => team.id !== id));
  };

  const handleSearch = (query: any) => {
    const { query: searchQuery } = query;
    setSearch(searchQuery || ''); // Default to an empty string if undefined
  };
  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

//   const handleCreateOrUpdateTeam = (teamData: Team) => {
//     if (selectedTeam) {
//       setTeams(teams.map(team => (team.id === selectedTeam.id ? teamData : team)));
//     } else {
//       setTeams([...teams, { ...teamData, id: `${teams.length + 1}`, avatar: 'https://i.pravatar.cc/150' }]);
//     }
//     setIsModalOpen(false);
//     setSelectedTeam(null);
//   };
const handleCreateOrUpdateTeam = (teamData: Team) => {
    if (selectedTeam) {
      setTeams(teams.map(team => (team.id === selectedTeam.id ? teamData : team)));
    } else {
      setTeams([...teams, teamData]); // Ensure teamData matches Team type
    }
  };
  
  return (
    <div>
      {/* <EuiSearchBar onChange={handleSearch} /> */}
      <EuiFieldSearch
        placeholder="Search teams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <EuiButton onClick={() => { setSelectedTeam(null); setIsModalOpen(true); }}>Add New Team</EuiButton>
      <EuiBasicTable
        items={filteredTeams}
        columns={columns}
        rowHeader="name"
      />
      <CreateTeamModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateOrUpdateTeam}
        selectedTeam={selectedTeam}
      />
    </div>
  );
};

