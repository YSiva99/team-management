// // import React, { useState, useEffect } from 'react';
// // import {
// //   Modal,
// //   Box,
// //   TextField,
// //   Button,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// // } from '@mui/material';
// // import { Team } from '../data/teamsData';

// // interface CreateTeamModalProps {
// //   open: boolean;
// //   onClose: () => void;
// //   onCreate: (teamData: Team) => void;
// //   selectedTeam: Team | null;
// // }

// // const CreateTeamModal: React.FC<CreateTeamModalProps> = ({ open, onClose, onCreate, selectedTeam }) => {
// //   const [teamName, setTeamName] = useState<string>('');
// //   const [selectedDivision, setSelectedDivision] = useState<string>('');
// //   const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

// //   useEffect(() => {
// //     if (selectedTeam) {
// //       setTeamName(selectedTeam.name);
// //       setSelectedDivision(selectedTeam.divisions.toString());
// //       setSelectedMembers(Array(selectedTeam.members).fill('')); // Placeholder for members
// //     } else {
// //       setTeamName('');
// //       setSelectedDivision('');
// //       setSelectedMembers([]);
// //     }
// //   }, [selectedTeam]);

// //   const handleSubmit = () => {
// //     const teamData: Team = {
// //       id: selectedTeam ? selectedTeam.id : `${Date.now()}`,
// //       name: teamName,
// //       avatar: 'https://i.pravatar.cc/150', // Placeholder avatar
// //       members: selectedMembers.length,
// //       divisions: Number(selectedDivision),
// //     };
// //     onCreate(teamData);
// //     onClose();
// //   };

// //   return (
// //     <Modal open={open} onClose={onClose}>
// //       <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '100px', borderRadius: 2 }}>
// //         <h2>{selectedTeam ? 'Edit Team' : 'Create New Team'}</h2>
// //         <TextField
// //           fullWidth
// //           label="Team Name"
// //           variant="outlined"
// //           value={teamName}
// //           onChange={(e) => setTeamName(e.target.value)}
// //         />
// //         <FormControl fullWidth sx={{ marginTop: 2 }}>
// //           <InputLabel>Parent Division</InputLabel>
// //           <Select
// //             value={selectedDivision}
// //             onChange={(e) => setSelectedDivision(e.target.value)}
// //             label="Parent Division"
// //           >
// //             <MenuItem value={1}>Division 1</MenuItem>
// //             <MenuItem value={2}>Division 2</MenuItem>
// //             <MenuItem value={3}>Division 3</MenuItem>
// //           </Select>
// //         </FormControl>
// //         <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
// //           <Button variant="outlined" onClick={onClose}>
// //             Cancel
// //           </Button>
// //           <Button variant="contained" onClick={handleSubmit}>
// //             {selectedTeam ? 'Update' : 'Create'}
// //           </Button>
// //         </Box>
// //       </Box>
// //     </Modal>
// //   );
// // };

// // export default CreateTeamModal;
// import React, { useState, useEffect } from 'react';
// import {
//   Modal,
//   Box,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import { Team } from '../data/teamsData';

// interface CreateTeamModalProps {
//   open: boolean;
//   onClose: () => void;
//   onCreate: (teamData: Team) => void;
//   selectedTeam: Team | null;
// }

// const memberOptions = [
//   'Alice',
//   'Bob',
//   'Charlie',
//   'David',
//   'Eva',
//   'Frank',
//   // Add more members as necessary
// ];

// const CreateTeamModal: React.FC<CreateTeamModalProps> = ({ open, onClose, onCreate, selectedTeam }) => {
//   const [teamName, setTeamName] = useState<string>('');
//   const [selectedDivision, setSelectedDivision] = useState<string>('');
//   const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

//   useEffect(() => {
//     if (selectedTeam) {
//       setTeamName(selectedTeam.name);
//       setSelectedDivision(selectedTeam.divisions.toString());
//       setSelectedMembers(Array(selectedTeam.members).fill('')); // Placeholder for members
//     } else {
//       setTeamName('');
//       setSelectedDivision('');
//       setSelectedMembers([]);
//     }
//   }, [selectedTeam]);

