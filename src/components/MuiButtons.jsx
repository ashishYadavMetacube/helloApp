import { Stack, Button, IconButton, Icon, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Send from "@mui/icons-material/Send";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatUnderlined from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
export const MuiButtons = () => {
    const [formats, setFormats] = useState([])
    const handleFormatChange = (e, updatedFormats) => {
        console.log(updatedFormats)
        setFormats(updatedFormats)

    }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="text">Text Button</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<Send></Send>}>
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<Send></Send>}
          disableElevation
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>
        <IconButton color="success" size="large">
          {" "}
          <Send></Send>
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="large">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup value={formats} onChange={handleFormatChange} size='large' color='success' exclusive>
            <ToggleButton value='bold'><FormatBold /></ToggleButton>
            <ToggleButton value='italic'><FormatItalic /></ToggleButton>
            <ToggleButton value='underlined'><FormatUnderlined /></ToggleButton>
        </ToggleButtonGroup>

      </Stack>
    </Stack>
  );
};
