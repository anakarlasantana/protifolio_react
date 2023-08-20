import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import ProjectsAll from '../pages/ProjectsAll';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/project' element={<Projects/> } />
            <Route path='/skills' element={<Skills/> } />
            <Route path='/about-me' element={<AboutMe/> } />
            <Route path='/contact' element={<Contact/> } />
            <Route path='/project-all' element={<ProjectsAll/> } />


        
            <Route path='*' element={<Navigate to='/Home' />} />
        </Routes>
    );
}

export default AppRoutes;