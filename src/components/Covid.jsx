import React from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Covid extends React.Component {
  constructor() {
    super();
    this.state = {
      ShowName: []
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/help/countries",
      headers: {
        "x-rapidapi-key": "1aac26b5e4msh3e08c1c4eb19f2dp17b15ejsn1eee511142fe",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({
          ShowName: response.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Country Name</TableCell>
              <TableCell align="right">Alpha Tow Code</TableCell>
              <TableCell align="right">Alpha Three Code</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">longitude</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.ShowName.map((covid) => (
              <TableRow key={covid.name}>
                <TableCell component="th" scope="row">
                  {covid.name}
                </TableCell>
                <TableCell align="right">{covid.alpha2code}</TableCell>
                <TableCell align="right">{covid.alpha3code}</TableCell>
                <TableCell align="right">{covid.latitude}</TableCell>
                <TableCell align="right">{covid.longitude}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Covid;
