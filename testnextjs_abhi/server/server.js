require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
app.use(express.json());
app.use(cors());

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// http://127.0.0.1:3001/api/url_param_view_check

app.get("/api/url_check", async (req, res) => {

    // console.log("url_check")
  
    res.send("Response From Database")
  
});

// http://13.233.23.99/api/url_param_view_check

app.get("/api/url_param_view_check", async (req, res) => {
    try {

      console.log("in url_param_view_check")

      const results = await db.query("SELECT id, list_code, dis_seq, print_name, notes FROM param");

      console.log("results.rows : ", results.rows)

      res.status(200).json({
        v_out_data: results.rows,
      });

    } catch (err) {
      console.log(err);
    }
});

const port = 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
