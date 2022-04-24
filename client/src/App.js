import "./App.css";
import Customer from "./components/Customer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const customers = [
  {
    id: 123,
    image: "https://placeimg.com/128/128/1",
    name: "김철수",
    birthday: "901231",
    gender: "남",
    job: "디자이너",
  },
  {
    id: 456,
    image: "https://placeimg.com/128/128/2",
    name: "나영희",
    birthday: "941130",
    gender: "여",
    job: "기획자",
  },
  {
    id: 789,
    image: "https://placeimg.com/128/128/3",
    name: "이종길",
    birthday: "910101",
    gender: "남",
    job: "프로그래머",
  },
];

function App() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1440 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>회원번호</StyledTableCell>
            <StyledTableCell>이미지</StyledTableCell>
            <StyledTableCell>이름</StyledTableCell>
            <StyledTableCell>생년월일</StyledTableCell>
            <StyledTableCell>성별</StyledTableCell>
            <StyledTableCell>직업</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        {customers.map((cus) => {
          return (
            <TableBody>
              <Customer
                key={cus.id}
                id={cus.id}
                image={cus.image}
                name={cus.name}
                birthday={cus.birthday}
                gender={cus.gender}
                job={cus.job}
              />
            </TableBody>
          );
        })}
      </Table>
    </TableContainer>
  );
}

export default App;
