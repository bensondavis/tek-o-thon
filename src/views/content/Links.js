import { Container } from "reactstrap";
import ImageView from "./ImageView";
import { Stack } from "@mui/joy";
import { imgData } from "../data/ImgData";

function Links({ hideAppbar }) {
  return (
    <div className=" section section-basic" id="basic-elements">
      <Container style={{ textAlign: "center" }}>
        <Stack
          direction={{xs: "column", sm:"row", md: "row"}}
          spacing={{xs: 3, sm: 2, md: 4}}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {imgData.map((data, index) => (
            <ImageView img={data.img} title={data.title} hideAppbar={hideAppbar} key={index}/>
          ))}
        </Stack>
      </Container>
    </div>
  );
}

export default Links;
