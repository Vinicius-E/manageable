import React from 'react'
import { useNavigate } from 'react-router-dom'

const MonthlyStatementPage = () => {
    const navigate = useNavigate()
    
    const goToHome = () => {
        return navigate("/")
    }
  
    return (
        <>
            <h1>MonthlyStatementPage</h1>
            <button onClick={goToHome}>Go Back</button>
        </>
  )
}

export default MonthlyStatementPage