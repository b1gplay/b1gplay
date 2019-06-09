import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import NotificationList from "../Notifications/NotificationList";

const styles = theme => ({});

function PopoverPopupState(props) {
  const { classes } = props;

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <IconButton color="inherit" {...bindTrigger(popupState)}>
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <NotificationList />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

PopoverPopupState.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PopoverPopupState);
