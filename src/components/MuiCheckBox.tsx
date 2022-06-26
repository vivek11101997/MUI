import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
} from "@mui/material";
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import React, { useState } from "react";

const MuiCheckBox = () => {
    const [accept, setAccept] = useState(false);
    const [skill, setSkill] = useState<string[]>([]);
    console.log(skill);
    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(e.target.checked);
    };

    const handelCHKChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = skill.indexOf(e.target.value);
        if (index == -1) {
            setSkill([...skill, e.target.value]);
        } else {
            setSkill(skill.filter((s) => s !== e.target.value));
        }
    };
    

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept Terms and condation"
                    control={
                        <Checkbox
                        // checked={accept} onChange={handelChange}
                        />
                    }
                ></FormControlLabel>
            </Box>

            <Box>
                <Checkbox
                    icon={<BookMarkBorderIcon />}
                    checkedIcon={<BookMarkIcon />}
                    checked={accept}
                    onChange={handelChange}
                />
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label="HTML"
                            control={
                                <Checkbox
                                    checked={skill.includes("html")}
                                    value="html"
                                    onChange={handelCHKChange}
                                />
                            }
                        ></FormControlLabel>

                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    checked={skill.includes("css")}
                                    value="css"
                                    onChange={handelCHKChange}
                                />
                            }
                        ></FormControlLabel>

                        <FormControlLabel
                            label="JS"
                            control={
                                <Checkbox
                                    checked={skill.includes("js")}
                                    value="js"
                                    onChange={handelCHKChange}
                                />
                            }
                        ></FormControlLabel>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
};

export default MuiCheckBox;
