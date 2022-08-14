/* eslint-disable array-callback-return */
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface ICommonDropDown {
    title: string;
    value: string[];
}

const CommonDropdown = ({ title, value }: ICommonDropDown) => (
    <FormControl sx={{ m: 1, minWidth: 120, fontSize: 16 }} size="small" className="formClass">
        <Select value={title} style={{ fontSize: "16px" }}>
            <MenuItem value={title}>
                <em>{title}</em>
            </MenuItem>
            {value.map((element) => (
                <MenuItem key={element} value={element}>
                    {element}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default CommonDropdown;