//   const handleSubmit = () => {
//     const teamData: Team = {
//       id: selectedTeam ? selectedTeam.id : `${Date.now()}`,
//       name: teamName,
//       avatar: 'https://i.pravatar.cc/150', // Placeholder avatar
//       members: selectedMembers.length,
//       divisions: Number(selectedDivision),
//     };
//     onCreate(teamData);
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '100px', borderRadius: 2 }}>
//         <h2>{selectedTeam ? 'Edit Team' : 'Create New Team'}</h2>
//         <TextField
//           fullWidth
//           label="Team Name"
//           variant="outlined"
//           value={teamName}
//           onChange={(e) => setTeamName(e.target.value)}
//         />
//         <FormControl fullWidth sx={{ marginTop: 2 }}>
//           <InputLabel>Parent Division</InputLabel>
//           <Select
//             value={selectedDivision}
//             onChange={(e) => setSelectedDivision(e.target.value)}
//             label="Parent Division"
//           >
//             <MenuItem value={1}>Division 1</MenuItem>
//             <MenuItem value={2}>Division 2</MenuItem>
//             <MenuItem value={3}>Division 3</MenuItem>
//           </Select>
//         </FormControl>
        
//         <Autocomplete
//           multiple
//           options={memberOptions}
//           value={selectedMembers}
//           onChange={(event, newValue) => setSelectedMembers(newValue)}
//           renderInput={(params) => (
//             <TextField {...params} variant="outlined" label="Team Members" placeholder="Select members" />
//           )}
//           sx={{ marginTop: 2 }}
//         />
        
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
//           <Button variant="outlined" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button variant="contained" onClick={handleSubmit}>
//             {selectedTeam ? 'Update' : 'Create'}
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default CreateTeamModal;
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { Team } from '../data/teamsData';

interface CreateTeamModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (teamData: Team) => void;
  selectedTeam: Team | null;
}

const memberOptions = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eva',
  'Frank',
  // Add more members as necessary
];

const CreateTeamModal: React.FC<CreateTeamModalProps> = ({ open, onClose, onCreate, selectedTeam }) => {
  const [teamName, setTeamName] = useState<string>('');
  const [selectedDivision, setSelectedDivision] = useState<string>('');
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  useEffect(() => {
    if (selectedTeam) {
      setTeamName(selectedTeam.name);
      setSelectedDivision(selectedTeam.divisions.toString());
      setSelectedMembers(selectedTeam.members.map(member => member.name)); // Map existing members to their names
    } else {
      setTeamName('');
      setSelectedDivision('');
      setSelectedMembers([]);
    }
  }, [selectedTeam]);

  const handleSubmit = () => {
    const teamData: Team = {
      id: selectedTeam ? selectedTeam.id : `${Date.now()}`,
      name: teamName,
      avatar: 'https://i.pravatar.cc/150', // Placeholder avatar
      members: selectedMembers.map(name => ({ name })), // Convert selected members to objects
      divisions: Number(selectedDivision),
    };
    onCreate(teamData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '100px', borderRadius: 2 }}>
        <h2>{selectedTeam ? 'Edit Team' : 'Create New Team'}</h2>
        <TextField
          fullWidth
          label="Team Name"
          variant="outlined"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel>Parent Division</InputLabel>
          <Select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            label="Parent Division"
          >
            <MenuItem value={1}>Division 1</MenuItem>
            <MenuItem value={2}>Division 2</MenuItem>
            <MenuItem value={3}>Division 3</MenuItem>
            <MenuItem value={4}>Division 4</MenuItem>
          </Select>
        </FormControl>
        
        <Autocomplete
          multiple
          options={memberOptions}
          value={selectedMembers}
          onChange={(event, newValue) => setSelectedMembers(newValue)}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Team Members" placeholder="Select members" />
          )}
          sx={{ marginTop: 2 }}
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            {selectedTeam ? 'Update' : 'Create'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateTeamModal;
