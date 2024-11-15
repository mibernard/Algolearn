'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Moon, Sun, ChevronDown, Search, BookCheck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { chapters, Chapter } from '@/data/chapters';
import '@/styles/globals.css';
import Image from 'next/image';

export default function Layout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const groupedChapters: Record<string, Chapter[]> = chapters.reduce((acc, chapter) => {
    if (!acc[chapter.language]) {
      acc[chapter.language] = [];
    }
    acc[chapter.language].push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <html lang='en' className={`${darkMode ? 'dark' : ''} h-full`}>
      <head>
        <title>AlgoLearn</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className='min-h-screen bg-background text-foreground'>
        <nav className='sticky top-0 z-50 bg-background border-b'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <Link href='/' className='flex-shrink-0'>
                <Image
                  src={darkMode ? '/images/AlgolearnWhite.png' : '/images/AlgolearnBlack.png'}
                  alt='AlgoLearn Logo'
                  width={150}
                  height={150}
                  priority
                />
              </Link>
              <div className='hidden md:block ml-10'>
                <div className='flex items-baseline space-x-4'>
                  <form onSubmit={handleSearch} className='relative'>
                    <Input
                      type='search'
                      placeholder='Search docs...'
                      className='w-64 pl-10'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                    <Button type='submit' className='sr-only'>
                      Search
                    </Button>
                  </form>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost'>
                        Tutorials <ChevronDown className='ml-1 h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {Object.keys(groupedChapters).map((language) => (
                        <DropdownMenuItem asChild key={language}>
                          <Link href={`/${language.toLowerCase()}`} className='block w-full h-full cursor-pointer'>
                            {language}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost'>
                        Docs <ChevronDown className='ml-1 h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href={`/python/getting-started-with-algorand`}>Getting Started</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>API Reference</DropdownMenuItem>
                      <DropdownMenuItem>SDKs</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className='space-x-0 flex'>
                <div className='md:hidden'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon' aria-label='Docs'>
                        <FileText size={10} strokeWidth={2.5} />
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
                      <Button variant='ghost' size='icon' aria-label='Tutorials'>
                        <BookCheck size={1} strokeWidth={2.5} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {Object.keys(groupedChapters).map((language) => (
                        <DropdownMenuItem asChild key={language}>
                          <Link href={`/${language.toLowerCase()}`} className='block w-full h-full cursor-pointer'>
                            {language}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label='Toggle dark mode'
                  aria-pressed={darkMode}
                >
                  {darkMode ? <Sun size={10} strokeWidth={2.5} /> : <Moon size={10} strokeWidth={2.5} />}
                </Button>
              </div>
            </div>
          </div>
        </nav>
        {/* <main className='flex-1'>{children}</main> */}
        <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>{children}</main>
      </body>
    </html>
  );
}
