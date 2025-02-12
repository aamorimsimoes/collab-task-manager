// import React from 'react';
// // import TaskList from './components/TaskList';
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import CreateTaskPage from './components/CreateTaskForm';
// import UpdateTaskPage from './components/UpdateTaskForm';
// import TaskList from './components/TaskList';

// const App: React.FC = () => {
//   const projectId = '5c3d1555-3c2d-4032-9c6e-35d7d20e5bd0';

//   return (
//     <Router>
//        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Task Manager App</h1>
//        <TaskList projectId={projectId} />
//        </div>
//       <div className="min-h-screen bg-gray-50 p-8">
//         <nav className="flex space-x-4 mb-6">
//           <Link to="/create-task" className="text-blue-500 hover:underline">
//             Create Task
//           </Link>
//           <Link to="/update-task" className="text-blue-500 hover:underline">
//             Update Task
//           </Link>
//         </nav>

//         <Routes>
//           <Route path="/create-task" element={<CreateTaskPage />} />
//           <Route path="/update-task" element={<UpdateTaskPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import CreateTaskPage from './pages/CreateTaskForm';
import UpdateTaskPage from './pages/UpdateTaskForm';
import TaskList from './components/TaskList';

const Navigation: React.FC = () => {
  const location = useLocation();

  // Hide navigation only on the root page "/"
  if (location.pathname === '/') return null;

  return (
    <nav className="flex space-x-4 mb-6">
      <Link to="/create-task" className="text-blue-500 hover:underline">
        Create Task
      </Link>
      <Link to="/update-task" className="text-blue-500 hover:underline">
        Update Task
      </Link>
      <Link to="/" className="text-blue-500 hover:underline">
        Home
      </Link>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-8">
        <Navigation />
        <Routes>
          <Route path="/" element={<TaskList projectId='5c3d1555-3c2d-4032-9c6e-35d7d20e5bd0' />} />
          <Route path="/create-task" element={<CreateTaskPage />} />
          <Route path="/update-task" element={<UpdateTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
