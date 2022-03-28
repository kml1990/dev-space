import React from 'react';
import { Button } from '@mantine/core';
import { FaGithub } from 'react-icons/fa';

export type OnClick = () => void;

export interface GithubButtonProps {
  text?: string;
  onClick: OnClick;
}

const GithubButton: React.FC<GithubButtonProps> = ({ text = 'Sign in with GitHub', onClick }) => {
  return (
    <Button
      onClick={onClick}
      leftIcon={<FaGithub />}
      sx={theme => ({
        backgroundColor: theme.colors.dark[theme.colorScheme === 'dark' ? 9 : 6],
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.colors.dark[theme.colorScheme === 'dark' ? 9 : 6],
        },
        width: '100%'
      })}
    >
      {text}
    </Button>
  );
};

export default GithubButton;
