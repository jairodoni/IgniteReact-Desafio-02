import { useState } from 'react';
import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>, 
  selectedGenreId: number,
  setSelectedGenreId(selectedGenreId: number): void,
}

export function SideBar(props: SideBarProps) {

  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
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
