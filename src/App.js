import "./App.css";
import Customer from "./components/Customer";

const customer = {
  name: "김철수",
  birthday: "901231",
  gender: "남",
  job: "디자이너",
};

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
