import React, { useState } from "react";
import { Box, Button, ImageList, ImageListItem } from "@mui/material";

import Paper from "../../components/PaperBox/PaperBox";

export default function Gallery() {
  const [itemData, setItemData] = useState([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("https://www.reddit.com/r/CarPorn.json")
      .then((res) => res.json())
      .then((res) => res.data.children)
      .then((res) =>
        res.map((res: any) => ({
          data: res.data,
        }))
      )
      .then((res) => res.map((res: any) => ({ post: res.data })))
      .then((res) => setItemData(res));
  };

  return (
    <Paper title="Gallery" subTitle="Car Pictures..">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 10 }}>
          Get Pictures
        </Button>

        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData &&
            itemData.map((item: any) => (
              <ImageListItem key={item.post.id}>
                <img
                  src={`${item.post.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.post.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.post.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </Paper>
  );
}
