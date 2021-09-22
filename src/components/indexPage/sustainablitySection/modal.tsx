import React, {
  Dispatch,
  FC,
  JSXElementConstructor,
  ReactElement,
  SetStateAction,
} from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import MuiModal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: theme.palette.background.default,
    },
    container: {
      '&:focus': {
        outline: `none`,
      },
    },
    iconButton: {
      display: `flex`,
      marginRight: '-16px',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
)

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined
}

const Modal: FC<Props> = ({ active, setActive, children }) => {
  const classes = useStyles()

  return (
    <MuiModal
      aria-labelledby='spring-modal-title'
      aria-describedby='spring-modal-description'
      className={classes.modal}
      open={active}
      onClose={() => setActive(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Container className={classes.container} maxWidth='sm'>
        <Box
          borderRadius='10px'
          className={classes.box}
          pb={5}
          pt={1}
          px={5}
          width='100%'
        >
          <Box display='flex' justifyContent='flex-end' width='100%'>
            <IconButton
              className={classes.iconButton}
              onClick={() => setActive(false)}
            >
              <CloseIcon color='primary' />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Container>
    </MuiModal>
  )
}

export default Modal
