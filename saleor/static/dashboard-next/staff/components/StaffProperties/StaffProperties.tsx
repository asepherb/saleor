import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import CardTitle from "../../../components/CardTitle";
import Skeleton from "../../../components/Skeleton";
import i18n from "../../../i18n";
import { maybe } from "../../../misc";
import { StaffMemberDetails_user } from "../../types/StaffMemberDetails";

interface StaffPropertiesProps {
  className?: string;
  staffMember: StaffMemberDetails_user;
}

const decorate = withStyles(theme => ({
  avatar: {
    alignItems: "center" as "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "100%",
    display: "grid" as "grid",
    height: 120,
    justifyContent: "center" as "center",
    width: 120
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 64,
    pointerEvents: "none" as "none"
  },
  prop: {
    marginBottom: theme.spacing.unit * 2 + "px"
  },
  propGrid: {
    display: "grid" as "grid",
    gridColumnGap: theme.spacing.unit * 2 + "px",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  root: {
    display: "grid" as "grid",
    gridColumnGap: theme.spacing.unit * 4 + "px",
    gridTemplateColumns: "120px 1fr"
  }
}));
const StaffProperties = decorate<StaffPropertiesProps>(
  ({ classes, className, staffMember }) => (
    <Card className={className}>
      <CardTitle title={i18n.t("Staff Member Information")} />
      <CardContent>
        <div className={classes.root}>
          <div>
            <div className={classes.avatar}>
              <Typography className={classes.avatarText}>
                {maybe(
                  () =>
                    `${staffMember.firstName[0].toUpperCase()}${staffMember.lastName[0].toUpperCase()}`
                ) || ""}
              </Typography>
            </div>
          </div>
          <div>
            <div className={classes.propGrid}>
              <div className={classes.prop}>
                <Typography variant="body2">{i18n.t("First Name")}</Typography>
                {maybe(() => staffMember.firstName) === undefined ? (
                  <Skeleton />
                ) : (
                  <Typography>{staffMember.firstName}</Typography>
                )}
              </div>
              <div className={classes.prop}>
                <Typography variant="body2">{i18n.t("Last Name")}</Typography>
                {maybe(() => staffMember.lastName) === undefined ? (
                  <Skeleton />
                ) : (
                  <Typography>{staffMember.lastName}</Typography>
                )}
              </div>
              <div className={classes.prop}>
                <Typography variant="body2">{i18n.t("E-mail")}</Typography>
                {maybe(() => staffMember.email) === undefined ? (
                  <Skeleton />
                ) : (
                  <Typography>{staffMember.email}</Typography>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
);
StaffProperties.displayName = "StaffProperties";
export default StaffProperties;
