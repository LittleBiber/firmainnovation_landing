import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalProvider } from './context/globalContext';
import Landing from './page/landing';
import NotFound from './page/notFound';

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/*" element={<NotFound />} /* Add 404 page later */ />
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
