import { Button, Container, Row, Col } from "reactstrap";
import { CssVarsProvider } from "@mui/joy/styles";
import { useState } from "react";
import ImageView from "./ImageView";
import { Grid } from "@mui/joy";

function Schedule() {
  const [openView, setOpenView] = useState(false);
  const [imgType, setImgType] = useState("");

  const handleOpenViewer = (val) => {
    setOpenView(true);
    switch (val) {
      case 1:
        setImgType("poster");
        break;
      case 2:
        setImgType("guidelines");
        break;
      case 3:
        setImgType("schedule");
        break;
    }
  };

  const handleViewerOnClose = (val) => {
    setOpenView(val);
  };

  return (
    <div className=" section section-tabs">
      <Container style={{ textAlign: "center" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{maxHeigth: "90vh"}}
      >
        <Grid item>
          <Button color="primary" style={{width: "10rem"}} onClick={() => handleOpenViewer(1)}>
            Poster
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" style={{width: "10rem"}} onClick={() => handleOpenViewer(2)}>
            Guidlines
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" style={{width: "10rem"}} onClick={() => handleOpenViewer(3)}>
            Schedule
          </Button>
        </Grid>
      </Grid>
      </Container>
      <CssVarsProvider>
        <ImageView
          imgType={imgType}
          open={openView}
          onClose={handleViewerOnClose}
        />
      </CssVarsProvider>
    </div>
  );
}

export default Schedule;
