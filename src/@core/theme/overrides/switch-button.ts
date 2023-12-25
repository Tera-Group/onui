// ** Type Import
import { OwnerStateThemeType } from ".";

const SwitchButton = () => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          width: theme.spacing(4.5),
          height: theme.spacing(2.5),
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: "2px 3px",
            "&.Mui-checked": {
              transform: `translateX(${theme.spacing(1.75)})`,
              color: theme.palette.common.white,
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.successColor600.main,
                opacity: 1,
                border: 0,
              },
            },
            "&.Mui-disabled": {
              color: theme.palette.grey[50],
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.grey[50],
                opacity: 1,
              },
              "&.Mui-checked": {
                "& + .MuiSwitch-track": {
                  backgroundColor: theme.palette.successColor200.main,
                },
              },
            },
            "&:hover": {
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.grey[200],
              },
              "&.Mui-checked": {
                "& + .MuiSwitch-track": {
                  backgroundColor: theme.palette.successColor700.main,
                },
              },
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow:
              "0px 1px 2px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.10)",
            boxSizing: "border-box",
            width: theme.spacing(2),
            height: theme.spacing(2),
          },
          "& .MuiSwitch-track": {
            borderRadius: theme.spacing(2),
            backgroundColor: theme.palette.grey[100],
            opacity: 1,
          },
        }),
      },
    },
  };
};

export default SwitchButton;
