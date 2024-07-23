import Guest from "./components/Guest";
import Lorem from "./components/Lorem";
import AddTransaction from "./components/AddTransaction";
import { currentUser } from "@clerk/nextjs/server";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();
  if (!user) {
    return (<>
      <section>
        <Guest />
      </section>
      <Lorem />
    </>
    )
  }

  return (
    <>
      <h1 className="h1-center">Expense Tracker </h1>
      <h2 className="h2-center">Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </>

  )
}
export default HomePage;