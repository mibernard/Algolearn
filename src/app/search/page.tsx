'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { chapters, Chapter } from '../../data/chapters';
import { Suspense } from 'react';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Chapter[]>([]);

  const getExcerpt = (content: string, maxLength: number = 150) => {
    const stripped = content.replace(/<[^>]+>/g, '');
    return stripped.length > maxLength ? stripped.substr(0, maxLength) + '...' : stripped;
  };

  useEffect(() => {
    const currentQuery = searchParams?.get('q') ?? '';
    setQuery(currentQuery);

    if (currentQuery) {
      const results = chapters.filter(
        (chapter) =>
          chapter.title.toLowerCase().includes(currentQuery.toLowerCase()) ||
          chapter.content.toLowerCase().includes(currentQuery.toLowerCase()) ||
          chapter.initialCode.toLowerCase().includes(currentQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchParams]);

  if (query === null) {
    return <div className='container mx-auto px-4 py-8'>Loading...</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Search Results for &quot;{query}&quot;</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {searchResults.length > 0 ? (
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {searchResults.map((result) => (
              <Link
                href={`/${result.language.toLowerCase()}/${result.title.toLowerCase().replace(/\s+/g, '-')}`}
                key={result.id}
                className='block hover:no-underline'
              >
                <Card className='h-full transition-shadow hover:shadow-md'>
                  <CardHeader>
                    <CardTitle>{result.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm mb-4'>Language: {result.language}</p>
                    <CardDescription className='overflow-hidden text-ellipsis'>
                      {getExcerpt(result.content)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className='text-center text-muted-foreground'>No results found for &quot;{query}&quot;</p>
        )}
      </Suspense>
    </div>
  );
}
