// import React from 'react';
// import { TeamTable } from './components/TeamTable';
// import { EuiProvider } from '@elastic/eui';

// const App = () => {
//   return (
//     <EuiProvider>
//       <div className="app">
//         <h1>Team Management</h1>
//         <TeamTable />
//       </div>
//     </EuiProvider>
//   );
// };

// export default App;


import React from 'react';
import { TeamTable } from './components/TeamTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { EuiProvider } from '@elastic/eui';

const theme = createTheme();

const App = () => (
  <EuiProvider>
  <ThemeProvider theme={theme}>
    <div className="app">
      <h1>Team Management</h1>
      <TeamTable />
    </div>
  </ThemeProvider>
   </EuiProvider>
   
);

export default App;