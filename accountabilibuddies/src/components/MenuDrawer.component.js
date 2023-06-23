import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

/* Icons for the menu drawer */
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  /* each list item should be link to the corrisponding page */
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h2>AccountibiliBuddies</h2>
        <Divider />
        {['Home', 'Habits', 'Friends', 'Messages'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <a href={text}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <HomeRoundedIcon /> : index === 1 ? <AutoGraphIcon /> : index === 2 ? <GroupsIcon /> : <SendIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* auto populate list of friends from db */}
        {['Shannon', 'Rhya', 'Hunter'].map((friend, index) => (
          <ListItem key={friend} disablePadding>
            <a href={friend}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <PeopleAltIcon /> : <PeopleAltOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={friend} />
            </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}