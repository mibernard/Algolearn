import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Moon, Sun, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import ChapterPage from '@/components/chapter';
import chapters, { Chapter } from '@/data/chapters';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const groupedChapters: Record<string, Chapter[]> = chapters.reduce((acc, chapter) => {
    if (!acc[chapter.language]) {
      acc[chapter.language] = [];
    }
    acc[chapter.language].push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className='bg-background text-foreground'>
          <nav className='border-b'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                  <Link to='/' className='flex-shrink-0'>
                    <img className='h-8 w-auto' src='/placeholder.svg?height=32&width=32' alt='Algorand Logo' />
                  </Link>
                  <div className='hidden md:block ml-10'>
                    <div className='flex items-baseline space-x-4'>
                      <div className='relative'>
                        <Input type='search' placeholder='Search docs...' className='w-64 pl-10' />
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant='ghost'>
                            Docs <ChevronDown className='ml-1 h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Getting Started</DropdownMenuItem>
                          <DropdownMenuItem>API Reference</DropdownMenuItem>
                          <DropdownMenuItem>SDKs</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant='ghost'>
                            Tutorials <ChevronDown className='ml-1 h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {Object.keys(groupedChapters).map((language) => (
                            <DropdownMenuItem key={language}>
                              <Link to={`/${language.toLowerCase()}`}>{language}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant='ghost'>
                            Ecosystem <ChevronDown className='ml-1 h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Projects</DropdownMenuItem>
                          <DropdownMenuItem>Partners</DropdownMenuItem>
                          <DropdownMenuItem>Community</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant='ghost'>
                            About <ChevronDown className='ml-1 h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Team</DropdownMenuItem>
                          <DropdownMenuItem>Careers</DropdownMenuItem>
                          <DropdownMenuItem>Contact</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label='Toggle dark mode'
                  >
                    {darkMode ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <Routes>
              <Route path='/:language/:chapterTitle' element={<ChapterPage />} />
              <Route path='/' element={<Welcome />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function Welcome() {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to the Algorand Developer Portal</h1>
      <p className='text-xl text-muted-foreground'>
        Explore our documentation and tutorials to start building with Algorand smart contracts.
      </p>
    </div>
  );
}
