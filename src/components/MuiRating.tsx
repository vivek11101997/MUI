import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [rate, setRate] = useState<number | null>(null);
  console.log(rate);
  const handelChange = (
    event: React.ChangeEvent<{}>,
    newvalue: number | null
  ) => {
    setRate(newvalue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={rate}
        precision={0.5}
        size="large"
        onChange={handelChange}
        readOnly
      />

      <Rating
        value={rate}
        precision={1}
        size="large"
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" color="error"  />}
        onChange={handelChange}
        highlightSelectedOnly
        icon={<FavoriteIcon  color="secondary"/>}
      />
    </Stack>
  );
};

export default MuiRating;
