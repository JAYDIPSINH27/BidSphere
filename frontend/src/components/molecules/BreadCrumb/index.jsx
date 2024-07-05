import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import WorkIcon from '@mui/icons-material/Work';
import { useLocation, NavLink as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

export default function IconBreadcrumbs() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div role="presentation" onClick={(e) => { e.preventDefault(); }}>
      <Box style={{ margin: '1rem' }}>
        <div className="pTag">
          <Breadcrumbs aria-label="Breadcrumb">
            {
              pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last
                  ? (
                    <Typography
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="blue"
                    >
                      {value === 'home'
                        ? <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                        : <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />}
                      {value}
                    </Typography>
                  )
                  : (
                    <Link color="inherit" component={RouterLink} to={to}>
                      <Typography color={value === 'home' ? 'black' : 'green'} sx={{ display: 'flex', alignItems: 'center' }}>
                        {value === 'home'
                          ? <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                          : <WorkIcon sx={{ mr: 0.5 }} fontSize="inherit" />}
                        {value}
                      </Typography>
                    </Link>
                  );
              })
            }
          </Breadcrumbs>
        </div>
      </Box>
    </div>
  );
}
