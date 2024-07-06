import { useNavigate } from 'react-router-dom'
import './MonthlyStatementPage.css'
import {revenues} from "../../seeds/dbMock/revenues"
import {expenses} from "../../seeds/dbMock/expenses"
import { useState } from 'react'

const MonthlyStatementPage = () => {
    const navigate = useNavigate()
    const [revenuesState] = useState(revenues)
    const [expensesState] = useState(expenses)
    
    let sumRevenues = 0.0
    let sumExpenses = 0.0
    
    const goToHome = () => {
        return navigate("/")
    }

    return (
        <div className='monthlyStatementWrapper'>
            <div className='monthlyStatementContent'>
                <div className='monthlyStatementRevenues'>
                    <h3 className='monthlyStatementSubTitle'>Revenues</h3>
                    <div className="monthlyStatementRevenuesWrapper">                    
                        <div className="monthlyStatementContentHeader">                    
                            <div className='monthlyStatementContentDescription'>Description</div>
                            <div className='monthlyStatementContentValue'>Value</div>
                            <div className='monthlyStatementContentDate'>Date</div>
                        </div>                        
                        {revenuesState.map((revenue, index) => {
                             sumRevenues += revenue.value

                            return(
                                <div className="monthlyStatementContentBody" key={index}>                                                                
                                    <div className='monthlyStatementContentDescription'>{revenue.description}</div>
                                    <div className='monthlyStatementContentValue'>{revenue.value.toFixed(2)}</div>
                                    <div className='monthlyStatementContentDate'>{revenue.date}</div>
                                </div>
                            )
                        })}
                        <div className='monthlyStatementTotalWrapper'>
                            <div className='monthlyStatementContentTotalDescription'>TOTAL</div>
                            <div className='monthlyStatementContentTotalValue'>{'R$' + sumRevenues.toFixed(2)}</div>
                        </div>                            
                    </div>
                </div>
                <div className='monthlyStatementExpenses'>
                    <h3 className='monthlyStatementSubTitle'>Expenses</h3>
                    <div className="monthlyStatementExpensesWrapper">
                    <div className="monthlyStatementContentHeader">                    
                        <div className='monthlyStatementContentDescription'>Description</div>
                        <div className='monthlyStatementContentValue'>Value</div>
                        <div className='monthlyStatementContentDate'>Date</div>
                        </div>                        
                        {expensesState.map((expense, index) => {
                             sumExpenses += expense.value

                            return(
                                <div className="monthlyStatementContentBody" key={index}>                                                                
                                    <div className='monthlyStatementContentDescription'>{expense.description}</div>
                                    <div className='monthlyStatementContentValue'>{expense.value.toFixed(2)}</div>
                                    <div className='monthlyStatementContentDate'>{expense.date}</div>
                                </div>
                            )
                        })}
                        <div className='monthlyStatementTotalWrapper'>
                            <div className='monthlyStatementContentTotalDescription'>TOTAL</div>
                            <div className='monthlyStatementContentTotalValue'>{'R$' + sumExpenses.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <button onClick={goToHome} className='goBackBtn'>Go Back</button>
        </div>
  )
}

export default MonthlyStatementPage