// src/app/layout.tsx
'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { Moon, Sun, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import chapters, { Chapter } from '@/data/chapters';
import '@/styles/globals.css';

export default function Layout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const groupedChapters: Record<string, Chapter[]> = chapters.reduce((acc, chapter) => {
    if (!acc[chapter.language]) {
      acc[chapter.language] = [];
    }
    acc[chapter.language].push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

  return (
    <html lang='en' className={darkMode ? 'dark' : ''}>
      <head>
        <title>AlgoLearn</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className='min-h-screen bg-background text-foreground'>
        <nav className='border-b'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <Link href='/' className='flex-shrink-0'>
                <img className='h-8 w-auto' src='/placeholder.svg?height=32&width=32' alt='AlgoLearn Logo' />
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
                          <Link href={`/${language.toLowerCase()}`}>{language}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Toggle dark mode'
                aria-pressed={darkMode}
              >
                {darkMode ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
              </Button>
            </div>
          </div>
        </nav>
        <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>{children}</main>
      </body>
    </html>
  );
}
