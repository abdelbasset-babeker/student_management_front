import Dashbord from './pages/Dashbord'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'
import Classes from './pages/Classes'
import Expences from './pages/Expences'
import Setting from './pages/Setting'
import Layout from './components/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import StudentsIndex from './pages/Students/Index'
import StudentsCreate from './pages/Students/Create'
import StudentsEdit from './pages/Students/Edit'
import StudentsShow from './pages/Students/Show'





function App() {


  const theme = createTheme({

    root: {
      borderRadius: '50px'
    },

    palette: {
      primary: { main: "#7986cb" },
      secondary: { main: "#ffcc80" },
      error: { main: "#ffd54f" },
      info: { main: "#64b5f6" },
      warning: { main: "#e57373" },
      success: { main: "#69f0ae" },
    }
  });




  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Dashbord />} />
            {/* Students Routes */}
            <Route exact path="/students" element={<StudentsIndex />} />
            <Route exact path="/students/create" element={<StudentsCreate />} />
            <Route exact path="/students/show" element={<StudentsShow />} />
            <Route exact path="/students/edit" element={<StudentsEdit />} />
            {/* Courses Routes */}
            <Route exact path="/courses" element={<Courses />} />
            {/* Teachers Routes */}
            <Route exact path="/teachers" element={<Teachers />} />
            <Route exact path="/classes" element={<Classes />} />
            <Route exact path="/expences" element={<Expences />} />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
