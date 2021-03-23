import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { GenreResponseProps } from '../types'

import { api } from '../services/api';

import '../styles/sidebar.scss';


interface SideBarProps {
  selectedGenreId: number,
  setSelectedGenreId(selectedGenreId: number): void,
}

export function SideBar(props: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
                <Button
                  id={String(genre.id)}
                  title={genre.title}
                  iconName={genre.name}
                  onClick={() => handleClickButton(genre.id)}
                  selected={props.selectedGenreId === genre.id}
                />
          ))}
        </div>

      </nav>
    </div>
  )
}
