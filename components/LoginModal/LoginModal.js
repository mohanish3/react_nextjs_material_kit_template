import React from "react";
import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItem,
  Button,
  InputAdornment,
  Icon,
} from "@material-ui/core";

import CustomInput from "components/CustomInput/CustomInput.js";
import { People, Email } from "@material-ui/icons";
import Router from "next/router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function LoginModal(props) {
  const [modal, setModal] = React.useState(false);
  const { classes, register } = props;
  return (
    <>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={() => setModal(true)}
        >
          {register ? "Register" : "Login"}
        </Button>
      </ListItem>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <h3 className={classes.modalTitle}>
            {register ? "Register" : "Login"}
          </h3>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          {register ? (
            <CustomInput
              labelText="First Name..."
              id="first"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <></>
          )}
          <CustomInput
            labelText="Email..."
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "email",
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
          <CustomInput
            labelText="Password"
            id="pass"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "password",
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                </InputAdornment>
              ),
              autoComplete: "off",
            }}
          />
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
          <Button
            onClick={() => {
              setModal(false);
              Router.replace("/profile", "/", {email: 'xyz@abc.com'});
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
