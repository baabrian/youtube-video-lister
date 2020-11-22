import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

type SearchButtonProps = {
  submit: () => void;
};

export function SearchButton({ submit }: SearchButtonProps) {
  return (
    <IconButton onClick={submit}>
      <SearchIcon />
    </IconButton>
  );
}
