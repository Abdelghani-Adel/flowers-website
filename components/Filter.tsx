"use client";
import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const Filter = () => {
  const [sort, setSort] = React.useState<string>("availability");

  const handleSortChange = (event: any) => {
    setSort(event.target.value as string);
  };

  return (
    <div className="p-4 max-w-xs">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>

      {/* Sort by Dropdown */}
      <FormControl fullWidth variant="outlined" className="mb-4">
        <InputLabel>Sort by</InputLabel>
        <Select value={sort} label="Sort by" onChange={handleSortChange}>
          <MenuItem value="availability">Availability</MenuItem>
          <MenuItem value="price_low_high">Price: Low to High</MenuItem>
          <MenuItem value="price_high_low">Price: High to Low</MenuItem>
          <MenuItem value="best_selling">Best Selling</MenuItem>
        </Select>
      </FormControl>

      {/* Filter by Color */}
      <h3 className="text-lg font-semibold mb-2">Filter By Color</h3>
      <FormGroup>
        {["Red", "White", "Rose", "Purple", "Yellow", "Orange", "Fuchsia"].map((color) => (
          <FormControlLabel
            key={color}
            control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
            label={color}
            sx={{ ".MuiFormControlLabel-label": { fontSize: "0.875rem" } }}
          />
        ))}
      </FormGroup>

      {/* Filter by Price */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Filter By Price</h3>
      <FormGroup>
        {["$", "$$", "$$$"].map((price, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox sx={{ transform: "scale(0.8)" }} />} // Make checkbox smaller
            label={price}
            sx={{ ".MuiFormControlLabel-label": { fontSize: "0.875rem" } }} // Make label smaller
          />
        ))}
      </FormGroup>

      {/* Filter by Flower */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Filter By Flower</h3>
      <FormGroup>
        {["Roses", "Lilies", "Baby Orchid", "Spider"].map((flower) => (
          <FormControlLabel
            key={flower}
            control={<Checkbox sx={{ transform: "scale(0.8)" }} />} // Make checkbox smaller
            label={flower}
            sx={{ ".MuiFormControlLabel-label": { fontSize: "0.875rem" } }} // Make label smaller
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Filter;
