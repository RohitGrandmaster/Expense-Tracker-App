import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

function Expense() {
  const currentDate = new Date().toLocaleString();

const [addExpense,setaddExpense] = useState ([]);
const [inputExpense,setinputExpense] = useState ({
  inputname:'',
  inputAmt:''
})

const handleChange = (e) => {
 const {name,value} = e.target;
 setinputExpense({...inputExpense,[name]:value});

}
const handleAdd = (e) => {
  // e.perventDefault();

  setaddExpense([...addExpense,inputExpense])
  console.log(addExpense)

}
 const handleClear = () => {
  setinputExpense({
    inputname:'',
    inputAmt:''
  })

 }
const handleDelete = (myindex) => {
  const updatedItems = addExpense.filter((_, index) => index !== myindex);
  setaddExpense(updatedItems);
};



  return (
    <div>
      <Card
        style={{
          width: "85rem",
          height: "40rem",
          border: "2px solid",
          position: "absolute",
          left: "18px",
        }}
        className="bg-teal-50"
      >
        <Card.Body>
          <div className="text-4xl font-bold text-center bg-blue-900 text-white absolute top-0 right-0 w-full">
            MONEY SPACE
          </div>
          <br />
          <br />
          <br />
          <div className="box-content h-60 w-9/12 p-4 border-4 absolute right-36">
            <div className=" font-bold text-center bg-blue-900 text-white absolute top-0 right-0 w-full h-7 ">
              MONEY EXPENSES
            </div>
            <div className="font-bold text-center">
              <br />
              EXPENSESS TOTAL <br /> Amt - 1000
            </div>
            <p className="font-bold">
              {" "}
              Current Date <span style={{ marginLeft: "57px" }} />
              {currentDate}{" "}
            </p>
            <br />
            <form className="font-bold">
              Expense Name <span style={{ marginLeft: "46px" }} />
              <input
                type="text"
                name="inputname"
                value={inputExpense.inputname}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-10/12 border-4"
              />
              <br />
              <br />
              Expense Amount <span style={{ marginLeft: "29px" }} />
              <input
                type="number"
                name="inputAmt"
                value={inputExpense.inputAmt}
                onChange={handleChange}
                placeholder="Enter your amount"
                className="w-10/12 border-4"
              />
                <Button onClick={handleAdd} className="bg-green-600 absolute right-52 bottom-1 font-bold">
              ADD EXPENSE
            </Button>
            <Button onClick={handleClear} className="bg-blue-600 absolute right-8 bottom-1 font-bold">
              CLEAR EXPENSE
            </Button>
            </form>
          
          </div>
          <br />
          <div className="box-content h-36 w-9/12 p-4 border-4 absolute left-36 bottom-3">
            <div className=" font-bold bg-blue-900 text-white absolute top-0 right-0 w-full h-7 ">
              <span style={{ marginLeft: "5%" }} /> EXPENSE{" "}
              <span style={{ marginLeft: "35%" }} /> AMOUNT{" "}
              <span style={{ marginRight: "30%" }} /> DELETE
            </div><br/>
            <div>
              {addExpense.map((item, index) => (
                <div key={index}>
                  <div>
                    <p>  <span style={{ marginLeft: "2%" }} />{item.inputname}<span style={{ marginLeft: "27%" }} />{item.inputAmt}</p>
                    <span style={{ marginRight: "86%" }} />
                    <Button
                      className="bg-red-600"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                    <DeleteIcon /> 
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Expense;
