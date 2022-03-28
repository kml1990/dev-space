import React, { useState } from 'react';
import { Navbar as MantineNavbar, Center, Tooltip, UnstyledButton, createStyles, Group } from '@mantine/core';

import { VscHome, VscSignOut, VscChecklist  } from "react-icons/vsc";
import { IconType } from 'react-icons';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    },
  },
}));

interface NavbarLinkProps {
  icon: IconType;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size={'1.25em'} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: VscHome, label: 'Home' },
  { icon: VscChecklist, label: 'Todos' },
];

export interface NavbarProps {
  onSignOut: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignOut }) => {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <MantineNavbar height={'100vh'} width={{ base: 80 }} p="md">
      <Center>
        Logo
      </Center>
      <MantineNavbar.Section grow mt={50}>
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <NavbarLink onClick={onSignOut} icon={VscSignOut} label="Logout" />
        </Group>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

export default Navbar;