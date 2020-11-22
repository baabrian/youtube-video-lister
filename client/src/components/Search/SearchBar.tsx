import React, { ChangeEvent, useState } from 'react';
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

  const [search, updateSearch] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    updateSearch(event.target.value);
  };

  const onSubmit = (): void => {
    console.log(search);
  };

  return (
    <TextField
      id='standard-name'
      className={classes.root}
      label='search'
      value={search}
      onChange={handleChange}
      InputProps={{ endAdornment: <SearchButton submit={onSubmit} /> }}
    />
  );
}
