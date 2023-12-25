import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Grid, Stack, Switch as SwitchButton } from "@mui/material";
import { OnDisplay, OnText } from "../../shared";

export default {
  title: "MUI/Switch",
  component: SwitchButton,
} as Meta<typeof SwitchButton>;

const Template: StoryFn<typeof SwitchButton> = (args) => (
  <SwitchButton {...args} />
);

export const Playground: StoryFn<typeof SwitchButton> = () => (
  <Grid container maxWidth={500}>
    <Grid item xs={6} sx={{ paddingX: 3 }}>
      <OnDisplay size="xs">Size = small</OnDisplay>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>Off: </OnText>
        <SwitchButton />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>On: </OnText>
        <SwitchButton checked />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>Disabled Off: </OnText>
        <SwitchButton disabled />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>Disabled On: </OnText>
        <SwitchButton checked disabled />
      </Stack>
    </Grid>
    <Grid item xs={6} sx={{ paddingX: 3 }}>
      <OnDisplay size="xs">Size = medium</OnDisplay>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>Off: </OnText>
        <SwitchButton />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>On: </OnText>
        <SwitchButton checked />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>Disabled Off: </OnText>
        <SwitchButton disabled />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <OnText>Disabled On: </OnText>
        <SwitchButton checked disabled />
      </Stack>
    </Grid>
  </Grid>
);
