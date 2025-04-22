import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Input,
  TableRow,
  Chip,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  MenuProps,
  PaperProps,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import TableContainer from "@mui/material/TableContainer";
import BlankCard from "../shared/BlankCard";
import { ThemeProvider } from "@emotion/react";

const products = [
  {
    id: "Table item title",
    name: "1",
    title: "Table item title",
    instruction: "Table item title",
    deadline: "Table item title",
    fileupload: "Table item title",
    status: "Table item title",
  },
  {
    id: "Table item title",
    name: "2",
    title: "Table item title",
    instruction: "Table item title",
    deadline: "Table item title",
    fileupload: "Table item title",
    status: "Table item title",
  },
  {
    id: "Table item title",
    name: "3",
    title: "Table item title",
    instruction: "Table item title",
    deadline: "Table item title",
    fileupload: "Table item title",
    status: "Table item title",
  },
  {
    id: "Table item title ",
    name: "4",
    title: "Table item title",
    instruction: "Table item title",
    deadline: "Table item title",
    fileupload: "Table item title",
    status: "Table item title",
  },
];

const TopPayingClients = () => {
  return (
    <div id="table">
      <DashboardCard title="Assignments">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            placeholder="Filter Lines"
            sx={{
              color: "white",
              border: "",
              borderRadius: "5px",
              paddingLeft: "5px",
            }}
          ></Input>
          <Select
            defaultValue=""
            displayEmpty
            variant="standard"
            sx={{
              height: "30px",
              width: "120px",
              borderRadius: "5px",
              padding: "5px",
              color: "white",
              backgroundColor: "#6c63ff",
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#6c63ff", // 💜 dropdown ka full background
                  color: "white", // text color
                  "& .MuiMenuItem-root": {
                    color: "white", // individual item text
                    "&:hover": {
                      backgroundColor: "#6c63ff", // hover color
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value="" sx={{ display: "none" }}>
              Columns
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </Box>
        <Box sx={{ overflow: "auto" }}>
          <Box
            mt={2}
            sx={{ width: "100%", display: "table", tableLayout: "fixed" }}
          >
            <Table
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      Tittle
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      Instruction
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      Deadline
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      File Upload/URL
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                        marginRight: "50px",
                      }}
                    >
                      Status
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.name}>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "white",
                        }}
                      >
                        {product.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              color: "white",
                            }}
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                              color: "white",
                            }}
                          >
                            {product.instruction}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        sx={{
                          fontWeight: 400,
                          color: "white",
                        }}
                      >
                        {product.deadline}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        sx={{
                          px: "4px",
                          backgroundColor: "#0d113b",
                          // color: "#fff",
                          color: "white",
                        }}
                        size="small"
                        label={product.fileupload}
                      ></Chip>
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      <Typography variant="h6">${product.status}k</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </DashboardCard>
    </div>
  );
};

export default TopPayingClients;
