import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideos } from '../../redux/actions';
import { SearchButton } from './SearchButton';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: '10px',
      marginTop: '10px',
      width: '100%',
    },
  })
);

export function SearchBar(): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [search, updateSearch] = useState('');
  const [isEmptySearch, setEmptySearch] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    updateSearch(event.target.value);
  };

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (search) {
      setEmptySearch(false);
      dispatch(searchVideos(search));
    } else {
      setEmptySearch(true);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id='standard-name'
        className={classes.root}
        label='search'
        value={search}
        error={isEmptySearch}
        helperText={isEmptySearch ? 'Empty Search Field' : ''}
        onChange={handleChange}
        InputProps={{ endAdornment: <SearchButton submit={onSubmit} /> }}
      />
    </form>
  );
}
