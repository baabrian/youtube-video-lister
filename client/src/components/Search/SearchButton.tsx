import React, { FormEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

type SearchButtonProps = {
  submit: (event: FormEvent) => void;
};

export function SearchButton({ submit }: SearchButtonProps) {
  return (
    <IconButton onClick={submit}>
      <SearchIcon />
    </IconButton>
  );
}
