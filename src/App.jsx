import AppLayout from './layouts/applayout/AppLayout'
import { ThemeProvider } from '@/components/themeSwitcher/ThemeSwitcher';

function App() {


  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
      
  )
}

export default App
