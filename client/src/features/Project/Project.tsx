import { Container } from '@material-ui/core'
import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from './styles'


import { ProjectProp } from '../../interfaces'
import { Link } from 'react-router-dom'

const Project = ({ project }: ProjectProp) => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.body}>
      <Stack direction='row' justifyContent='center' mt={3} position='r7elative'>
        <img src={project.img} alt="" className={classes.projectImg} />
        <Stack position='absolute' backgroundColor='rgba(0, 0, 0, 0.38)' color='#fff' p={1}>
          <Typography textTransform='capitalize' variant='h6'>{project.name}</Typography>
        </Stack>
      </Stack>
      <Stack direction='row' justifyContent='center' alignItems='center' mt={2} gap={8}>
        <Button variant='outlined'>
          <Typography textTransform='capitalize'>
            <a href='https://github.com/asahelcode' target="_blank" rel='noreferrer' style={{ textDecoration: 'none' }}>
              Github repo
            </a>
          </Typography>
        </Button>
        <Button variant='contained'>
          <Typography textAlign='center' textTransform='capitalize'><a href={project.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#fff' }}>demo</a></Typography>
        </Button>
      </Stack>
      <Stack direction='row' justifyContent='center' mt={3}>
        <Typography width='40ch' lineHeight='25px'>
          {project.description}
        </Typography>
      </Stack>

      <Stack direction='row' flexWrap='wrap' gap={1} mb={4} mt={1} justifyContent='center'>
        {
          project.technologies.map((technology) => <Button disabled variant='contained'><Typography textTransform='capitalize'>{technology}</Typography></Button>)
        }
      </Stack>
      <Stack direction='row' justifyContent='center'>
        <hr className={classes.bisector} />
      </Stack>
    </Container>
  )
}

export default Project