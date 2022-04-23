import "./App.css";
import Customer from "./components/Customer";

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
    <div>
      {customers.map((cus) => {
        return (
          <Customer
            key={cus.id}
            id={cus.id}
            image={cus.image}
            name={cus.name}
            birthday={cus.birthday}
            gender={cus.gender}
            job={cus.job}
          />
        );
      })}
    </div>
  );
}

export default App;
